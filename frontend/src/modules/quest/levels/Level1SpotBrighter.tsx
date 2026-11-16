import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, ExternalLink } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level1SpotBrighter: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule
}) => {
  const levelDef = QUEST_LEVELS[0]; // Level 1
  const [selectedStar, setSelectedStar] = useState<'A' | 'B' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Star A is the brighter star (apparent flux 1450 vs 480)
  const handleSelect = (star: 'A' | 'B') => {
    setSelectedStar(star);
    questAudio.playClick();
  };

  const handleSubmit = () => {
    if (!selectedStar) return;
    const correct = selectedStar === 'A';
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 125 : 100;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedStar(null);
    setShowFeedback(false);
  };

  const handleUseHint = () => {
    setShowHint(true);
    setHintsUsed((prev) => prev + 1);
    questAudio.playHint();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Level Header Bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            Stage 1 • Level 01
          </span>
          <h2 className="text-xl font-bold text-white font-display">{levelDef.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleUseHint}
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

      {/* Interactive Astronomical Observation Canvas */}
      <div className="relative rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-10 overflow-hidden shadow-2xl flex flex-col items-center">
        {/* Sky Reticle & Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E2D45_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
        <div className="absolute top-4 left-4 text-[10px] font-mono text-[#94A3B8]/60">
          FOV: 0.10° • SIMULATED OPTICAL BAND • DETECTOR: SPHEREx-D1
        </div>

        <div className="relative z-10 text-center mb-8 max-w-md">
          <h3 className="text-lg font-bold text-white font-display">Which star appears brighter to our telescope?</h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Click on the candidate star that delivers greater apparent flux to the detector.
          </p>
        </div>

        {/* 2 Stars Display Field */}
        <div className="relative z-10 grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-lg my-6">
          {/* Star Alpha (Brighter: Flux 1450) */}
          <div
            onClick={() => handleSelect('A')}
            className={`p-6 sm:p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center space-y-4 group ${
              selectedStar === 'A'
                ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.35)] scale-105'
                : 'bg-[#0E1626]/60 border-[#1E2D45] hover:border-[#38BDF8]/50 hover:bg-[#111C2E]/70'
            }`}
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Point Spread Function Halo */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl group-hover:scale-110 transition duration-300" />
              <div className="absolute w-20 h-20 rounded-full bg-sky-200/40 blur-md" />

              {/* Diffraction cross spikes */}
              <div className="absolute w-28 h-[2px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
              <div className="absolute h-28 w-[2px] bg-gradient-to-b from-transparent via-cyan-200 to-transparent" />

              {/* Core Star */}
              <div className="relative w-8 h-8 rounded-full bg-white shadow-[0_0_20px_#ffffff]" />
            </div>

            <div className="text-center font-mono">
              <div className="text-sm font-bold text-white">Candidate Alpha</div>
              <div className="text-[11px] text-[#94A3B8]">Target ID: STAR-A</div>
            </div>
          </div>

          {/* Star Beta (Fainter: Flux 480) */}
          <div
            onClick={() => handleSelect('B')}
            className={`p-6 sm:p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center space-y-4 group ${
              selectedStar === 'B'
                ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.35)] scale-105'
                : 'bg-[#0E1626]/60 border-[#1E2D45] hover:border-[#38BDF8]/50 hover:bg-[#111C2E]/70'
            }`}
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Smaller PSF Halo */}
              <div className="absolute w-12 h-12 rounded-full bg-cyan-400/15 blur-md" />

              {/* Faint cross spikes */}
              <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="absolute h-14 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />

              {/* Faint Core Star */}
              <div className="relative w-4 h-4 rounded-full bg-slate-100 shadow-[0_0_10px_#ffffff]" />
            </div>

            <div className="text-center font-mono">
              <div className="text-sm font-bold text-white">Candidate Beta</div>
              <div className="text-[11px] text-[#94A3B8]">Target ID: STAR-B</div>
            </div>
          </div>
        </div>

        {/* Submit Action */}
        <div className="relative z-10 pt-4">
          <button
            onClick={handleSubmit}
            disabled={!selectedStar || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition flex items-center gap-2 ${
              selectedStar && !completed
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] shadow-lg shadow-[#38BDF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            <span>Verify Measurement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hint Callout */}
        {showHint && (
          <div className="relative z-10 mt-6 p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md animate-in fade-in">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Look at the size of the glowing halo and diffraction cross spikes. Brighter objects spread more photons across neighboring pixels on a digital detector.
            </div>
          </div>
        )}
      </div>

      {/* Instant Scientific Feedback Modal / Panel */}
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
                {isCorrect ? 'Correct! Candidate Alpha is Brighter.' : 'Not Quite. Try Inspecting Again.'}
              </h3>
            </div>

            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+125 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Scientific Photometry Reading:</strong> Candidate Alpha registers{' '}
              <span className="text-[#38BDF8] font-mono font-bold">1,450 photons/second</span>, while Candidate Beta registers only{' '}
              <span className="text-[#94A3B8] font-mono font-bold">480 photons/second</span>. Alpha delivers over <strong>3 times</strong> more flux to the detector!
            </p>
            <p className="text-slate-400">
              In astronomical imaging, apparent brightness is the rate at which radiant energy passes through our telescope’s entrance pupil. Brighter stars saturate central pixels and cause photon bleed (blooming) and prominent diffraction spikes.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 rounded-xl bg-[#1E2D45] hover:bg-[#2A3F60] text-white font-medium text-xs font-mono transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Observation</span>
              </button>
            )}

            {onNavigateModule && (
              <button
                onClick={() => onNavigateModule('explorer')}
                className="text-xs font-mono text-[#38BDF8] hover:text-white flex items-center gap-1"
              >
                <span>Ready to see real FITS stars? Open Sky Explorer</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

