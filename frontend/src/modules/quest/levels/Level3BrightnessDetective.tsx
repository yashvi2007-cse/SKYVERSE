import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, ExternalLink } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level3BrightnessDetective: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule
}) => {
  const levelDef = QUEST_LEVELS[2];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Object B (Nearby Star) is the brightest apparent object (flux 2,400)
  const objects = [
    {
      id: 'galaxy',
      name: 'Spiral Galaxy NGC-4414',
      type: 'Extended Galaxy (200 Billion Stars)',
      distance: '62 Million Light-Years',
      visual: 'spiral',
      flux: 140
    },
    {
      id: 'star',
      name: 'Nearby Main-Sequence Star',
      type: 'Single Star (Spectral Type A2V)',
      distance: '12 Light-Years',
      visual: 'bright-star',
      flux: 2400
    },
    {
      id: 'nebula',
      name: 'Ring Planetary Nebula',
      type: 'Ionized Expanding Gas Cloud',
      distance: '2,500 Light-Years',
      visual: 'ring-nebula',
      flux: 380
    },
    {
      id: 'quasar',
      name: 'Distant Quasar Core',
      type: 'Supermassive Black Hole Accretion Disk',
      distance: '2.4 Billion Light-Years',
      visual: 'quasar',
      flux: 620
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    questAudio.playClick();
  };

  const handleSubmit = () => {
    if (!selectedId) return;
    const correct = selectedId === 'star';
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 150 : 125;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedId(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            Stage 1 • Level 03
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

      {/* Observation Grid */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Which celestial object appears brightest in our telescope detector?
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Carefully distinguish between an object’s actual physical size and its apparent flux reaching Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {objects.map((obj) => (
            <div
              key={obj.id}
              onClick={() => handleSelect(obj.id)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-3 group ${
                selectedId === obj.id
                  ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.3)] scale-[1.02]'
                  : 'bg-[#0E1626]/70 border-[#1E2D45] hover:border-[#38BDF8]/40 hover:bg-[#111C2E]/80'
              }`}
            >
              {/* Visual Thumbnail */}
              <div className="relative w-full h-28 rounded-xl bg-[#080D18] border border-[#1E2D45] overflow-hidden flex items-center justify-center">
                {obj.visual === 'spiral' && (
                  <div className="relative w-20 h-10 rounded-full border border-purple-400/40 rotate-[-25deg] shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-amber-200/50 blur-[2px]" />
                  </div>
                )}

                {obj.visual === 'bright-star' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-cyan-400/25 blur-lg" />
                    <div className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
                    <div className="absolute h-24 w-[2px] bg-gradient-to-b from-transparent via-cyan-200 to-transparent" />
                    <div className="relative w-7 h-7 rounded-full bg-white shadow-[0_0_16px_#ffffff]" />
                  </div>
                )}

                {obj.visual === 'ring-nebula' && (
                  <div className="w-16 h-16 rounded-full border-4 border-cyan-400/50 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}

                {obj.visual === 'quasar' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-pink-500/30 blur-md" />
                    <div className="relative w-3.5 h-3.5 rounded-full bg-amber-100 shadow-[0_0_10px_#fde047]" />
                  </div>
                )}
              </div>

              <div>
                <div className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition truncate">
                  {obj.name}
                </div>
                <div className="text-[11px] text-[#A78BFA] font-mono mt-0.5">{obj.type}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Distance: {obj.distance}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!selectedId || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              selectedId && !completed
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] shadow-lg shadow-[#38BDF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Confirm Identification
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Remember the inverse-square law. Even though a galaxy contains hundreds of billions of suns, it is 62 million light-years away, diluting its light tremendously. The nearby star is only 12 light-years away!
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
                {isCorrect ? 'Brilliant Deduction! Nearby Star is Apparent Winner.' : 'Incorrect Selection.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+150 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Apparent vs. Total Intrinsic Light:</strong> The galaxy NGC-4414 has a total luminosity over{' '}
              <strong className="text-white">100 billion times greater</strong> than the single star. However, because the galaxy is 62 million light-years away, its light has spread over trillions of square light-years.
            </p>
            <p className="text-slate-400">
              The nearby star delivers <span className="text-[#38BDF8] font-mono font-bold">2,400 flux counts/sec</span> to our detector, whereas the entire galaxy yields only{' '}
              <span className="text-slate-400 font-mono font-bold">140 flux counts/sec</span>. Apparent brightness depends strictly on the radiation arriving at Earth!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Stage 2 (Level 4)</span>
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

