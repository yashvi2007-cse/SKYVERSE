import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, ExternalLink, Activity, Info } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level11SpectralChallenge: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule
}) => {
  const levelDef = QUEST_LEVELS[10];

  const [activeWavelength, setActiveWavelength] = useState<number>(3.05);
  const [q1Molecule, setQ1Molecule] = useState<string | null>(null);
  const [q2Molecule, setQ2Molecule] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Absorption molecules:
  // 3.05 um -> Water Ice (H2O)
  // 4.27 um -> Carbon Dioxide Ice (CO2)
  // 4.67 um -> Carbon Monoxide (CO)

  const handleSubmit = () => {
    if (!q1Molecule || !q2Molecule) return;
    const q1Correct = q1Molecule === 'H2O';
    const q2Correct = q2Molecule === 'CO2';
    const allCorrect = q1Correct && q2Correct;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 275 : 250;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setQ1Molecule(null);
    setQ2Molecule(null);
    setShowFeedback(false);
  };

  // Generate 102 educational spectrum points across 0.75 to 5.0 um
  const spectrumPoints: { wl: number; intensity: number }[] = [];
  for (let i = 0; i < 102; i++) {
    const wl = 0.75 + (i / 101) * (5.0 - 0.75);
    // Base Planck-like blackbody curve
    let intensity = 0.85 - 0.08 * (wl - 1.5) * (wl - 1.5);
    // H2O absorption dip around 3.05 um
    intensity -= 0.45 * Math.exp(-Math.pow((wl - 3.05) / 0.25, 2));
    // CO2 absorption dip around 4.27 um
    intensity -= 0.55 * Math.exp(-Math.pow((wl - 4.27) / 0.12, 2));
    // CO absorption dip around 4.67 um
    intensity -= 0.3 * Math.exp(-Math.pow((wl - 4.67) / 0.08, 2));
    // Small noise
    intensity += (Math.sin(i * 1.7) * 0.03);
    spectrumPoints.push({ wl, intensity: Math.max(0.1, intensity) });
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider">
            Stage 4 • Level 11
          </span>
          <h2 className="text-xl font-bold text-white font-display">{levelDef.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setShowHint(true);
              setHintsUsed((p) => p + 1);
              questAudio.playHint();
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#FBBF24] hover:border-[#FBBF24] transition"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Hint</span>
          </button>
          <button
            onClick={onBackToMap}
            className="px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-slate-300 hover:text-white transition"
          >
            Level Map
          </button>
        </div>
      </div>

      {/* Main Spectrum Analyzer Lab */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Decoding Molecular Chemical Fingerprints
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            SPHEREx splits starlight into 102 near-infrared channels. Click or drag across the spectrum to inspect chemical absorption troughs.
          </p>
        </div>

        {/* 102-Band Spectrum Interactive Graph */}
        <div className="rounded-2xl bg-[#080D18] border border-[#1E2D45] p-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Y: Relative Radiant Intensity I(λ)</span>
            <span>X: Wavelength λ (0.75 – 5.00 µm)</span>
          </div>

          <div className="h-64 w-full relative">
            <svg
              className="w-full h-full overflow-visible cursor-crosshair"
              viewBox="0 0 500 200"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const xFrac = (e.clientX - rect.left) / rect.width;
                const wl = 0.75 + xFrac * (5.0 - 0.75);
                setActiveWavelength(Math.min(5.0, Math.max(0.75, wl)));
                questAudio.playClick();
              }}
            >
              {/* Axes & Ticks */}
              <line x1="40" y1="20" x2="40" y2="180" stroke="#1E2D45" strokeWidth="2" />
              <line x1="40" y1="180" x2="480" y2="180" stroke="#1E2D45" strokeWidth="2" />

              {/* Absorption Region Marker Overlays */}
              {/* H2O at 3.05 um */}
              <rect x="250" y="20" width="60" height="160" fill="rgba(56, 189, 248, 0.08)" />
              <text x="254" y="35" fill="#38BDF8" fontSize="10" fontFamily="monospace">H₂O Ice (3.05 µm)</text>

              {/* CO2 at 4.27 um */}
              <rect x="390" y="20" width="30" height="160" fill="rgba(245, 158, 11, 0.08)" />
              <text x="375" y="55" fill="#F59E0B" fontSize="10" fontFamily="monospace">CO₂ (4.27 µm)</text>

              {/* Spectrum Continuous Line */}
              <path
                d={spectrumPoints
                  .map((p, i) => {
                    const x = 40 + ((p.wl - 0.75) / (5.0 - 0.75)) * 440;
                    const y = 180 - p.intensity * 160;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  })
                  .join(' ')}
                fill="none"
                stroke="#A78BFA"
                strokeWidth="2.5"
              />

              {/* Active Wavelength Indicator Line */}
              <line
                x1={40 + ((activeWavelength - 0.75) / (5.0 - 0.75)) * 440}
                y1="20"
                x2={40 + ((activeWavelength - 0.75) / (5.0 - 0.75)) * 440}
                y2="180"
                stroke="#FDE047"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          <div className="flex justify-between text-xs font-mono text-slate-500 px-4">
            <span>0.75 µm</span>
            <span>1.50 µm</span>
            <span>2.50 µm</span>
            <span>3.50 µm</span>
            <span>4.50 µm</span>
            <span>5.00 µm</span>
          </div>

          {/* Current Inspection Chip */}
          <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">
              Inspecting Band: <strong className="text-[#FDE047]">{activeWavelength.toFixed(2)} µm</strong>
            </span>
            <span className="text-[#38BDF8]">
              {Math.abs(activeWavelength - 3.05) < 0.3
                ? 'Detected: Broad Water Ice (H₂O) Absorption Complex'
                : Math.abs(activeWavelength - 4.27) < 0.15
                ? 'Detected: Sharp Carbon Dioxide (CO₂) Absorption Spike'
                : Math.abs(activeWavelength - 4.67) < 0.12
                ? 'Detected: Carbon Monoxide (CO) Fundamental Band'
                : 'Near-Infrared Continuum (Unabsorbed Radiation)'}
            </span>
          </div>
        </div>

        {/* Question 1 */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-white font-display block">
            Question 1: What biogenic volatile molecule produces the prominent broad absorption trough centered at 3.05 µm?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
            {[
              { id: 'H2O', label: 'Water Ice (H₂O)' },
              { id: 'CH4', label: 'Methane (CH₄)' },
              { id: 'Fe', label: 'Iron Vapor (Fe)' },
              { id: 'O2', label: 'Molecular Oxygen (O₂)' }
            ].map((mol) => (
              <button
                key={mol.id}
                onClick={() => {
                  setQ1Molecule(mol.id);
                  questAudio.playClick();
                }}
                className={`p-3 rounded-xl border text-xs font-mono text-center transition ${
                  q1Molecule === mol.id
                    ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#38BDF8]/50'
                }`}
              >
                {mol.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-3 pt-4 border-t border-[#1E2D45]">
          <label className="text-sm font-bold text-white font-display block">
            Question 2: Which greenhouse ice species is responsible for the sharp deep absorption dip at 4.27 µm?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
            {[
              { id: 'CO2', label: 'Carbon Dioxide (CO₂)' },
              { id: 'NH3', label: 'Ammonia (NH₃)' },
              { id: 'H2', label: 'Hydrogen Gas (H₂)' },
              { id: 'Si', label: 'Silicate Dust' }
            ].map((mol) => (
              <button
                key={mol.id}
                onClick={() => {
                  setQ2Molecule(mol.id);
                  questAudio.playClick();
                }}
                className={`p-3 rounded-xl border text-xs font-mono text-center transition ${
                  q2Molecule === mol.id
                    ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#F59E0B]/50'
                }`}
              >
                {mol.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!q1Molecule || !q2Molecule || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              q1Molecule && q2Molecule && !completed
                ? 'bg-[#F59E0B] hover:bg-[#D97706] text-[#080D18] shadow-lg shadow-[#F59E0B]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Verify Molecular Identification
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Look at the blue and amber labels on the graph. The 3.05 µm trough is labeled H₂O Ice, and the 4.27 µm spike is labeled CO₂!
            </div>
          </div>
        )}
      </div>

      {/* Feedback Panel */}
      {showFeedback && (
        <div
          className={`p-6 rounded-3xl border transition-all animate-in fade-in space-y-4 ${
            isCorrect
              ? 'bg-[#10B981]/10 border-[#10B981]/40 shadow-xl'
              : 'bg-[#EF4444]/10 border-[#EF4444]/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              ) : (
                <AlertCircle className="w-6 h-6 text-[#EF4444]" />
              )}
              <h3 className="text-base font-bold text-white font-display">
                {isCorrect ? 'Chemical Fingerprints Confirmed! H₂O and CO₂ Identified.' : 'Molecular Identification Error.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+275 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Biogenic Ices in the Milky Way:</strong> When infrared photons match the vibrational frequency of molecular bonds (O-H stretch in water at 3.05 µm, and C=O asymmetric stretch in carbon dioxide at 4.27 µm), they are absorbed, casting dark dips in the transmitted spectrum!
            </p>
            <p className="text-slate-400">
              SPHEREx maps these exact absorption features across the entire Milky Way to calculate how much water and organic carbon is incorporated into forming planetary systems. You are now ready for the final capstone: <strong>Level 12 (The Cosmic Investigator)</strong>!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Capstone (Level 12)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 rounded-xl bg-[#1E2D45] hover:bg-[#2A3F60] text-white font-medium text-xs font-mono transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}

            {onNavigateModule && (
              <button
                onClick={() => onNavigateModule('spectral')}
                className="text-xs font-mono text-[#38BDF8] hover:text-white flex items-center gap-1"
              >
                <span>Launch Spectral Intelligence Module</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
