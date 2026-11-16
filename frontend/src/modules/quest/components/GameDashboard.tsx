import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  Map,
  BookOpen,
  Award,
  Star,
  Flame,
  Volume2,
  VolumeX,
  RotateCcw,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { QuestPlayerState } from '../../../types/quest';
import { QUEST_ACHIEVEMENTS, calculateNextRankThreshold, QUEST_LEVELS } from '../questData';
import { questAudio } from '../audio';

interface GameDashboardProps {
  playerState: QuestPlayerState;
  onStartLevel: (levelId: number) => void;
  onOpenMap: () => void;
  onOpenLibrary: () => void;
  onOpenCertificate: () => void;
  onToggleSound: () => void;
  onResetProgress: () => void;
  onChangeName: (name: string) => void;
}

export const GameDashboard: React.FC<GameDashboardProps> = ({
  playerState,
  onStartLevel,
  onOpenMap,
  onOpenLibrary,
  onOpenCertificate,
  onToggleSound,
  onResetProgress,
  onChangeName
}) => {
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(playerState.playerName);

  const { nextRank, neededXP, progress } = calculateNextRankThreshold(playerState.xp);
  const currentLvlDef = QUEST_LEVELS.find((l) => l.id === playerState.currentLevel) || QUEST_LEVELS[0];
  const completedCount = Object.keys(playerState.completedLevels).length;
  const isAllComplete = completedCount === 12;

  const handleSaveName = () => {
    if (tempName.trim()) {
      onChangeName(tempName.trim());
    }
    setEditingName(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* ================= HERO BANNER WITH GLOWING STELLAR CORE ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-[#060A14]/90 border border-[#1E2D45] p-6 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Glow backdrop lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#38BDF8]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C2E]/80 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>ACCREDITED SKYVERSE EDUCATIONAL QUEST</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                COSMIC BRIGHTNESS{' '}
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
                  QUEST
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#A78BFA] tracking-wider uppercase">
                Discover the Light. Understand the Universe.
              </p>
            </div>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed font-sans">
              Begin by spotting a brighter star in the night sky. Gradually unlock the inverse-square law, logarithmic magnitude scales, variable star light curves, and SPHEREx 102-channel infrared spectroscopy.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  questAudio.playClick();
                  onStartLevel(playerState.currentLevel);
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#6366F1] hover:from-[#0284C7] hover:to-[#4F46E5] text-[#080D18] font-extrabold text-sm shadow-[0_0_24px_rgba(56,189,248,0.4)] transition transform hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 fill-[#080D18]" />
                <span>Continue Adventure (Level {playerState.currentLevel})</span>
              </button>

              <button
                onClick={() => {
                  questAudio.playClick();
                  onOpenMap();
                }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#111C2E]/90 hover:bg-[#1E2D45] text-[#F1F5F9] font-medium text-sm border border-[#1E2D45] backdrop-blur-md transition"
              >
                <Map className="w-4 h-4 text-[#38BDF8]" />
                <span>Level Map (12 Levels)</span>
              </button>

              <button
                onClick={() => {
                  questAudio.playClick();
                  onOpenLibrary();
                }}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#111C2E]/90 hover:bg-[#1E2D45] text-slate-300 hover:text-white text-sm border border-[#1E2D45] transition"
              >
                <BookOpen className="w-4 h-4 text-[#A78BFA]" />
                <span>Library</span>
              </button>
            </div>
          </div>

          {/* Right Glowing Central Star / Profile Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Glowing Stellar Core Animation */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              {/* Outer Pulsing Corona Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38BDF8]/20 via-[#818CF8]/30 to-[#F59E0B]/20 blur-xl animate-pulse" />
              <div className="absolute w-48 h-48 rounded-full border border-[#38BDF8]/30 animate-spin-slow opacity-60" />
              <div className="absolute w-40 h-40 rounded-full border border-[#A78BFA]/40 rotate-45 opacity-60" />

              {/* Glowing Core Star */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#FDE047] via-[#F59E0B] to-[#EF4444] shadow-[0_0_50px_rgba(253,224,71,0.6)] flex flex-col items-center justify-center text-center p-2">
                <div className="text-[10px] font-mono font-bold text-[#080D18] uppercase tracking-wider">
                  Level
                </div>
                <div className="text-3xl font-black font-mono text-[#080D18] leading-none">
                  {playerState.currentLevel}
                </div>
                <div className="text-[9px] font-mono text-[#080D18]/80 font-bold mt-0.5">
                  / 12
                </div>
              </div>

              {/* Orbiting Starlight Sparkles */}
              <div className="absolute top-2 right-4 text-[#FDE047] text-lg animate-bounce">✦</div>
              <div className="absolute bottom-4 left-6 text-[#38BDF8] text-sm animate-pulse">✨</div>
              <div className="absolute top-12 left-2 text-[#A78BFA] text-xs">★</div>
            </div>

            {/* Sound & Certificate Quick Bar */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  questAudio.playClick();
                  onToggleSound();
                }}
                className={`p-2.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition ${
                  playerState.soundEnabled
                    ? 'bg-[#111C2E] border-[#38BDF8]/40 text-[#38BDF8]'
                    : 'bg-[#111C2E]/60 border-[#1E2D45] text-slate-500'
                }`}
                title={playerState.soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
              >
                {playerState.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{playerState.soundEnabled ? 'Audio On' : 'Muted'}</span>
              </button>

              {isAllComplete && (
                <button
                  onClick={() => {
                    questAudio.playFanfare();
                    onOpenCertificate();
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#080D18] font-bold text-xs font-mono shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center gap-1.5 animate-pulse"
                >
                  <Award className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: CADET PROFILE & MASTERY PROGRESS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="p-6 rounded-3xl bg-[#0E1626]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#94A3B8] uppercase">Player Profile</span>
            <div className="flex items-center gap-1 text-xs font-mono text-[#F59E0B]">
              <Flame className="w-3.5 h-3.5 fill-[#F59E0B]" />
              <span>{playerState.streak} Day Streak</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] p-0.5 shadow-md">
              <div className="w-full h-full rounded-[14px] bg-[#080D18] flex items-center justify-center text-xl font-bold text-white">
                🔭
              </div>
            </div>

            <div className="min-w-0 flex-1">
              {editingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full px-2 py-1 rounded bg-[#111C2E] border border-[#38BDF8] text-xs text-white font-mono"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="px-2 py-1 bg-[#38BDF8] text-[#080D18] text-xs font-bold rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setEditingName(true)}
                  className="font-bold text-white text-base truncate cursor-pointer hover:text-[#38BDF8] flex items-center gap-1.5"
                  title="Click to rename"
                >
                  <span>{playerState.playerName}</span>
                  <span className="text-[10px] text-[#94A3B8] font-mono">✎</span>
                </div>
              )}
              <div className="text-xs font-mono text-[#38BDF8] font-semibold">{playerState.rank}</div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Total XP: <strong className="text-white">{playerState.xp} XP</strong></span>
              <span className="text-[#38BDF8]">{progress}% to {nextRank}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#111C2E] overflow-hidden border border-[#1E2D45]">
              <div
                className="h-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-500 text-right">
              {neededXP > 0 ? `${neededXP} XP needed for promotion` : 'Highest Rank Achieved!'}
            </div>
          </div>
        </div>

        {/* Level Progression Summary */}
        <div className="p-6 rounded-3xl bg-[#0E1626]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#94A3B8] uppercase">Quest Trajectory</span>
            <span className="text-xs font-mono text-[#10B981]">{completedCount} of 12 Completed</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {QUEST_LEVELS.map((lvl) => {
              const isDone = !!playerState.completedLevels[lvl.id];
              const isCurrent = lvl.id === playerState.currentLevel;
              const isUnlocked = lvl.id <= playerState.unlockedLevel;

              return (
                <button
                  key={lvl.id}
                  onClick={() => {
                    if (isUnlocked) onStartLevel(lvl.id);
                  }}
                  disabled={!isUnlocked}
                  className={`h-11 rounded-xl font-mono text-xs font-bold transition flex flex-col items-center justify-center relative ${
                    isDone
                      ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/40 hover:bg-[#10B981]/25'
                      : isCurrent
                      ? 'bg-[#38BDF8] text-[#080D18] shadow-[0_0_12px_rgba(56,189,248,0.5)] font-extrabold'
                      : isUnlocked
                      ? 'bg-[#111C2E] text-slate-300 border border-[#1E2D45] hover:border-[#38BDF8]'
                      : 'bg-[#080D18]/50 text-slate-600 border border-[#1E2D45]/30 cursor-not-allowed'
                  }`}
                  title={`Level ${lvl.id}: ${lvl.title}`}
                >
                  <span>{lvl.id}</span>
                  {isDone && <span className="text-[8px] text-[#F59E0B] leading-none">★★★</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span>Next Target:</span>
            <span className="text-white font-medium truncate max-w-[180px]">{currentLvlDef.title}</span>
          </div>
        </div>

        {/* Daily Cosmic Challenge Card */}
        <div className="p-6 rounded-3xl bg-[#0E1626]/80 border border-[#1E2D45] backdrop-blur-md space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#F59E0B] uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Daily Cosmic Challenge</span>
              </span>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
                +150 Bonus XP
              </span>
            </div>

            <h3 className="text-sm font-bold text-white font-display">
              Inverse-Square Mastery Challenge
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
              Complete Level 5 without using hints to verify that doubling distance decreases flux to exactly 25%.
            </p>
          </div>

          <button
            onClick={() => onStartLevel(5)}
            className="w-full py-2.5 rounded-xl bg-[#111C2E] hover:bg-[#1E2D45] border border-[#F59E0B]/30 hover:border-[#F59E0B] text-xs font-mono text-white transition flex items-center justify-center gap-1.5"
          >
            <span>Launch Challenge</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
          </button>
        </div>
      </div>

      {/* ================= SECTION 3: EARNED ACHIEVEMENT BADGES ================= */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#0E1626]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-base font-bold text-white font-display">Achievement Badges</h3>
          </div>
          <span className="text-xs font-mono text-[#94A3B8]">
            {playerState.unlockedBadges.length} of {QUEST_ACHIEVEMENTS.length} Badges Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {QUEST_ACHIEVEMENTS.map((badge) => {
            const isUnlocked = playerState.unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center justify-between ${
                  isUnlocked
                    ? 'bg-[#111C2E] border-[#38BDF8]/40 shadow-md shadow-[#38BDF8]/5 hover:scale-105'
                    : 'bg-[#080D18]/50 border-[#1E2D45]/40 opacity-40'
                }`}
                title={badge.description}
              >
                <div className="text-3xl mb-1">{badge.icon}</div>
                <div>
                  <div className="text-xs font-bold text-white truncate max-w-full">{badge.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {isUnlocked ? 'Unlocked' : `Requires Lvl ${badge.requiredLevel}`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SECTION 4: RESET / REPLAY TOOLS ================= */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0A101C]/60 border border-[#1E2D45] text-xs font-mono text-[#94A3B8] flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Progress auto-saved in local encrypted browser cache.</span>
        </div>

        <button
          onClick={onResetProgress}
          className="text-slate-500 hover:text-red-400 transition flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Quest Progress</span>
        </button>
      </div>
    </div>
  );
};

