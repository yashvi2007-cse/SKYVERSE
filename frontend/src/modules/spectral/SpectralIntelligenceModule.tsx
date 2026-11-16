import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import {
  Activity,
  Layers,
  Sliders,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Filter,
  Sparkles
} from 'lucide-react';
import { SpectrumResponse, SpectralPoint } from '../../types/astronomy';
import { fetchSpectrum } from '../../services/api';

interface SpectralIntelligenceModuleProps {
  currentCoords: { ra: number; dec: number; fov: number };
}

export const SpectralIntelligenceModule: React.FC<SpectralIntelligenceModuleProps> = ({
  currentCoords
}) => {
  const [spectrum, setSpectrum] = useState<SpectrumResponse | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [showFeatureMarkers, setShowFeatureMarkers] = useState(true);
  const [showBandRegions, setShowBandRegions] = useState(true);
  const [selectedDetectorFilter, setSelectedDetectorFilter] = useState<string>('ALL');

  useEffect(() => {
    async function loadSpectrum() {
      try {
        setLoading(true);
        const data = await fetchSpectrum(currentCoords.ra, currentCoords.dec, 6.2);
        setSpectrum(data);
        if (data.points.length > 0) {
          // Select peak channel by default
          setSelectedChannel(data.peak_flux.channel);
        }
      } catch (err) {
        console.error('Error fetching spectrum:', err);
      } finally {
        setLoading(false);
      }
    }
    loadSpectrum();
  }, [currentCoords.ra, currentCoords.dec]);

  const activeChannelDetail = spectrum?.points.find((p) => p.channel === selectedChannel);

  // Filter points if detector filter is active
  const filteredPoints = spectrum
    ? selectedDetectorFilter === 'ALL'
      ? spectrum.points
      : spectrum.points.filter((p) => p.detector === selectedDetectorFilter)
    : [];

  // Plotly data traces
  const wavelengths = filteredPoints.map((p) => p.wavelength_um);
  const fluxes = filteredPoints.map((p) => p.flux_mJy);
  const uncertainties = filteredPoints.map((p) => p.uncertainty_mJy);

  const traces: any[] = [
    {
      x: wavelengths,
      y: fluxes,
      error_y: {
        type: 'data',
        array: uncertainties,
        visible: true,
        color: 'rgba(108, 140, 255, 0.4)',
        thickness: 1.2,
        width: 3
      },
      mode: 'lines+markers',
      name: 'Extracted Spectrum',
      line: { color: '#6C8CFF', width: 2 },
      marker: {
        size: 5,
        color: filteredPoints.map((p) =>
          p.channel === selectedChannel ? '#F43F5E' : '#49D7E8'
        )
      },
      type: 'scatter'
    }
  ];

  // Band shading layouts
  const bandShapes = showBandRegions
    ? [
        { type: 'rect', xref: 'x', yref: 'paper', x0: 0.75, x1: 1.12, y0: 0, y1: 1, fillcolor: 'rgba(73, 215, 232, 0.05)', line: { width: 0 } },
        { type: 'rect', xref: 'x', yref: 'paper', x0: 1.12, x1: 1.65, y0: 0, y1: 1, fillcolor: 'rgba(108, 140, 255, 0.05)', line: { width: 0 } },
        { type: 'rect', xref: 'x', yref: 'paper', x0: 1.65, x1: 2.42, y0: 0, y1: 1, fillcolor: 'rgba(167, 139, 250, 0.05)', line: { width: 0 } },
        { type: 'rect', xref: 'x', yref: 'paper', x0: 2.42, x1: 3.82, y0: 0, y1: 1, fillcolor: 'rgba(245, 158, 11, 0.05)', line: { width: 0 } },
        { type: 'rect', xref: 'x', yref: 'paper', x0: 3.82, x1: 4.42, y0: 0, y1: 1, fillcolor: 'rgba(16, 185, 129, 0.05)', line: { width: 0 } },
        { type: 'rect', xref: 'x', yref: 'paper', x0: 4.42, x1: 5.00, y0: 0, y1: 1, fillcolor: 'rgba(244, 63, 94, 0.05)', line: { width: 0 } }
      ]
    : [];

  // Spectral line annotations
  const annotations: any[] = [];
  if (showFeatureMarkers && spectrum?.reference_features) {
    spectrum.reference_features.forEach((feat) => {
      annotations.push({
        x: feat.wavelength,
        y: 0.95,
        yref: 'paper',
        text: feat.name,
        showarrow: true,
        arrowhead: 2,
        ax: 0,
        ay: -25,
        font: { size: 9, color: '#94A3B8', family: 'JetBrains Mono' },
        arrowcolor: 'rgba(148, 163, 184, 0.3)'
      });
    });
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Spectral Intelligence Header */}
      <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#6C8CFF]" />
              Spectral Intelligence Lab
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Continuous near-infrared spectroscopy across SPHEREx's 102 channels (0.75 - 5.00 µm).
            </p>
          </div>

          {/* Detector Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#111C2E] p-1 rounded-xl border border-[#1E2D45] text-xs font-mono">
            <span className="text-[#94A3B8] px-2">Detector:</span>
            {['ALL', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6'].map((det) => (
              <button
                key={det}
                onClick={() => setSelectedDetectorFilter(det)}
                className={`px-2 py-1 rounded transition text-[11px] ${
                  selectedDetectorFilter === det
                    ? 'bg-[#6C8CFF] text-[#080D18] font-bold'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {det}
              </button>
            ))}
          </div>
        </div>

        {/* Feature & Band toggles */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1E2D45] text-xs font-mono flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-[#94A3B8] cursor-pointer">
              <input
                type="checkbox"
                checked={showFeatureMarkers}
                onChange={(e) => setShowFeatureMarkers(e.target.checked)}
                className="accent-[#6C8CFF]"
              />
              <span>Interstellar / Atomic Features (H₂O, CO₂, CO, PAH, Brackett)</span>
            </label>

            <label className="flex items-center gap-2 text-[#94A3B8] cursor-pointer">
              <input
                type="checkbox"
                checked={showBandRegions}
                onChange={(e) => setShowBandRegions(e.target.checked)}
                className="accent-[#49D7E8]"
              />
              <span>SPHEREx 6 Band Boundaries</span>
            </label>
          </div>

          <div className="text-[11px] text-[#49D7E8]">
            Target: RA {currentCoords.ra}°, Dec {currentCoords.dec}°
          </div>
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        {loading ? (
          <div className="h-[400px] flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#94A3B8]">
            <Activity className="w-8 h-8 animate-spin text-[#6C8CFF]" />
            <span>Extracting 102-channel spectral cube measurements...</span>
          </div>
        ) : (
          <div className="w-full h-[420px]">
            <Plot
              data={traces}
              layout={{
                autosize: true,
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                margin: { l: 60, r: 20, t: 30, b: 50 },
                xaxis: {
                  title: { text: 'Wavelength λ (µm)', font: { color: '#94A3B8', size: 12 } },
                  tickfont: { color: '#94A3B8', family: 'JetBrains Mono', size: 10 },
                  gridcolor: 'rgba(30, 45, 69, 0.6)',
                  zerolinecolor: '#1E2D45',
                  range: [0.70, 5.05]
                },
                yaxis: {
                  title: { text: 'Flux Density F_ν (mJy)', font: { color: '#94A3B8', size: 12 } },
                  tickfont: { color: '#94A3B8', family: 'JetBrains Mono', size: 10 },
                  gridcolor: 'rgba(30, 45, 69, 0.6)',
                  zerolinecolor: '#1E2D45'
                },
                shapes: bandShapes as any,
                annotations: annotations as any,
                showlegend: false
              }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
              onClick={(data: any) => {
                if (data.points && data.points.length > 0) {
                  const ptIndex = data.points[0].pointIndex;
                  if (filteredPoints[ptIndex]) {
                    setSelectedChannel(filteredPoints[ptIndex].channel);
                  }
                }
              }}
            />
          </div>
        )}

        {/* Channel Slider Control */}
        <div className="bg-[#111C2E] p-4 rounded-xl border border-[#1E2D45] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#94A3B8]">Select Channel:</span>
            <span className="text-[#F1F5F9] font-bold">
              Channel {selectedChannel} of 102 (λ = {activeChannelDetail?.wavelength_um} µm, Band {activeChannelDetail?.band})
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="102"
            value={selectedChannel}
            onChange={(e) => setSelectedChannel(Number(e.target.value))}
            className="w-full accent-[#6C8CFF]"
          />
        </div>
      </div>

      {/* Channel Inspector & Scientific Notes */}
      {activeChannelDetail && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Detailed Inspector Card */}
          <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2D45] pb-3">
              <span className="font-bold text-sm text-[#F1F5F9]">
                Channel {activeChannelDetail.channel} Inspection
              </span>
              <span className="px-2 py-0.5 rounded bg-[#49D7E8]/15 text-[#49D7E8]">
                {activeChannelDetail.detector} ({activeChannelDetail.wavelength_min_um} - {activeChannelDetail.wavelength_max_um} µm)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Flux Density:</div>
                <div className="text-base font-bold text-[#F1F5F9] mt-1">
                  {activeChannelDetail.flux_mJy} mJy
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">1-σ Uncertainty:</div>
                <div className="text-base font-bold text-[#6C8CFF] mt-1">
                  ±{activeChannelDetail.uncertainty_mJy} mJy
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Signal-to-Noise (SNR):</div>
                <div className="text-base font-bold text-[#10B981] mt-1">
                  {activeChannelDetail.snr}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Resolving Power (R):</div>
                <div className="text-base font-bold text-[#A78BFA] mt-1">
                  {activeChannelDetail.resolving_power}
                </div>
              </div>
            </div>

            {activeChannelDetail.features.length > 0 && (
              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#F59E0B]/30 text-[#F59E0B]">
                <span className="font-bold">Detected Features in Bandpass:</span> {activeChannelDetail.features.join(', ')}
              </div>
            )}
          </div>

          {/* Scientific Methodology Note */}
          <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-3 text-xs leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-sm text-[#F1F5F9]">
              <Info className="w-4 h-4 text-[#49D7E8]" />
              Scientific Methodology & Cube Extraction
            </div>

            <p className="text-[#94A3B8]">
              {spectrum?.methodology_note ||
                'Quick-look aperture photometry is extracted across all 6 SPHEREx detector arrays (D1 to D6) from the All-Sky Mosaic Cubes. Each detector is equipped with a Linear Variable Filter (LVF), yielding 17 spectral samples per band across 0.75 to 5.0 µm.'}
            </p>

            <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-[11px] text-[#94A3B8] space-y-1">
              <div className="text-[#F1F5F9] font-medium">Important Scientific Distinction:</div>
              <div>• 102 channels represent simultaneous wavelength samples, NOT time epochs.</div>
              <div>• Quick-look cube spectra provide immediate spectral classification; point source forced-photometry products should be used for sub-percent cosmological measurements.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

