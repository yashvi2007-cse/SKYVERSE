import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, ExternalLink, Calculator } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level4MagnitudeMission: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule
}) => {
  const levelDef = QUEST_LEVELS[3];

  const [question1Answer, setQuestion1Answer] = useState<'A' | 'B' | null>(null);
  const [question2Answer, setQuestion2Answer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [sliderMag, setSliderMag] = useState<number>(2.0);

  // Q1: Star A has m = 1.2, Star B has m = 4.8. Which is brighter? Correct: A (lower magnitude is brighter)
  // Q2: A difference of 5 magnitudes corresponds to what flux ratio? Correct: 100x

  const handleSubmit = () => {
    if (!question1Answer || question2Answer === null) return;
    const q1Correct = question1Answer === 'A';
    const q2Correct = question2Answer === 100;
    const allCorrect = q1Correct && q2Correct;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 175 : 150;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setQuestion1Answer(null);
    setQuestion2Answer(null);
    setShowFeedback(false);
  };

  // Convert magnitude to normalized visual flux preview for slider
  // Flux ratio relative to mag 0: F = 100^(-m / 5) = 10^(-0.4 * m)
  const calcRelativeFlux = (m: number) => Math.pow(10, -0.4 * m);
  const sliderFlux = calcRelativeFlux(sliderMag);
  const sliderStarSize = Math.max(4, Math.min(32, 24 * Math.pow(sliderFlux, 0.3)));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
            Stage 2 • Level 04
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

      {/* Interactive Magnitude Visualizer */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="p-4 rounded-2xl bg-[#111C2E]/60 border border-[#1E2D45] space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8]">
              <Calculator className="w-4 h-4" />
              <span>Interactive Apparent Magnitude Simulator</span>
            </div>
            <div className="text-xs font-mono text-[#FBBF24]">
              m = {sliderMag.toFixed(1)} • Relative Flux = {(sliderFlux * 100).toFixed(1)}%
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Slider */}
            <div className="md:col-span-8 space-y-2">
              <input
                type="range"
                min="-1.5"
                max="6.5"
                step="0.1"
                value={sliderMag}
                onChange={(e) => setSliderMag(parseFloat(e.target.value))}
                className="w-full accent-[#818CF8] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>m = -1.5 (Sirius: Extremely Bright)</span>
                <span>m = 0.0 (Vega)</span>
                <span>m = 6.5 (Faintest Naked-Eye)</span>
              </div>
            </div>

            {/* Live Star Preview */}
            <div className="md:col-span-4 h-24 rounded-xl bg-[#080D18] border border-[#1E2D45] flex items-center justify-center relative overflow-hidden">
              <div
                className="rounded-full bg-white transition-all shadow-[0_0_20px_#ffffff]"
                style={{
                  width: `${sliderStarSize}px`,
                  height: `${sliderStarSize}px`,
                  boxShadow: `0 0 ${sliderStarSize * 1.5}px rgba(129, 140, 248, 0.7)`
                }}
              />
              <div className="absolute bottom-1 right-2 text-[10px] font-mono text-slate-500">
                {sliderMag <= 0 ? 'Negative (Blazing)' : sliderMag > 5 ? 'Near Detection Limit' : 'Mid Magnitude'}
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Task 1 */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-white font-display">
            Challenge 1: Two stars are observed by a ground telescope. Star A has magnitude m = 1.2, and Star B has magnitude m = 4.8. Which star is brighter?
          </h4>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <button
              onClick={() => {
                setQuestion1Answer('A');
                questAudio.playClick();
              }}
              className={`p-4 rounded-xl border text-xs font-mono text-center transition ${
                question1Answer === 'A'
                  ? 'bg-[#818CF8]/20 border-[#818CF8] text-white font-bold shadow-md'
                  : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#818CF8]/50'
              }`}
            >
              Star A (m = 1.2)
            </button>
            <button
              onClick={() => {
                setQuestion1Answer('B');
                questAudio.playClick();
              }}
              className={`p-4 rounded-xl border text-xs font-mono text-center transition ${
                question1Answer === 'B'
                  ? 'bg-[#818CF8]/20 border-[#818CF8] text-white font-bold shadow-md'
                  : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#818CF8]/50'
              }`}
            >
              Star B (m = 4.8)
            </button>
          </div>
        </div>

        {/* Challenge Task 2 */}
        <div className="space-y-3 pt-4 border-t border-[#1E2D45]">
          <h4 className="text-sm font-bold text-white font-display">
            Challenge 2: Under Pogson’s standard logarithmic magnitude scale, how many times brighter is a star of magnitude 1 compared to a star of magnitude 6 (a difference of exactly 5 magnitudes)?
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
            {[5, 10, 50, 100].map((val) => (
              <button
                key={val}
                onClick={() => {
                  setQuestion2Answer(val);
                  questAudio.playClick();
                }}
                className={`p-3 rounded-xl border text-xs font-mono text-center transition ${
                  question2Answer === val
                    ? 'bg-[#818CF8]/20 border-[#818CF8] text-white font-bold shadow-md'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#818CF8]/50'
                }`}
              >
                {val}× Brighter
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={!question1Answer || question2Answer === null || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              question1Answer && question2Answer !== null && !completed
                ? 'bg-[#818CF8] hover:bg-[#6366F1] text-white shadow-lg shadow-[#818CF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Submit Astronomical Answers
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Remember that the magnitude scale is inverted: smaller numbers mean more light. Also, Norman Pogson defined 5 magnitudes as an exact ratio of 100:1.
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
                {isCorrect ? 'Outstanding! Magnitude Principles Mastered.' : 'Review Pogson’s Law and Try Again.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+175 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Why Lower is Brighter:</strong> Star A ($m = 1.2$) is much brighter than Star B ($m = 4.8$). The difference of $\Delta m = 3.6$ means Star A delivers $100^{3.6/5} \approx 27.5\times$ more flux!
            </p>
            <p className="text-slate-400">
              A difference of <strong>5 magnitudes equals exactly 100 times</strong> difference in photon count ($2.512^5 = 100$). This logarithmic definition models how mammalian retinas and digital logarithmic sensors respond to light across massive dynamic ranges.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 5 (Distance Mystery)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 rounded-xl bg-[#1E2D45] hover:bg-[#2A3F60] text-white font-medium text-xs font-mono transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Challenge</span>
              </button>
            )}

            {onNavigateModule && (
              <button
                onClick={() => onNavigateModule('investigation')}
                className="text-xs font-mono text-[#818CF8] hover:text-white flex items-center gap-1"
              >
                <span>Inspect Gaia Magnitudes in Object Lab</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

