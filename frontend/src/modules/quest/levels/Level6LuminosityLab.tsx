import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, Zap, Compass } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level6LuminosityLab: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[5];

  const [q1Selection, setQ1Selection] = useState<'alpha' | 'rigel' | null>(null);
  const [q2Selection, setQ2Selection] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    if (!q1Selection || !q2Selection) return;
    const q1Correct = q1Selection === 'rigel'; // Rigel has 120,000 L_sun
    const q2Correct = q2Selection === 'closer';
    const allCorrect = q1Correct && q2Correct;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 200 : 175;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setQ1Selection(null);
    setQ2Selection(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
            Stage 2 • Level 06
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

      {/* Main Comparative Laboratory */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Decoupling Luminosity from Apparent Brightness
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Compare Alpha Centauri A and Rigel in our astrophysical laboratory.
          </p>
        </div>

        {/* 2 Stars Comparative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Alpha Centauri A */}
          <div
            onClick={() => {
              setQ1Selection('alpha');
              questAudio.playClick();
            }}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-4 ${
              q1Selection === 'alpha'
                ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.3)]'
                : 'bg-[#0E1626]/70 border-[#1E2D45] hover:border-[#38BDF8]/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#38BDF8] font-bold">Candidate A</span>
              <span className="text-[10px] font-mono text-slate-400">Solar-type Star</span>
            </div>

            <div className="text-center py-2">
              <div className="text-xl font-bold text-white">Alpha Centauri A</div>
              <div className="text-xs text-amber-300 font-mono mt-0.5">Apparent Mag: -0.01 (Very Bright)</div>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-[#080D18] border border-[#1E2D45] text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Distance:</span>
                <span className="text-white">1.34 parsecs (4.37 ly)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Luminosity:</span>
                <span className="text-[#38BDF8] font-bold">1.5 L_☉</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Power in Watts:</span>
                <span className="text-slate-300">5.7 × 10²⁶ W</span>
              </div>
            </div>
          </div>

          {/* Rigel */}
          <div
            onClick={() => {
              setQ1Selection('rigel');
              questAudio.playClick();
            }}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-4 ${
              q1Selection === 'rigel'
                ? 'bg-[#111C2E] border-[#818CF8] shadow-[0_0_25px_rgba(129,140,248,0.3)]'
                : 'bg-[#0E1626]/70 border-[#1E2D45] hover:border-[#818CF8]/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#818CF8] font-bold">Candidate B</span>
              <span className="text-[10px] font-mono text-slate-400">Blue Supergiant</span>
            </div>

            <div className="text-center py-2">
              <div className="text-xl font-bold text-white">Rigel (β Orionis)</div>
              <div className="text-xs text-slate-300 font-mono mt-0.5">Apparent Mag: +0.12 (Bright)</div>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-[#080D18] border border-[#1E2D45] text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Distance:</span>
                <span className="text-white">260 parsecs (860 ly)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Luminosity:</span>
                <span className="text-[#818CF8] font-bold">120,000 L_☉</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Power in Watts:</span>
                <span className="text-slate-300">4.6 × 10³¹ W</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question 1 */}
        <div className="space-y-2 pt-2 max-w-lg mx-auto">
          <label className="text-sm font-bold text-white font-display block">
            Question 1: Which star produces more total energy (higher intrinsic luminosity) per second?
          </label>
          <div className="text-xs font-mono text-[#94A3B8]">
            Click one of the two candidate cards above to choose your answer ({q1Selection ? `Selected: ${q1Selection === 'alpha' ? 'Alpha Centauri A' : 'Rigel'}` : 'None selected'}).
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-3 pt-4 border-t border-[#1E2D45] max-w-lg mx-auto">
          <label className="text-sm font-bold text-white font-display block">
            Question 2: Why does Alpha Centauri A appear slightly brighter in our night sky (m = -0.01) than Rigel (m = +0.12), even though Rigel produces 80,000 times more total light?
          </label>
          <div className="space-y-2">
            {[
              { id: 'closer', text: 'Alpha Centauri is nearly 200 times closer to Earth, so its light undergoes far less geometric inverse-square dilution.' },
              { id: 'filter', text: 'Rigel is obscured by dense gas that absorbs all of its optical light.' },
              { id: 'atmosphere', text: 'Earth’s atmosphere amplifies the light of solar-type stars.' }
            ].map((ans) => (
              <button
                key={ans.id}
                onClick={() => {
                  setQ2Selection(ans.id);
                  questAudio.playClick();
                }}
                className={`w-full p-3.5 rounded-xl border text-xs font-mono text-left transition ${
                  q2Selection === ans.id
                    ? 'bg-[#818CF8]/20 border-[#818CF8] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#818CF8]/50'
                }`}
              >
                {ans.text}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!q1Selection || !q2Selection || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              q1Selection && q2Selection && !completed
                ? 'bg-[#818CF8] hover:bg-[#6366F1] text-white shadow-lg shadow-[#818CF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Verify Astrophysics Answers
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Look at the luminosity line: 120,000 L_☉ vs 1.5 L_☉. Rigel radiates vastly more wattage, but Alpha Centauri is in our cosmic backyard at only 1.34 parsecs.
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
                {isCorrect ? 'Stage 2 Complete! Luminosity Mastery Certified.' : 'Review Principles and Retry.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+200 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Luminosity vs. Flux Decoupled:</strong> Rigel is a colossal blue supergiant radiating an astonishing{' '}
              <strong className="text-white">4.6 × 10³¹ Watts (120,000 Solar Luminosities)</strong>. However, because it is located 860 light-years away (d ≈ 260 pc), its flux drops by d² ≈ 67,600!
            </p>
            <p className="text-slate-400">
              Alpha Centauri A emits only a tiny fraction (1.5 L_☉), but because it is located just 1.34 pc away, it appears slightly brighter to the human eye. This is why astronomers must always measure distance (using parallax) to determine the true physical nature of stars!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Stage 3 (Variable Stars)</span>
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
          </div>
        </div>
      )}
    </div>
  );
};
