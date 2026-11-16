import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Layers,
  ArrowRightLeft,
  Calendar,
  CheckCircle2,
  Compass,
  Zap,
  Activity,
  Crosshair,
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import { AstroCanvas } from '../../components/AstroCanvas';
import { ComparisonResponse, ObservationsResponse } from '../../types/astronomy';
import { fetchComparison, fetchObservations } from '../../services/api';

interface CosmicTimeMachineProps {
  currentCoords: { ra: number; dec: number; fov: number };
  onMarkSourceForInvestigation?: (sourceData: any) => void;
}

export const CosmicTimeMachineModule: React.FC<CosmicTimeMachineProps> = ({
  currentCoords,
  onMarkSourceForInvestigation
}) => {
  const [mode, setMode] = useState<'blink' | 'timelapse' | 'overlay' | 'difference' | 'position'>('blink');
  const [band, setBand] = useState(1);
  const [stretch, setStretch] = useState('asinh');

  // Comparison data
  const [compData, setCompData] = useState<ComparisonResponse | null>(null);
  const [observations, setObservations] = useState<ObservationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mode 1: Blink state
  const [blinking, setBlinking] = useState(false);
  const [blinkSpeedMs, setBlinkSpeedMs] = useState(400); // 400ms default
  const [activeBlinkFrame, setActiveBlinkFrame] = useState<'A' | 'B'>('A');

  // Mode 2: Timelapse state
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [timelapsePlaying, setTimelapsePlaying] = useState(false);

  // Mode 3: Overlay state
  const [overlayOpacity, setOverlayOpacity] = useState(50); // 50%

  // Mode 5: Position inspection
  const [markedSourceA, setMarkedSourceA] = useState<{ x: number; y: number; ra: number; dec: number } | null>(null);
  const [markedSourceB, setMarkedSourceB] = useState<{ x: number; y: number; ra: number; dec: number } | null>(null);

  // Fetch observations & epochs
  useEffect(() => {
    async function loadEpochs() {
      try {
        setLoading(true);
        setError(null);
        const obs = await fetchObservations(currentCoords.ra, currentCoords.dec, currentCoords.fov);
        setObservations(obs);

        // Epoch A and Epoch B default
        const epA = obs.epochs.length > 0 ? obs.epochs[0].mjd : 60801.514;
        const epB = obs.epochs.length > 1 ? obs.epochs[1].mjd : 60986.376;

        const comp = await fetchComparison(
          currentCoords.ra,
          currentCoords.dec,
          currentCoords.fov,
          band,
          epA,
          epB,
          stretch
        );
        setCompData(comp);
      } catch (err: any) {
        setError(err.message || 'Failed to load time-domain comparison data.');
      } finally {
        setLoading(false);
      }
    }
    loadEpochs();
  }, [currentCoords.ra, currentCoords.dec, currentCoords.fov, band, stretch]);

  // Blink Interval Timer
  useEffect(() => {
    let timer: any = null;
    if (blinking && mode === 'blink') {
      timer = setInterval(() => {
        setActiveBlinkFrame((prev) => (prev === 'A' ? 'B' : 'A'));
      }, blinkSpeedMs);
    }
    return () => clearInterval(timer);
  }, [blinking, blinkSpeedMs, mode]);

  // Timelapse Timer
  useEffect(() => {
    let timer: any = null;
    if (timelapsePlaying && mode === 'timelapse') {
      timer = setInterval(() => {
        setTimelineIndex((prev) => (prev === 0 ? 1 : 0));
      }, 700);
    }
    return () => clearInterval(timer);
  }, [timelapsePlaying, mode]);

  // Blended overlay matrix calculation (Mode 3)
  const blendedPixels = React.useMemo(() => {
    if (!compData) return [];
    const pixA = compData.epoch_a.pixels;
    const pixB = compData.epoch_b.pixels;
    const alpha = overlayOpacity / 100.0;
    const h = pixA.length;
    const w = h > 0 ? pixA[0].length : 0;
    const res: number[][] = [];
    for (let y = 0; y < h; y++) {
      const row: number[] = [];
      for (let x = 0; x < w; x++) {
        row.push(pixA[y][x] * (1 - alpha) + pixB[y][x] * alpha);
      }
      res.push(row);
    }
    return res;
  }, [compData, overlayOpacity]);

  // Calculate apparent displacement for Mode 5
  const displacementResult = React.useMemo(() => {
    if (!markedSourceA || !markedSourceB || !compData) return null;
    const dx = markedSourceB.x - markedSourceA.x;
    const dy = markedSourceB.y - markedSourceA.y;
    const distPix = Math.hypot(dx, dy);

    const pixScale = compData.wcs?.PIXSCALE || 6.2;
    const totalArcsec = distPix * pixScale;

    const dra = (markedSourceB.ra - markedSourceA.ra) * Math.cos((currentCoords.dec * Math.PI) / 180.0) * 3600;
    const ddec = (markedSourceB.dec - markedSourceA.dec) * 3600;

    const paDeg = (Math.atan2(dra, ddec) * 180.0) / Math.PI;
    const normalizedPa = (paDeg + 360) % 360;

    const dtYears = Math.max(0.01, compData.delta_days / 365.25);
    const properMotionArcsecYr = totalArcsec / dtYears;

    return {
      distPix: round(distPix, 2),
      totalArcsec: round(totalArcsec, 2),
      dra: round(dra, 2),
      ddec: round(ddec, 2),
      paDeg: round(normalizedPa, 1),
      pmEstimate: round(properMotionArcsecYr, 2)
    };
  }, [markedSourceA, markedSourceB, compData, currentCoords.dec]);

  function round(val: number, decimals: number) {
    return Number(val.toFixed(decimals));
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Time Machine Header & Mode Switcher */}
      <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#49D7E8]" />
              Cosmic Time Machine
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Compare authentic SPHEREx observation epochs separated by ~{compData ? Math.round(compData.delta_days) : 185} days.
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex items-center bg-[#111C2E] p-1 rounded-xl border border-[#1E2D45] text-xs font-medium">
            <button
              onClick={() => { setMode('blink'); setBlinking(true); }}
              className={`px-3 py-1.5 rounded-lg transition ${
                mode === 'blink' ? 'bg-[#6C8CFF] text-[#080D18] font-bold shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              1. Blink Comparator
            </button>
            <button
              onClick={() => { setMode('timelapse'); setTimelapsePlaying(true); }}
              className={`px-3 py-1.5 rounded-lg transition ${
                mode === 'timelapse' ? 'bg-[#49D7E8] text-[#080D18] font-bold shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              2. Time-Lapse
            </button>
            <button
              onClick={() => setMode('overlay')}
              className={`px-3 py-1.5 rounded-lg transition ${
                mode === 'overlay' ? 'bg-[#A78BFA] text-[#080D18] font-bold shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              3. Image Overlay
            </button>
            <button
              onClick={() => setMode('difference')}
              className={`px-3 py-1.5 rounded-lg transition ${
                mode === 'difference' ? 'bg-[#F59E0B] text-[#080D18] font-bold shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              4. Difference View
            </button>
            <button
              onClick={() => setMode('position')}
              className={`px-3 py-1.5 rounded-lg transition ${
                mode === 'position' ? 'bg-[#10B981] text-[#080D18] font-bold shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              5. Position Inspection
            </button>
          </div>
        </div>

        {/* Band & Stretch Selection */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1E2D45] flex-wrap gap-2 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#94A3B8]">Spectral Band:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6].map((b) => (
                <button
                  key={b}
                  onClick={() => setBand(b)}
                  className={`px-2.5 py-1 rounded border text-[11px] ${
                    band === b
                      ? 'bg-[#1E2D45] text-[#49D7E8] border-[#49D7E8]/50 font-bold'
                      : 'bg-[#111C2E] text-[#94A3B8] border-[#1E2D45] hover:text-white'
                  }`}
                >
                  Band {b}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span>Epoch Δt:</span>
            <span className="text-[#F1F5F9] font-bold">~{compData?.delta_days.toFixed(1)} days</span>
            <span className="text-[10px] text-[#49D7E8]">(May 2025 vs Nov 2025)</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage for Selected Mode */}
      {loading ? (
        <div className="h-[460px] rounded-2xl bg-[#0E1626] border border-[#1E2D45] flex flex-col items-center justify-center gap-3 text-xs text-[#94A3B8] font-mono">
          <Activity className="w-8 h-8 animate-spin text-[#6C8CFF]" />
          <span>Synchronizing multi-epoch WCS astrometry...</span>
        </div>
      ) : compData ? (
        <div className="space-y-6">
          {/* ================= MODE 1: BLINK COMPARATOR ================= */}
          {mode === 'blink' && (
            <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setBlinking(!blinking)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${
                      blinking
                        ? 'bg-[#F43F5E] text-white hover:bg-[#E11D48]'
                        : 'bg-[#10B981] text-[#080D18] hover:bg-[#059669]'
                    }`}
                  >
                    {blinking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {blinking ? 'Pause Blinking' : 'Start Blinking'}
                  </button>

                  <button
                    onClick={() => setActiveBlinkFrame((f) => (f === 'A' ? 'B' : 'A'))}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#F1F5F9] hover:bg-[#1E2D45] transition"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5 text-[#6C8CFF]" />
                    Toggle Epoch ({activeBlinkFrame})
                  </button>
                </div>

                {/* Blink Speed Slider */}
                <div className="flex items-center gap-3 bg-[#111C2E] px-3 py-1.5 rounded-xl border border-[#1E2D45] text-xs font-mono">
                  <span className="text-[#94A3B8]">Blink Speed:</span>
                  <input
                    type="range"
                    min="150"
                    max="1200"
                    step="50"
                    value={blinkSpeedMs}
                    onChange={(e) => setBlinkSpeedMs(Number(e.target.value))}
                    className="w-24 accent-[#6C8CFF]"
                  />
                  <span className="text-[#49D7E8] font-bold w-12">{blinkSpeedMs} ms</span>
                </div>

                {/* Active Epoch Indicator */}
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className={`px-2.5 py-1 rounded-lg border ${activeBlinkFrame === 'A' ? 'bg-[#6C8CFF]/20 text-[#6C8CFF] border-[#6C8CFF]/40 font-bold' : 'text-[#94A3B8] border-[#1E2D45]'}`}>
                    Epoch A: {compData.epoch_a.date.split('T')[0]}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg border ${activeBlinkFrame === 'B' ? 'bg-[#49D7E8]/20 text-[#49D7E8] border-[#49D7E8]/40 font-bold' : 'text-[#94A3B8] border-[#1E2D45]'}`}>
                    Epoch B: {compData.epoch_b.date.split('T')[0]}
                  </span>
                </div>
              </div>

              {/* Canvas Display */}
              <div className="h-[460px] w-full max-w-2xl mx-auto">
                <AstroCanvas
                  pixels={activeBlinkFrame === 'A' ? compData.epoch_a.pixels : compData.epoch_b.pixels}
                  wcs={compData.wcs}
                  colormap="infrared"
                />
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs text-[#94A3B8] text-center font-mono">
                Blinking rapidly alternates between observation epochs. Moving objects jump back and forth along their proper motion vector; variable stars pulse in intensity.
              </div>
            </div>
          )}

          {/* ================= MODE 2: TIME-LAPSE ================= */}
          {mode === 'timelapse' && (
            <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <button
                  onClick={() => setTimelapsePlaying(!timelapsePlaying)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${
                    timelapsePlaying ? 'bg-[#F43F5E] text-white' : 'bg-[#49D7E8] text-[#080D18]'
                  }`}
                >
                  {timelapsePlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {timelapsePlaying ? 'Pause Time-Lapse' : 'Play Chronological Sequence'}
                </button>

                <div className="text-xs font-mono text-[#F1F5F9] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#49D7E8]" />
                  <span>
                    Viewing: {timelineIndex === 0 ? compData.epoch_a.date : compData.epoch_b.date} (Epoch {timelineIndex + 1} of 2)
                  </span>
                </div>
              </div>

              {/* Timeline Slider */}
              <div className="space-y-1 bg-[#111C2E] p-4 rounded-xl border border-[#1E2D45]">
                <div className="flex justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Epoch 1: {compData.epoch_a.date.split('T')[0]}</span>
                  <span>Epoch 2: {compData.epoch_b.date.split('T')[0]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  value={timelineIndex}
                  onChange={(e) => setTimelineIndex(Number(e.target.value))}
                  className="w-full accent-[#49D7E8]"
                />
              </div>

              <div className="h-[460px] w-full max-w-2xl mx-auto">
                <AstroCanvas
                  pixels={timelineIndex === 0 ? compData.epoch_a.pixels : compData.epoch_b.pixels}
                  wcs={compData.wcs}
                  colormap="infrared"
                />
              </div>
            </div>
          )}

          {/* ================= MODE 3: IMAGE OVERLAY ================= */}
          {mode === 'overlay' && (
            <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-4 shadow-xl">
              <div className="bg-[#111C2E] p-4 rounded-xl border border-[#1E2D45] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#6C8CFF] font-bold">Epoch A (100%)</span>
                  <span>← Blend Opacity →</span>
                  <span className="text-[#49D7E8] font-bold">Epoch B (100%)</span>
                </div>

                <div className="flex-1 max-w-md flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-full accent-[#A78BFA]"
                  />
                  <span className="text-xs font-mono text-[#A78BFA] font-bold w-12">{overlayOpacity}%</span>
                </div>
              </div>

              <div className="h-[460px] w-full max-w-2xl mx-auto">
                <AstroCanvas
                  pixels={blendedPixels}
                  wcs={compData.wcs}
                  colormap="infrared"
                />
              </div>
            </div>
          )}

          {/* ================= MODE 4: DIFFERENCE VIEW ================= */}
          {mode === 'difference' && (
            <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-6 shadow-xl">
              {/* Scientific Difference Diagnostics Banner */}
              <div className={`p-4 rounded-xl border flex items-start justify-between gap-4 flex-wrap ${
                compData.difference.has_motion_dipole
                  ? 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]'
                  : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8]'
              }`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#F1F5F9]">
                    <Activity className="w-4 h-4 text-[#F59E0B]" />
                    Astrophysical Difference Diagnostics (Epoch B - Epoch A)
                  </div>
                  <p className="text-xs text-[#94A3B8] max-w-3xl leading-relaxed">
                    {compData.difference.scientific_interpretation}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#111C2E] text-[#10B981] border border-[#1E2D45]">
                    + Residuals: {compData.difference.positive_residuals_count}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#111C2E] text-[#F43F5E] border border-[#1E2D45]">
                    - Residuals: {compData.difference.negative_residuals_count}
                  </span>
                </div>
              </div>

              {/* 3-Panel Side-by-Side Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Reference Epoch A */}
                <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#6C8CFF] flex items-center justify-between">
                    <span>Reference Image (Epoch A)</span>
                    <span className="text-[10px] text-[#94A3B8]">{compData.epoch_a.date.split('T')[0]}</span>
                  </div>
                  <div className="h-[280px]">
                    <AstroCanvas pixels={compData.epoch_a.pixels} wcs={compData.wcs} colormap="infrared" />
                  </div>
                </div>

                {/* Comparison Epoch B */}
                <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#49D7E8] flex items-center justify-between">
                    <span>Comparison Image (Epoch B)</span>
                    <span className="text-[10px] text-[#94A3B8]">{compData.epoch_b.date.split('T')[0]}</span>
                  </div>
                  <div className="h-[280px]">
                    <AstroCanvas pixels={compData.epoch_b.pixels} wcs={compData.wcs} colormap="infrared" />
                  </div>
                </div>

                {/* Difference Image (B - A) */}
                <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#F59E0B] flex items-center justify-between">
                    <span>Difference (B - A)</span>
                    <span className="text-[10px] text-[#F59E0B]">Diverging Z-score</span>
                  </div>
                  <div className="h-[280px]">
                    <AstroCanvas
                      pixels={compData.difference.difference_pixels}
                      wcs={compData.wcs}
                      colormap="coolwarm"
                    />
                  </div>
                </div>
              </div>

              {/* Diverging Colormap Legend */}
              <div className="flex items-center justify-between bg-[#111C2E] p-3 rounded-xl border border-[#1E2D45] text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#3B4CC0]" />
                  <span>Negative flux residual (source vacated or dimmed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#DCDCDC]" />
                  <span>Zero change (background noise limit)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#B40426]" />
                  <span>Positive flux residual (source arrived or brightened)</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODE 5: POSITION INSPECTION ================= */}
          {mode === 'position' && (
            <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-6 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#F1F5F9]">
                  <Crosshair className="w-4 h-4 text-[#10B981]" />
                  <span>Click on the source in Epoch A and Epoch B to measure physical displacement.</span>
                </div>
                <button
                  onClick={() => { setMarkedSourceA(null); setMarkedSourceB(null); }}
                  className="px-2.5 py-1 rounded bg-[#111C2E] text-[#94A3B8] hover:text-white border border-[#1E2D45]"
                >
                  Clear Markers
                </button>
              </div>

              {/* Two side-by-side clickable canvases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6C8CFF]">
                    <span>1. Mark Source in Epoch A ({compData.epoch_a.date.split('T')[0]})</span>
                    {markedSourceA && <span className="text-[#10B981]">Marked ({markedSourceA.x}, {markedSourceA.y})</span>}
                  </div>
                  <div className="h-[340px]">
                    <AstroCanvas
                      pixels={compData.epoch_a.pixels}
                      wcs={compData.wcs}
                      colormap="infrared"
                      markedPoint={markedSourceA}
                      onPixelClick={(x, y, ra, dec) => setMarkedSourceA({ x, y, ra, dec })}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#49D7E8]">
                    <span>2. Mark Source in Epoch B ({compData.epoch_b.date.split('T')[0]})</span>
                    {markedSourceB && <span className="text-[#10B981]">Marked ({markedSourceB.x}, {markedSourceB.y})</span>}
                  </div>
                  <div className="h-[340px]">
                    <AstroCanvas
                      pixels={compData.epoch_b.pixels}
                      wcs={compData.wcs}
                      colormap="infrared"
                      markedPoint={markedSourceB}
                      onPixelClick={(x, y, ra, dec) => setMarkedSourceB({ x, y, ra, dec })}
                    />
                  </div>
                </div>
              </div>

              {/* Astrometric Displacement Measurements */}
              {displacementResult && (
                <div className="p-5 rounded-xl bg-[#111C2E] border border-[#10B981]/40 space-y-3">
                  <div className="text-sm font-bold text-[#10B981] flex items-center gap-2 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    Measured Astrometric Displacement
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="bg-[#0E1626] p-3 rounded-lg border border-[#1E2D45]">
                      <div className="text-[#94A3B8]">Pixel Separation:</div>
                      <div className="text-base font-bold text-white mt-1">{displacementResult.distPix} px</div>
                    </div>
                    <div className="bg-[#0E1626] p-3 rounded-lg border border-[#1E2D45]">
                      <div className="text-[#94A3B8]">Angular Shift (Δθ):</div>
                      <div className="text-base font-bold text-[#49D7E8] mt-1">{displacementResult.totalArcsec}" arcsec</div>
                    </div>
                    <div className="bg-[#0E1626] p-3 rounded-lg border border-[#1E2D45]">
                      <div className="text-[#94A3B8]">Position Angle (PA):</div>
                      <div className="text-base font-bold text-[#A78BFA] mt-1">{displacementResult.paDeg}°</div>
                    </div>
                    <div className="bg-[#0E1626] p-3 rounded-lg border border-[#1E2D45]">
                      <div className="text-[#94A3B8]">Estimated Proper Motion:</div>
                      <div className="text-base font-bold text-[#F59E0B] mt-1">~{displacementResult.pmEstimate}" / yr</div>
                    </div>
                  </div>

                  {onMarkSourceForInvestigation && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onMarkSourceForInvestigation({
                          sourceA: markedSourceA,
                          sourceB: markedSourceB,
                          displacement: displacementResult
                        })}
                        className="px-4 py-2 rounded-xl bg-[#10B981] text-[#080D18] font-bold text-xs font-mono flex items-center gap-2 hover:bg-[#059669] transition"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Send Marked Source to Investigation Lab
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-[#0E1626] border border-[#1E2D45] text-center text-xs font-mono text-[#94A3B8]">
          No comparison data available for current coordinates.
        </div>
      )}
    </div>
  );
};

