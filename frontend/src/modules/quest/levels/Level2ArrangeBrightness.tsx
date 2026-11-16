import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, MoveUp, MoveDown } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

interface StarItem {
  id: string;
  name: string;
  flux: number; // Higher is brighter
  sizePx: number;
  glowColor: string;
}

export const Level2ArrangeBrightness: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[1];

  const initialStars: StarItem[] = [
    { id: 's3', name: 'Star Gamma', flux: 950, sizePx: 16, glowColor: 'rgba(56, 189, 248, 0.4)' },
    { id: 's1', name: 'Star Alpha', flux: 2800, sizePx: 26, glowColor: 'rgba(255, 255, 255, 0.7)' },
    { id: 's5', name: 'Star Epsilon', flux: 180, sizePx: 8, glowColor: 'rgba(148, 163, 184, 0.2)' },
    { id: 's2', name: 'Star Beta', flux: 1600, sizePx: 20, glowColor: 'rgba(129, 140, 248, 0.5)' },
    { id: 's4', name: 'Star Delta', flux: 520, sizePx: 12, glowColor: 'rgba(167, 139, 250, 0.3)' }
  ];

  const [stars, setStars] = useState<StarItem[]>(initialStars);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= stars.length) return;
    const newArr = [...stars];
    const temp = newArr[index];
    newArr[index] = newArr[newIdx];
    newArr[newIdx] = temp;
    setStars(newArr);
    questAudio.playClick();
  };

  const handleVerify = () => {
    // Check if sorted descending by flux (highest to lowest)
    let correct = true;
    for (let i = 0; i < stars.length - 1; i++) {
      if (stars[i].flux < stars[i + 1].flux) {
        correct = false;
        break;
      }
    }

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      questAudio.playSuccess();
      setCompleted(true);
      const starsScore = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 150 : 125;
      onComplete(xp, starsScore);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setStars(initialStars);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            Stage 1 • Level 02
          </span>
          <h2 className="text-xl font-bold text-white font-display">{levelDef.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setShowHint(true);
              setHintsUsed((prev) => prev + 1);
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

      {/* Main Sorting Workspace */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Arrange Stars from Brightest (Top) to Dimmest (Bottom)
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Use the arrows to reorder the stars according to their apparent brightness.
          </p>
        </div>

        {/* Stars Reordering List */}
        <div className="space-y-2.5 max-w-lg mx-auto">
          {stars.map((star, idx) => (
            <div
              key={star.id}
              className="p-3.5 rounded-2xl bg-[#111C2E] border border-[#1E2D45] flex items-center justify-between gap-4 transition hover:border-[#38BDF8]/40"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-xs font-mono font-bold text-[#38BDF8]">
                  #{idx + 1}
                </span>

                {/* Visual Star Miniature */}
                <div className="w-12 h-12 rounded-xl bg-[#080D18] border border-[#1E2D45] flex items-center justify-center relative overflow-hidden">
                  <div
                    className="rounded-full bg-white transition-all shadow-[0_0_12px]"
                    style={{
                      width: `${star.sizePx}px`,
                      height: `${star.sizePx}px`,
                      boxShadow: `0 0 16px ${star.glowColor}`
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm font-bold text-white">{star.name}</div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">Relative Apparent Glow</div>
                </div>
              </div>

              {/* Up / Down Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveItem(idx, 'up')}
                  disabled={idx === 0 || completed}
                  className="p-2 rounded-xl bg-[#080D18] hover:bg-[#1E2D45] disabled:opacity-30 disabled:cursor-not-allowed text-white transition"
                  title="Move Up"
                >
                  <MoveUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => moveItem(idx, 'down')}
                  disabled={idx === stars.length - 1 || completed}
                  className="p-2 rounded-xl bg-[#080D18] hover:bg-[#1E2D45] disabled:opacity-30 disabled:cursor-not-allowed text-white transition"
                  title="Move Down"
                >
                  <MoveDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Button */}
        <div className="text-center pt-2">
          <button
            onClick={handleVerify}
            disabled={completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              !completed
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] shadow-lg shadow-[#38BDF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Check Ranking Order
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Star Alpha has the largest core with intense white halo. Star Epsilon is the smallest pinpoint with barely any glow.
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
                {isCorrect ? 'Flawless Ordering! All 5 Stars Ranked Correctly.' : 'Incorrect Order Detected.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+150 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Exact Measured Flux Values:</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-center pt-1">
              <div className="p-2 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]">
                <div className="text-[#38BDF8] font-bold">#1 Alpha</div>
                <div className="text-[10px] text-slate-400">2,800 flux</div>
              </div>
              <div className="p-2 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]">
                <div className="text-[#818CF8] font-bold">#2 Beta</div>
                <div className="text-[10px] text-slate-400">1,600 flux</div>
              </div>
              <div className="p-2 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]">
                <div className="text-[#A78BFA] font-bold">#3 Gamma</div>
                <div className="text-[10px] text-slate-400">950 flux</div>
              </div>
              <div className="p-2 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]">
                <div className="text-slate-300 font-bold">#4 Delta</div>
                <div className="text-[10px] text-slate-400">520 flux</div>
              </div>
              <div className="p-2 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]">
                <div className="text-slate-400 font-bold">#5 Epsilon</div>
                <div className="text-[10px] text-slate-400">180 flux</div>
              </div>
            </div>
            <p className="text-slate-400 pt-2">
              In astronomical catalogs, flux values span a dynamic range of millions to one. Calibrated aperture photometry integrates counts inside a circle around each star to sort them objectively.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 3</span>
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

