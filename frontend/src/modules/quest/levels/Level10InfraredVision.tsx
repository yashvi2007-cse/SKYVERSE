import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, ExternalLink, Eye, Sliders } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level10InfraredVision: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule
}) => {
  const levelDef = QUEST_LEVELS[9];

  const [wavelength, setWavelength] = useState<number>(0.5); // 0.5 um (Visible) to 4.5 um (SPHEREx IR)
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Optical depth / dust opacity decreases as wavelength increases: tau ~ (0.5 / lambda)^1.75
  const dustOpacity = Math.max(0.05, Math.pow(0.5 / wavelength, 1.75));
  const starVisibility = Math.min(1.0, Math.max(0.0, (wavelength - 0.5) / 3.5));

  // Exactly 4 embedded protostars hidden behind the cloud
  const handleSubmit = () => {
    if (selectedCount === null) return;
    const correct = selectedCount === 4;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 250 : 225;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedCount(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider">
            Stage 4 • Level 10
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

      {/* Main Interactive Electromagnetic Wavelength Slider & Dust Penetration Canvas */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Penetrating Interstellar Dust with Infrared Light
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Slide through wavelengths to see how SPHEREx reveals protostars trapped inside dense molecular dust clouds.
          </p>
        </div>

        {/* Wavelength Slider Control */}
        <div className="p-4 rounded-2xl bg-[#111C2E]/60 border border-[#1E2D45] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Wavelength λ: <strong className="text-[#38BDF8]">{wavelength.toFixed(2)} µm</strong></span>
            </span>
            <span className="text-[#FBBF24] font-bold">
              {wavelength < 0.75
                ? 'Visible Optical Light (Blocked by Dust)'
                : wavelength < 2.0
                ? 'Near-Infrared (Dust Thinning)'
                : 'SPHEREx Mid-Infrared (Dust Fully Transparent)'}
            </span>
          </div>

          <input
            type="range"
            min="0.5"
            max="4.5"
            step="0.25"
            value={wavelength}
            onChange={(e) => {
              setWavelength(parseFloat(e.target.value));
              questAudio.playClick();
            }}
            className="w-full accent-[#F59E0B] cursor-pointer"
          />

          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>0.5 µm (Optical Green/Blue)</span>
            <span>1.5 µm (SPHEREx D1)</span>
            <span>3.0 µm (SPHEREx D4)</span>
            <span>4.5 µm (SPHEREx D6)</span>
          </div>
        </div>

        {/* Dynamic Simulated Field View */}
        <div className="relative h-64 sm:h-72 rounded-2xl bg-[#080D18] border border-[#1E2D45] overflow-hidden flex items-center justify-center">
          {/* Deep Space Background Stars */}
          <div className="absolute inset-0 bg-[radial-gradient(#1E2D45_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* 4 Hidden Embedded Protostars (revealed in infrared) */}
          <div
            className="absolute top-16 left-28 transition-all duration-300"
            style={{ opacity: starVisibility, transform: `scale(${0.5 + 0.5 * starVisibility})` }}
          >
            <div className="w-6 h-6 rounded-full bg-amber-400 shadow-[0_0_20px_#f59e0b] animate-pulse" />
            <span className="text-[9px] font-mono text-amber-300">Protostar #1</span>
          </div>

          <div
            className="absolute top-24 right-36 transition-all duration-300"
            style={{ opacity: starVisibility, transform: `scale(${0.5 + 0.5 * starVisibility})` }}
          >
            <div className="w-8 h-8 rounded-full bg-cyan-300 shadow-[0_0_25px_#38bdf8] animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-200">Protostar #2</span>
          </div>

          <div
            className="absolute bottom-16 left-48 transition-all duration-300"
            style={{ opacity: starVisibility, transform: `scale(${0.5 + 0.5 * starVisibility})` }}
          >
            <div className="w-7 h-7 rounded-full bg-red-400 shadow-[0_0_20px_#ef4444] animate-pulse" />
            <span className="text-[9px] font-mono text-red-300">Protostar #3</span>
          </div>

          <div
            className="absolute bottom-20 right-28 transition-all duration-300"
            style={{ opacity: starVisibility, transform: `scale(${0.5 + 0.5 * starVisibility})` }}
          >
            <div className="w-5 h-5 rounded-full bg-violet-400 shadow-[0_0_15px_#c084fc] animate-pulse" />
            <span className="text-[9px] font-mono text-violet-300">Protostar #4</span>
          </div>

          {/* Obscuring Molecular Dust Cloud (Fades away as wavelength increases) */}
          <div
            className="absolute inset-8 rounded-full bg-gradient-to-r from-amber-950/90 via-stone-900/95 to-slate-900/90 blur-2xl transition-all duration-300 pointer-events-none"
            style={{ opacity: dustOpacity }}
          />

          {/* Foreground Unobscured Star (visible at all wavelengths) */}
          <div className="absolute top-6 right-10">
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
            <span className="text-[8px] font-mono text-slate-400">Foreground Star</span>
          </div>

          {/* Bottom Live Diagnostic Indicator */}
          <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-400 bg-[#080D18]/80 px-3 py-1 rounded-lg border border-[#1E2D45]">
            Dust Optical Depth: τ ≈ {dustOpacity.toFixed(2)} • Hidden Stars Revealed:{' '}
            <strong className="text-[#FBBF24]">{wavelength >= 3.0 ? '4 Detected' : wavelength >= 1.5 ? '2 Faintly Visible' : '0 (Obscured)'}</strong>
          </div>
        </div>

        {/* Challenge Task */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-white font-display block">
            Challenge Task: Set the wavelength to 4.5 µm to penetrate the dust cloud. How many hidden newborn protostars are revealed inside this molecular cloud core?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
            {[1, 2, 4, 8].map((count) => (
              <button
                key={count}
                onClick={() => {
                  setSelectedCount(count);
                  questAudio.playClick();
                }}
                className={`p-3 rounded-xl border text-xs font-mono text-center transition ${
                  selectedCount === count
                    ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#F59E0B]/50'
                }`}
              >
                {count} Protostars
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={selectedCount === null || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              selectedCount !== null && !completed
                ? 'bg-[#F59E0B] hover:bg-[#D97706] text-[#080D18] shadow-lg shadow-[#F59E0B]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Confirm Protostellar Count
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Drag the slider all the way to the right to 4.5 µm. The brown dust cloud will vanish, revealing 4 distinct glowing protostars labeled Protostar #1, #2, #3, and #4!
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
                {isCorrect ? 'Infrared Penetration Confirmed! 4 Protostars Discovered.' : 'Incorrect Count.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+250 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Why SPHEREx Observes in Near-Infrared:</strong> Interstellar dust grains are roughly 0.5 µm in diameter, scattering blue and visible light severely (Rayleigh-like extinction). Infrared waves (0.75 to 5.0 µm) are much larger than the dust grains, gliding right through without obstruction!
            </p>
            <p className="text-slate-400">
              NASA’s SPHEREx mission is surveying the entire celestial sky across 102 near-infrared channels precisely to peer through the dusty spiral arms of our Milky Way and unveil hidden stars, ices, and distant cosmic structures.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 11 (Spectral Fingerprints)</span>
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
                <span>Inspect 102 Spectral Channels</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
