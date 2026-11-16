import React, { useRef, useEffect, useState, useMemo } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Grid, Compass, SunMedium } from 'lucide-react';

interface AstroCanvasProps {
  pixels: number[][];
  wcs?: Record<string, any>;
  colormap?: 'magma' | 'viridis' | 'coolwarm' | 'grayscale' | 'infrared';
  invertColormap?: boolean;
  onPixelClick?: (pixelX: number, pixelY: number, ra: number, dec: number) => void;
  showCrosshair?: boolean;
  showOrientation?: boolean;
  showScale?: boolean;
  markedPoint?: { x: number; y: number } | null;
  comparisonMode?: boolean;
}

// Colormap color lookup tables (0.0 to 1.0)
function getColor(val: number, cmap: string, invert: boolean): [number, number, number] {
  let v = Math.max(0, Math.min(1, val));
  if (invert) v = 1 - v;

  if (cmap === 'grayscale') {
    const c = Math.round(v * 255);
    return [c, c, c];
  } else if (cmap === 'coolwarm') {
    // Standard diverging colormap for difference images (centered at 0.5)
    if (v < 0.5) {
      const t = v / 0.5;
      return [
        Math.round(59 + t * (220 - 59)),
        Math.round(76 + t * (220 - 76)),
        Math.round(192 + t * (220 - 192))
      ];
    } else {
      const t = (v - 0.5) / 0.5;
      return [
        Math.round(220 + t * (180 - 220)),
        Math.round(220 - t * (220 - 40)),
        Math.round(220 - t * (220 - 40))
      ];
    }
  } else if (cmap === 'viridis') {
    // Approximation of Viridis
    const r = Math.round(255 * Math.sin(v * Math.PI * 0.8));
    const g = Math.round(255 * Math.sin(v * Math.PI));
    const b = Math.round(255 * Math.cos(v * Math.PI * 0.5));
    return [r, g, b];
  } else if (cmap === 'infrared') {
    // Near-Infrared SPHEREx thermal palette: dark blue -> purple -> amber -> white
    if (v < 0.3) {
      const t = v / 0.3;
      return [Math.round(15 + t * 40), Math.round(15 + t * 20), Math.round(40 + t * 120)];
    } else if (v < 0.7) {
      const t = (v - 0.3) / 0.4;
      return [Math.round(55 + t * 170), Math.round(35 + t * 100), Math.round(160 - t * 120)];
    } else {
      const t = (v - 0.7) / 0.3;
      return [Math.round(225 + t * 30), Math.round(135 + t * 120), Math.round(40 + t * 215)];
    }
  } else {
    // Magma default
    if (v < 0.33) {
      const t = v / 0.33;
      return [Math.round(t * 120), Math.round(t * 20), Math.round(t * 140)];
    } else if (v < 0.66) {
      const t = (v - 0.33) / 0.33;
      return [Math.round(120 + t * 110), Math.round(20 + t * 60), Math.round(140 - t * 40)];
    } else {
      const t = (v - 0.66) / 0.34;
      return [Math.round(230 + t * 25), Math.round(80 + t * 170), Math.round(100 + t * 155)];
    }
  }
}

