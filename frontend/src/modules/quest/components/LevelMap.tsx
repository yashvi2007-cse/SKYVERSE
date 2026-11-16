import React from 'react';
import { Lock, CheckCircle2, Star, Play, Sparkles, ArrowRight } from 'lucide-react';
import { QUEST_LEVELS, QUEST_STAGES } from '../questData';
import { QuestPlayerState } from '../../../types/quest';

interface LevelMapProps {
  playerState: QuestPlayerState;
  onSelectLevel: (levelId: number) => void;
  onCloseMap?: () => void;
}

export const LevelMap: React.FC<LevelMapProps> = ({
  playerState,
  onSelectLevel,
  onCloseMap
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Map Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-6 rounded-3xl bg-[#0E1626]/80 border border-[#1E2D45] backdrop-blur-md">
        <div>
          <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planetary Progression Course</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white mt-1">Cosmic Quest Level Map</h2>
          <p className="text-xs text-[#94A3B8] font-mono mt-0.5">
            Journey from visual perception to certified astronomical time-domain research.
          </p>
        </div>

        {onCloseMap && (
          <button
            onClick={onCloseMap}
            className="px-4 py-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-white hover:bg-[#1E2D45] transition"
          >
            Back to Dashboard
          </button>
        )}
      </div>

      {/* 4 Stages Path */}
      <div className="space-y-8">
        {QUEST_STAGES.map((stage, stageIdx) => {
          const stageLevels = QUEST_LEVELS.filter((l) => l.stageId === stage.id);
          const isStageUnlocked = stageLevels.some((l) => l.id <= playerState.unlockedLevel);
          const isStageCompleted = stageLevels.every((l) => playerState.completedLevels[l.id]?.completed);

          return (
            <div
              key={stage.id}
              className={`p-6 rounded-3xl border transition-all ${
                isStageCompleted
                  ? 'bg-[#0E1626]/90 border-[#10B981]/40 shadow-lg shadow-[#10B981]/5'
                  : isStageUnlocked
                  ? 'bg-[#0E1626]/80 border-[#1E2D45] shadow-lg'
                  : 'bg-[#0A101C]/50 border-[#1E2D45]/40 opacity-70'
              }`}
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2D45]/70 mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs font-mono"
                    style={{
                      backgroundColor: `${stage.accentColor}20`,
                      color: stage.accentColor,
                      border: `1px solid ${stage.accentColor}50`
                    }}
                  >
                    0{stageIdx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">{stage.name}</h3>
                    <p className="text-xs text-[#94A3B8] font-mono">{stage.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      backgroundColor: `${stage.accentColor}15`,
                      color: stage.accentColor,
                      border: `1px solid ${stage.accentColor}30`
                    }}
                  >
                    {stage.badge}
                  </span>
                  {isStageCompleted && (
                    <span className="flex items-center gap-1 text-xs text-[#10B981] font-mono">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Stage Mastered</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Levels Grid in Stage */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stageLevels.map((lvl) => {
                  const isUnlocked = lvl.id <= playerState.unlockedLevel;
                  const isCompleted = !!playerState.completedLevels[lvl.id]?.completed;
                  const result = playerState.completedLevels[lvl.id];
                  const isCurrent = lvl.id === playerState.currentLevel;

                  return (
                    <div
                      key={lvl.id}
                      onClick={() => {
                        if (isUnlocked) onSelectLevel(lvl.id);
                      }}
                      className={`relative p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                        isCompleted
                          ? 'bg-[#111C2E]/90 border-[#10B981]/50 hover:border-[#10B981] cursor-pointer shadow-md'
                          : isCurrent
                          ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer ring-1 ring-[#38BDF8]'
                          : isUnlocked
                          ? 'bg-[#111C2E]/70 border-[#1E2D45] hover:border-[#38BDF8]/60 cursor-pointer'
                          : 'bg-[#080D18]/40 border-[#1E2D45]/30 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className="px-2 py-0.5 rounded-md bg-[#080D18] border border-[#1E2D45] text-[#94A3B8]">
                          Level {lvl.id}
                        </span>

                        {isCompleted ? (
                          <div className="flex items-center gap-0.5 text-[#F59E0B]">
                            {[...Array(3)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < (result?.stars || 3) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-slate-600'
                                }`}
                              />
                            ))}
                          </div>
                        ) : isUnlocked ? (
                          <span className="text-[#38BDF8] font-bold flex items-center gap-1">
                            <Play className="w-3 h-3 fill-[#38BDF8]" />
                            <span>Play</span>
                          </span>
                        ) : (
                          <span className="text-[#94A3B8] flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            <span>Locked</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Concept */}
                      <div className="space-y-1 mb-4">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition">
                          {lvl.title}
                        </h4>
                        <p className="text-xs text-[#94A3B8] font-mono line-clamp-2">
                          {lvl.concept}
                        </p>
                      </div>

                      {/* Footer XP and action */}
                      <div className="pt-3 border-t border-[#1E2D45]/50 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#FBBF24]">+{lvl.xpReward} XP</span>
                        {isUnlocked && (
                          <span className="text-[#38BDF8] flex items-center gap-1 group-hover:translate-x-0.5 transition">
                            <span>{isCompleted ? 'Replay' : 'Start'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

