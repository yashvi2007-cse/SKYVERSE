import React, { useState, useEffect, useRef } from 'react';
import { VizType } from '../../../types/learnExplore';
import { Play, Pause, RotateCcw, Sliders, Info, Sparkles, Orbit, Compass, Activity } from 'lucide-react';

interface InteractiveVisualizerProps {
  vizType: VizType;
  title: string;
  description: string;
}

export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({
  vizType,
  title,
  description
}) => {
  // Shared animation state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);

  // Inverse Square state
  const [distance, setDistance] = useState<number>(2.0); // AU or relative
  const [luminosity, setLuminosity] = useState<number>(1.0); // Solar luminosities

  // Wavelength Spectrum state
  const [selectedWavelength, setSelectedWavelength] = useState<number>(3.05); // microns

  // Orbit state
  const [semiMajorAxis, setSemiMajorAxis] = useState<number>(1.5);
  const [eccentricity, setEccentricity] = useState<number>(0.4);

  // Stellar Mass state
  const [starMass, setStarMass] = useState<number>(1.0); // Solar masses

  // Light curve mode
  const [curveType, setCurveType] = useState<'transit' | 'pulsating' | 'binary'>('transit');

  // Redshift velocity
  const [velocityFraction, setVelocityFraction] = useState<number>(0.2); // v/c

  // Habitable zone star type
  const [starType, setStarType] = useState<'M' | 'K' | 'G' | 'F'>('G');

  // Galaxy dark matter toggle
  const [includeDarkMatter, setIncludeDarkMatter] = useState<boolean>(true);

  // Animation frame loop
  useEffect(() => {
    let animId: number;
    const update = () => {
      if (isPlaying) {
        setTime((t) => (t + 0.03) % (Math.PI * 200));
      }
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Derived values
  const relativeFlux = luminosity / (distance * distance);
  const apparentMag = 4.83 - 2.5 * Math.log10(luminosity) + 5 * Math.log10(distance * 10);

  return (
    <div className="rounded-2xl bg-[#09101E]/90 border border-[#1E2D45] overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Visualizer Top Bar */}
      <div className="p-4 border-b border-[#1E2D45] bg-[#0C1527] flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Simulated Educational Visualization
            </span>
          </div>
          <h4 className="text-sm font-bold font-display text-white mt-0.5">{title}</h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#F59E0B]" /> : <Play className="w-3.5 h-3.5 text-[#10B981]" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            onClick={() => {
              setTime(0);
              setDistance(2.0);
              setLuminosity(1.0);
              setSelectedWavelength(3.05);
              setSemiMajorAxis(1.5);
              setEccentricity(0.4);
              setVelocityFraction(0.2);
              setStarType('G');
            }}
            title="Reset Simulation"
            className="p-1.5 rounded-lg bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8] hover:text-white transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Canvas / Visual Container */}
      <div className="p-5">
        {/* ================= 1. INVERSE SQUARE LAW ================= */}
        {vizType === 'inverse-square' && (
          <div className="space-y-4">
            <div className="relative h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 overflow-hidden flex items-center justify-center">
              {/* Star at center-left */}
              <div className="absolute left-8 flex flex-col items-center">
                <div
                  className="rounded-full bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EF4444] shadow-[0_0_40px_rgba(245,158,11,0.8)] animate-pulse"
                  style={{ width: `${Math.max(24, luminosity * 30)}px`, height: `${Math.max(24, luminosity * 30)}px` }}
                />
                <span className="text-[10px] font-mono text-[#FDE047] mt-1 font-bold">L = {luminosity.toFixed(1)} L☉</span>
              </div>

              {/* Expanding wavefront arcs */}
              {[1, 2, 3, 4].map((step) => {
                const xPos = 48 + step * 60;
                const arcHeight = step * 40;
                return (
                  <div
                    key={step}
                    className="absolute border-r-2 border-dashed border-[#38BDF8]/40"
                    style={{
                      left: `${xPos}px`,
                      height: `${arcHeight}px`,
                      borderRadius: '50%'
                    }}
                  >
                    <span className="absolute -top-4 right-1 text-[9px] font-mono text-[#94A3B8]">
                      {step}d (Area={step * step}x)
                    </span>
                  </div>
                );
              })}

              {/* Detector Target */}
              <div
                className="absolute flex flex-col items-center transition-all duration-150"
                style={{ left: `${Math.min(320, 48 + distance * 60)}px` }}
              >
                <div className="w-8 h-12 rounded border-2 border-[#10B981] bg-[#10B981]/20 flex items-center justify-center shadow-lg shadow-[#10B981]/30">
                  <span className="text-[9px] font-mono text-white font-bold">1 m²</span>
                </div>
                <div className="mt-1 px-1.5 py-0.5 rounded bg-[#111C2E] border border-[#1E2D45] text-[9px] font-mono text-[#38BDF8]">
                  d = {distance.toFixed(1)} AU
                </div>
              </div>
            </div>

            {/* Sliders and Numerical Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#0C1527] border border-[#1E2D45]">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94A3B8]">Distance (d):</span>
                  <span className="text-white font-bold">{distance.toFixed(1)} AU</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4.5"
                  step="0.1"
                  value={distance}
                  onChange={(e) => setDistance(parseFloat(e.target.value))}
                  className="w-full accent-[#38BDF8] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94A3B8]">Luminosity (L):</span>
                  <span className="text-[#FDE047] font-bold">{luminosity.toFixed(1)} L☉</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={luminosity}
                  onChange={(e) => setLuminosity(parseFloat(e.target.value))}
                  className="w-full accent-[#FDE047] cursor-pointer"
                />
              </div>
            </div>

            {/* Mathematical Readout */}
            <div className="p-3 rounded-xl bg-[#111C2E]/60 border border-[#1E2D45] flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
              <span className="text-[#94A3B8]">
                Inverse-Square Formula: <strong className="text-white">F = L / (4πd²)</strong>
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[#38BDF8]">
                  Relative Flux: <strong>{(relativeFlux * 100).toFixed(1)}%</strong>
                </span>
                <span className="text-[#A78BFA]">
                  Apparent Mag: <strong>{apparentMag.toFixed(2)}</strong>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. SPECTRUM & WAVELENGTH ================= */}
        {vizType === 'spectrum-wavelength' && (
          <div className="space-y-4">
            <div className="relative h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 flex flex-col justify-between overflow-hidden">
              {/* Continuous Rainbow to Infrared Gradient Bar */}
              <div>
                <div className="text-[10px] font-mono text-[#94A3B8] mb-1 flex justify-between">
                  <span>Visible (0.4 µm)</span>
                  <span className="text-[#38BDF8] font-bold">SPHEREx Near-IR (0.75 - 5.0 µm)</span>
                  <span>Mid-IR (5.0+ µm)</span>
                </div>
                <div className="h-7 w-full rounded-lg bg-gradient-to-r from-violet-600 via-blue-500 via-green-500 via-yellow-400 via-red-600 via-red-900 to-amber-950 relative border border-white/20">
                  {/* Highlight SPHEREx Zone */}
                  <div className="absolute top-0 bottom-0 left-[20%] right-[5%] border-2 border-[#38BDF8] rounded bg-[#38BDF8]/15 pointer-events-none" />
                </div>
              </div>

              {/* Simulated Spectral Intensity Curve with Absorption Dips */}
              <div className="relative h-24 w-full flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 80">
                  {/* Smooth baseline blackbody curve */}
                  <path
                    d="M 10 70 Q 100 20 200 35 Q 260 45 320 60 Q 380 72 390 75"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Curve with H2O dip at x=200 and CO2 dip at x=310 */}
                  <path
                    d="M 10 70 Q 80 25 150 28 L 180 32 Q 200 68 210 35 L 260 44 L 290 48 Q 310 74 320 52 Q 360 68 390 75"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                  />
                  {/* Absorption labels */}
                  <text x="180" y="78" fill="#38BDF8" fontSize="8" fontFamily="monospace">H₂O (3.05 µm)</text>
                  <text x="290" y="80" fill="#F472B6" fontSize="8" fontFamily="monospace">CO₂ (4.27 µm)</text>

                  {/* Wavelength Indicator Line */}
                  {(() => {
                    const xCoord = Math.min(380, Math.max(20, (selectedWavelength / 5.0) * 380));
                    return (
                      <line
                        x1={xCoord}
                        y1="0"
                        x2={xCoord}
                        y2="80"
                        stroke="#FDE047"
                        strokeWidth="2"
                        strokeDasharray="2 2"
                      />
                    );
                  })()}
                </svg>
              </div>

              {/* Molecular Ice Tag */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">Selected Channel: <strong className="text-[#FDE047]">{selectedWavelength.toFixed(2)} µm</strong></span>
                {Math.abs(selectedWavelength - 3.05) < 0.25 && (
                  <span className="px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 animate-pulse">
                    ★ Deep Water Ice (H₂O) Absorption Band!
                  </span>
                )}
                {Math.abs(selectedWavelength - 4.27) < 0.25 && (
                  <span className="px-2 py-0.5 rounded bg-[#F472B6]/20 text-[#F472B6] border border-[#F472B6]/40 animate-pulse">
                    ★ Carbon Dioxide Ice (CO₂) Asymmetric Band!
                  </span>
                )}
              </div>
            </div>

            {/* Slider */}
            <div className="p-4 rounded-xl bg-[#0C1527] border border-[#1E2D45]">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#94A3B8]">Wavelength Tuning (0.75 to 5.00 µm):</span>
                <span className="text-[#38BDF8] font-bold">{selectedWavelength.toFixed(2)} µm</span>
              </div>
              <input
                type="range"
                min="0.75"
                max="5.00"
                step="0.05"
                value={selectedWavelength}
                onChange={(e) => setSelectedWavelength(parseFloat(e.target.value))}
                className="w-full accent-[#38BDF8] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* ================= 3. PLANETARY ORBIT ================= */}
        {vizType === 'planetary-orbit' && (
          <div className="space-y-4">
            <div className="relative h-60 rounded-xl bg-[#050711] border border-[#1E2D45]/60 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="-200 -120 400 240">
                {/* Central Star at focus */}
                <circle cx={-eccentricity * 60} cy="0" r="14" fill="url(#sunGlow)" />
                <defs>
                  <radialGradient id="sunGlow">
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="40%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#EA580C" />
                  </radialGradient>
                </defs>

                {/* Elliptical Orbit Track */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx={semiMajorAxis * 60}
                  ry={semiMajorAxis * 60 * Math.sqrt(Math.max(0.1, 1 - eccentricity * eccentricity))}
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Animated Planet */}
                {(() => {
                  const rx = semiMajorAxis * 60;
                  const ry = rx * Math.sqrt(Math.max(0.1, 1 - eccentricity * eccentricity));
                  // Keplerian speed approximation
                  const angle = time * (1.2 / Math.pow(semiMajorAxis, 1.5));
                  const px = rx * Math.cos(angle);
                  const py = ry * Math.sin(angle);
                  return (
                    <g>
                      {/* Sweeping radius line */}
                      <line x1={-eccentricity * 60} y1="0" x2={px} y2={py} stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
                      <circle cx={px} cy={py} r="7" fill="#10B981" />
                      <circle cx={px} cy={py} r="11" fill="none" stroke="#10B981" opacity="0.4" />
                    </g>
                  );
                })()}
              </svg>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#94A3B8]">
                Kepler’s 3rd Law: <strong className="text-white">T² = a³</strong> (Period: {(Math.pow(semiMajorAxis, 1.5)).toFixed(2)} yrs)
              </div>
            </div>

            {/* Orbit Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#0C1527] border border-[#1E2D45]">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94A3B8]">Semi-Major Axis (a):</span>
                  <span className="text-[#38BDF8] font-bold">{semiMajorAxis.toFixed(2)} AU</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="2.5"
                  step="0.1"
                  value={semiMajorAxis}
                  onChange={(e) => setSemiMajorAxis(parseFloat(e.target.value))}
                  className="w-full accent-[#38BDF8] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94A3B8]">Eccentricity (e):</span>
                  <span className="text-[#F59E0B] font-bold">{eccentricity.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.8"
                  step="0.05"
                  value={eccentricity}
                  onChange={(e) => setEccentricity(parseFloat(e.target.value))}
                  className="w-full accent-[#F59E0B] cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. STELLAR EVOLUTION ================= */}
        {vizType === 'stellar-evolution' && (
          <div className="space-y-4">
            <div className="h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">Initial Mass: <strong className="text-[#FDE047]">{starMass.toFixed(1)} M☉</strong></span>
                <span className="px-2 py-0.5 rounded bg-[#111C2E] text-[#38BDF8] border border-[#1E2D45]">
                  {starMass < 8 ? 'Low-to-Intermediate Mass Path' : 'High-Mass Supernova Path'}
                </span>
              </div>

              {/* Evolutionary Track Pipeline */}
              <div className="grid grid-cols-5 gap-1 items-center py-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center text-[10px]">☁️</div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1">Molecular Cloud</span>
                </div>

                <div className="text-center text-slate-500 font-mono text-xs">➔</div>

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`rounded-full flex items-center justify-center text-[10px] font-bold text-black ${
                      starMass < 2 ? 'w-8 h-8 bg-yellow-400' : 'w-10 h-10 bg-cyan-300'
                    }`}
                  >
                    ★
                  </div>
                  <span className="text-[9px] font-mono text-white mt-1">
                    {starMass < 2 ? 'G-Dwarf' : 'O/B Star'}
                  </span>
                </div>

                <div className="text-center text-slate-500 font-mono text-xs">➔</div>

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg ${
                      starMass < 8 ? 'w-12 h-12 bg-red-600 shadow-red-500/50' : 'w-14 h-14 bg-red-800 shadow-red-700/60'
                    }`}
                  >
                    💥
                  </div>
                  <span className="text-[9px] font-mono text-red-300 mt-1">
                    {starMass < 8 ? 'Red Giant' : 'Supergiant'}
                  </span>
                </div>
              </div>

              {/* End State Summary */}
              <div className="p-2.5 rounded-lg bg-[#0C1527] border border-[#1E2D45] text-xs font-mono flex items-center justify-between">
                <span className="text-[#94A3B8]">Final Fate:</span>
                <span className="text-emerald-400 font-bold">
                  {starMass < 8 ? 'Planetary Nebula ➔ Carbon-Oxygen White Dwarf' : 'Core Collapse Supernova ➔ Neutron Star or Black Hole'}
                </span>
              </div>
            </div>

            {/* Mass Slider */}
            <div className="p-4 rounded-xl bg-[#0C1527] border border-[#1E2D45]">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#94A3B8]">Stellar Birth Mass:</span>
                <span className="text-[#FDE047] font-bold">{starMass.toFixed(1)} Solar Masses (M☉)</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="25.0"
                step="0.5"
                value={starMass}
                onChange={(e) => setStarMass(parseFloat(e.target.value))}
                className="w-full accent-[#FDE047] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* ================= 5. LIGHT CURVE SIMULATOR ================= */}
        {vizType === 'light-curve' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setCurveType('transit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  curveType === 'transit' ? 'bg-[#38BDF8]/20 border border-[#38BDF8] text-[#38BDF8]' : 'bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8]'
                }`}
              >
                Exoplanet Transit
              </button>
              <button
                onClick={() => setCurveType('pulsating')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  curveType === 'pulsating' ? 'bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B]' : 'bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8]'
                }`}
              >
                Cepheid Variable
              </button>
              <button
                onClick={() => setCurveType('binary')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  curveType === 'binary' ? 'bg-[#A78BFA]/20 border border-[#A78BFA] text-[#A78BFA]' : 'bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8]'
                }`}
              >
                Eclipsing Binary
              </button>
            </div>

            <div className="h-52 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 relative overflow-hidden flex flex-col justify-between">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
                {/* Horizontal reference baseline */}
                <line x1="10" y1="20" x2="390" y2="20" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

                {curveType === 'transit' && (
                  <path
                    d="M 10 20 L 140 20 Q 150 20 160 80 L 240 80 Q 250 20 260 20 L 390 20"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                  />
                )}

                {curveType === 'pulsating' && (
                  <path
                    d="M 10 70 L 60 20 L 180 70 L 230 20 L 350 70 L 390 35"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                  />
                )}

                {curveType === 'binary' && (
                  <path
                    d="M 10 20 L 80 20 Q 90 20 100 100 Q 110 20 120 20 L 250 20 Q 260 20 270 60 Q 280 20 290 20 L 390 20"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2.5"
                  />
                )}

                {/* Animated tracker dot */}
                {(() => {
                  const x = (time * 40) % 380 + 10;
                  let y = 20;
                  if (curveType === 'transit') {
                    if (x >= 160 && x <= 240) y = 80;
                    else if (x > 140 && x < 160) y = 20 + ((x - 140) / 20) * 60;
                    else if (x > 240 && x < 260) y = 80 - ((x - 240) / 20) * 60;
                  } else if (curveType === 'pulsating') {
                    y = 45 + 25 * Math.sin(x * 0.05);
                  } else {
                    if (x >= 95 && x <= 105) y = 100;
                    else if (x >= 265 && x <= 275) y = 60;
                  }
                  return <circle cx={x} cy={y} r="5" fill="#FFF" className="animate-ping" />;
                })()}
              </svg>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Flux Normalized (1.00)</span>
                <span className="text-white font-bold">Time Domain Photometry</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= 6. HABITABLE ZONE ================= */}
        {vizType === 'habitable-zone' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              {(['M', 'K', 'G', 'F'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setStarType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    starType === type
                      ? 'bg-[#10B981]/20 border border-[#10B981] text-[#10B981]'
                      : 'bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8]'
                  }`}
                >
                  Type {type} Star
                </button>
              ))}
            </div>

            <div className="h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 relative overflow-hidden flex items-center justify-center">
              {/* Star at center */}
              <div
                className={`rounded-full z-10 flex items-center justify-center text-xs font-bold text-black ${
                  starType === 'M' ? 'w-8 h-8 bg-red-500' : starType === 'K' ? 'w-10 h-10 bg-orange-400' : starType === 'G' ? 'w-12 h-12 bg-yellow-400' : 'w-14 h-14 bg-blue-200'
                }`}
              >
                {starType}
              </div>

              {/* Habitable Zone Green Ring */}
              {(() => {
                const innerRadius = starType === 'M' ? 30 : starType === 'K' ? 55 : starType === 'G' ? 85 : 120;
                const ringWidth = starType === 'M' ? 18 : starType === 'K' ? 28 : starType === 'G' ? 38 : 50;
                return (
                  <div
                    className="absolute rounded-full border-2 border-dashed border-[#10B981] bg-[#10B981]/15 pointer-events-none transition-all duration-300"
                    style={{
                      width: `${(innerRadius + ringWidth) * 2}px`,
                      height: `${(innerRadius + ringWidth) * 2}px`
                    }}
                  />
                );
              })()}

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#94A3B8]">
                Habitable Zone Range:{' '}
                <strong className="text-emerald-400">
                  {starType === 'M' ? '0.08 – 0.25 AU' : starType === 'K' ? '0.4 – 0.8 AU' : starType === 'G' ? '0.95 – 1.4 AU (Sun-like)' : '1.5 – 2.5 AU'}
                </strong>
              </div>
            </div>
          </div>
        )}

        {/* ================= 7. REDSHIFT / DOPPLER ================= */}
        {vizType === 'redshift-doppler' && (
          <div className="space-y-4">
            <div className="h-52 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">
                  Radial Velocity (v):{' '}
                  <strong className={velocityFraction > 0 ? 'text-red-400' : 'text-blue-400'}>
                    {(velocityFraction * 100).toFixed(0)}% c ({velocityFraction > 0 ? 'Receding / Redshift' : 'Approaching / Blueshift'})
                  </strong>
                </span>
                <span className="text-white font-bold">z = {velocityFraction.toFixed(3)}</span>
              </div>

              {/* Spectral Comparison Bar */}
              <div className="space-y-3">
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] mb-1">Rest Frame Spectrum (Laboratory Benchmark)</div>
                  <div className="h-6 rounded bg-gradient-to-r from-blue-500 via-green-500 to-red-500 relative flex items-center">
                    <div className="absolute left-[35%] w-1 h-full bg-black" title="H-Beta" />
                    <div className="absolute left-[65%] w-1 h-full bg-black" title="H-Alpha" />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] mb-1">Observed Shifted Spectrum</div>
                  <div className="h-6 rounded bg-gradient-to-r from-blue-500 via-green-500 to-red-500 relative flex items-center">
                    <div
                      className="absolute w-1 h-full bg-black transition-all duration-150"
                      style={{ left: `${Math.min(95, Math.max(5, 35 + velocityFraction * 35))}%` }}
                    />
                    <div
                      className="absolute w-1 h-full bg-black transition-all duration-150"
                      style={{ left: `${Math.min(95, Math.max(5, 65 + velocityFraction * 35))}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#94A3B8] flex justify-between">
                <span>← Shorter Waves (Blueshift)</span>
                <span>Longer Waves (Redshift) →</span>
              </div>
            </div>

            {/* Velocity Slider */}
            <div className="p-4 rounded-xl bg-[#0C1527] border border-[#1E2D45]">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#94A3B8]">Velocity Slider (-0.5c to +0.5c):</span>
                <span className="text-white font-bold">{velocityFraction.toFixed(2)} c</span>
              </div>
              <input
                type="range"
                min="-0.5"
                max="0.5"
                step="0.02"
                value={velocityFraction}
                onChange={(e) => setVelocityFraction(parseFloat(e.target.value))}
                className="w-full accent-[#38BDF8] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* ================= 8. CELESTIAL GALAXY & ROTATION ================= */}
        {vizType === 'celestial-galaxy' && (
          <div className="space-y-4">
            <div className="h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 relative overflow-hidden flex items-center justify-center">
              {/* Rotating Spiral Arms */}
              <div
                className="absolute w-44 h-44 rounded-full border border-dashed border-[#8B5CF6]/40 flex items-center justify-center"
                style={{ transform: `rotate(${time * 15}deg)` }}
              >
                <div className="w-28 h-28 rounded-full border border-dashed border-[#38BDF8]/50" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white to-[#FDE047] blur-[2px]" />
              </div>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#94A3B8]">
                Vera Rubin Rotation Curve:{' '}
                <strong className={includeDarkMatter ? 'text-emerald-400' : 'text-amber-400'}>
                  {includeDarkMatter ? 'Flat Curve (With Dark Matter Halo)' : 'Falling Keplerian Curve (Visible Matter Only)'}
                </strong>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0C1527] border border-[#1E2D45] flex items-center justify-between text-xs font-mono">
              <span className="text-[#94A3B8]">Dark Matter Halo Mass:</span>
              <button
                onClick={() => setIncludeDarkMatter(!includeDarkMatter)}
                className={`px-3 py-1 rounded-lg border font-bold transition ${
                  includeDarkMatter
                    ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                    : 'bg-red-500/20 border-red-500 text-red-400'
                }`}
              >
                {includeDarkMatter ? 'Dark Matter: ENABLED (Real Universe)' : 'Dark Matter: OFF (Hypothetical)'}
              </button>
            </div>
          </div>
        )}

        {/* ================= 9. COORDINATES SPHERE ================= */}
        {vizType === 'coordinates-sphere' && (
          <div className="space-y-4">
            <div className="h-56 rounded-xl bg-[#050711] border border-[#1E2D45]/60 p-4 relative overflow-hidden flex items-center justify-center">
              <div
                className="relative w-44 h-44 rounded-full border-2 border-[#38BDF8] flex items-center justify-center"
                style={{ transform: `rotate(${time * 5}deg)` }}
              >
                {/* Celestial Equator */}
                <div className="absolute w-full h-0.5 bg-[#FDE047]" />
                {/* North Celestial Pole Axis */}
                <div className="absolute h-full w-0.5 bg-[#A855F7]" />
                {/* Earth in Center */}
                <div className="w-10 h-10 rounded-full bg-blue-600 border border-emerald-400 flex items-center justify-center text-[10px] text-white font-bold">
                  🌍
                </div>
              </div>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#94A3B8]">
                Equatorial Coordinates: <strong className="text-white">RA (0 to 24h) • Dec (-90° to +90°)</strong>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Description Footer */}
      <div className="p-3 bg-[#080D18] border-t border-[#1E2D45] text-xs text-[#94A3B8] font-sans flex items-center gap-2">
        <Info className="w-4 h-4 text-[#38BDF8] shrink-0" />
        <span>{description}</span>
      </div>
    </div>
  );
};