export const AstroCanvas: React.FC<AstroCanvasProps> = ({
  pixels,
  wcs,
  colormap = 'magma',
  invertColormap = false,
  onPixelClick,
  showCrosshair = true,
  showOrientation = true,
  showScale = true,
  markedPoint = null
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; val: number; ra: number; dec: number } | null>(null);
  const [showGrid, setShowGrid] = useState(false);

  const height = pixels.length;
  const width = height > 0 ? pixels[0].length : 0;

  // Convert pixel (X, Y) to celestial (RA, Dec) via WCS linear TAN projection
  const pixelToSky = (px: number, py: number) => {
    if (!wcs || !wcs.CRVAL1) return { ra: 0, dec: 0 };
    const crval1 = wcs.CRVAL1;
    const crval2 = wcs.CRVAL2;
    const crpix1 = wcs.CRPIX1 || width / 2;
    const crpix2 = wcs.CRPIX2 || height / 2;
    const cdelt1 = wcs.CDELT1 || -0.1 / width;
    const cdelt2 = wcs.CDELT2 || 0.1 / height;

    const dx = px - crpix1;
    const dy = py - crpix2;

    const decRad = (crval2 * Math.PI) / 180.0;
    const ra = crval1 + (dx * cdelt1) / Math.cos(decRad);
    const dec = crval2 + dy * cdelt2;

    return { ra: Number(ra.toFixed(6)), dec: Number(dec.toFixed(6)) };
  };

  // Render pixels onto canvas
  useEffect(() => {
    if (!canvasRef.current || width === 0 || height === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const val = pixels[y][x];
        const [r, g, b] = getColor(val, colormap, invertColormap);
        const idx = (y * width + x) * 4;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = 255;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, [pixels, colormap, invertColormap, width, height]);

  // Handle Mouse Events for Pan & Zoom
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }

    // Compute pixel position under mouse
    const mouseX = e.clientX - rect.left - rect.width / 2 - pan.x;
    const mouseY = e.clientY - rect.top - rect.height / 2 - pan.y;

    const renderSize = Math.min(rect.width, rect.height) * zoom;
    const scale = renderSize / width;

    const imgX = Math.floor(mouseX / scale + width / 2);
    const imgY = Math.floor(mouseY / scale + height / 2);

    if (imgX >= 0 && imgX < width && imgY >= 0 && imgY < height) {
      const val = pixels[imgY][imgX];
      const { ra, dec } = pixelToSky(imgX, imgY);
      setCursorPos({ x: imgX, y: imgY, val, ra, dec });
    } else {
      setCursorPos(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 0.85;
    setZoom((prev) => Math.max(0.8, Math.min(10.0, prev * factor)));
  };

  const handleClick = () => {
    if (cursorPos && onPixelClick) {
      onPixelClick(cursorPos.x, cursorPos.y, cursorPos.ra, cursorPos.dec);
    }
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Scale computation in arcseconds
  const arcsecPerPix = wcs?.PIXSCALE || ((wcs?.CDELT2 || 0.0008) * 3600);
  const scaleBarPix = 20; // 20 pixels bar
  const scaleBarArcsec = Math.round(scaleBarPix * arcsecPerPix);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] bg-[#050811] rounded-xl border border-[#1E2D45] overflow-hidden select-none flex items-center justify-center cursor-crosshair-astro shadow-2xl"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        setIsDragging(false);
        setCursorPos(null);
      }}
      onWheel={handleWheel}
      onClick={handleClick}
    >
      {/* Zoomed Canvas */}
      <div
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: 'center center',
          imageRendering: 'pixelated',
          transition: isDragging ? 'none' : 'transform 0.05s ease-out'
        }}
        className="relative"
      >
        <canvas
          ref={canvasRef}
          className="rounded shadow-lg block max-w-none"
          style={{ width: '420px', height: '420px', imageRendering: 'pixelated' }}
        />

        {/* Marked Source Marker if present */}
        {markedPoint && (
          <div
            className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(markedPoint.x / width) * 100}%`,
              top: `${(markedPoint.y / height) * 100}%`
            }}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#49D7E8] animate-ping opacity-75" />
            <div className="w-3 h-3 rounded-full bg-[#49D7E8] absolute top-1 left-1 border border-black shadow" />
          </div>
        )}

        {/* WCS Coordinate Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-4 border border-[#6C8CFF]/20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-[#6C8CFF]/15" />
            ))}
          </div>
        )}
      </div>

      {/* Floating Controls Bar */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0E1626]/85 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#1E2D45] text-xs text-[#94A3B8] shadow-md z-10">
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(10, z * 1.25)); }}
          className="p-1 hover:text-white hover:bg-[#1E2D45] rounded transition"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(0.8, z / 1.25)); }}
          className="p-1 hover:text-white hover:bg-[#1E2D45] rounded transition"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); resetView(); }}
          className="p-1 hover:text-white hover:bg-[#1E2D45] rounded transition"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-3 bg-[#1E2D45] mx-0.5" />
        <button
          onClick={(e) => { e.stopPropagation(); setShowGrid(!showGrid); }}
          className={`p-1 rounded transition ${showGrid ? 'text-[#49D7E8] bg-[#1E2D45]' : 'hover:text-white'}`}
          title="Toggle WCS Grid"
        >
          <Grid className="w-4 h-4" />
        </button>
        <span className="text-[11px] font-mono text-[#6C8CFF] font-medium ml-1">
          {zoom.toFixed(1)}x
        </span>
      </div>

      {/* Orientation Compass (Top-Left) */}
      {showOrientation && (
        <div className="absolute top-3 left-3 bg-[#0E1626]/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#1E2D45] flex items-center gap-2 text-[11px] font-mono text-[#94A3B8]">
          <div className="relative w-5 h-5 flex items-center justify-center border border-[#1E2D45] rounded-full">
            <span className="absolute -top-1 text-[9px] text-[#49D7E8] font-bold">N</span>
            <span className="absolute -left-1 text-[9px] text-[#A78BFA] font-bold">E</span>
          </div>
          <span>ICRS WCS</span>
        </div>
      )}

      {/* Physical Scale Bar (Bottom-Left) */}
      {showScale && (
        <div className="absolute bottom-3 left-3 bg-[#0E1626]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1E2D45] text-[11px] font-mono text-[#94A3B8] flex items-center gap-2">
          <div className="w-10 h-1 bg-[#49D7E8] rounded-full" />
          <span>~{scaleBarArcsec}" arcsec</span>
        </div>
      )}

      {/* Real-time Cursor Readout (Bottom-Right) */}
      {showCrosshair && cursorPos && (
        <div className="absolute bottom-3 right-3 bg-[#0E1626]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1E2D45] text-xs font-mono text-[#F1F5F9] shadow-lg flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#94A3B8]">RA:</span>
            <span className="text-[#49D7E8] font-medium">{cursorPos.ra}°</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#94A3B8]">Dec:</span>
            <span className="text-[#49D7E8] font-medium">{cursorPos.dec}°</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-[#1E2D45] pl-2.5">
            <span className="text-[#94A3B8]">Flux:</span>
            <span className="text-[#A78BFA] font-medium">{cursorPos.val.toFixed(3)}</span>
          </div>
          <div className="text-[10px] text-[#94A3B8]">
            ({cursorPos.x}, {cursorPos.y})
          </div>
        </div>
      )}
    </div>
  );
};

