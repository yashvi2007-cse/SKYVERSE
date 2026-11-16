import React, { useState, useEffect } from 'react';
import { Sparkles, Map as MapIcon, BookOpen, Award, ArrowLeft, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { QuestPlayerState } from '../../types/quest';
import {
  INITIAL_PLAYER_STATE,
  calculateRank,
  QUEST_ACHIEVEMENTS,
  DAILY_CHALLENGE,
  QUEST_LEVELS
} from './questData';
import { questAudio } from './audio';
import { Confetti } from './components/Confetti';
import { GameDashboard } from './components/GameDashboard';
import { LevelMap } from './components/LevelMap';
import { LearningLibraryModal } from './components/LearningLibraryModal';
import { CosmicCertificateModal } from './components/CosmicCertificateModal';

// Levels
import { Level1SpotBrighter } from './levels/Level1SpotBrighter';
import { Level2ArrangeBrightness } from './levels/Level2ArrangeBrightness';
import { Level3BrightnessDetective } from './levels/Level3BrightnessDetective';
import { Level4MagnitudeMission } from './levels/Level4MagnitudeMission';
import { Level5InverseSquareMystery } from './levels/Level5InverseSquareMystery';
import { Level6LuminosityLab } from './levels/Level6LuminosityLab';
import { Level7VariableStarWatch } from './levels/Level7VariableStarWatch';
import { Level8BuildLightCurve } from './levels/Level8BuildLightCurve';
import { Level9StarOrPlanet } from './levels/Level9StarOrPlanet';
import { Level10InfraredVision } from './levels/Level10InfraredVision';
import { Level11SpectralChallenge } from './levels/Level11SpectralChallenge';
import { Level12CosmicInvestigator } from './levels/Level12CosmicInvestigator';

const STORAGE_KEY = 'skyverse_cbq_state_v1';

interface CosmicBrightnessQuestModuleProps {
  onNavigateModule?: (mod: string) => void;
}

export const CosmicBrightnessQuestModule: React.FC<CosmicBrightnessQuestModuleProps> = ({
  onNavigateModule
}) => {
  // Load saved state or default
  const [playerState, setPlayerState] = useState<QuestPlayerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_PLAYER_STATE;
  });

  const [currentView, setCurrentView] = useState<'dashboard' | 'map' | 'level'>('dashboard');
  const [activeLevelId, setActiveLevelId] = useState<number>(1);
  const [showLibrary, setShowLibrary] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(playerState));
    } catch {
      // storage unavailable
    }
  }, [playerState]);

  // Sync audio toggle
  useEffect(() => {
    questAudio.setEnabled(playerState.soundEnabled);
  }, [playerState.soundEnabled]);

  // Sound toggle handler
  const handleToggleSound = () => {
    setPlayerState((prev) => {
      const next = !prev.soundEnabled;
      questAudio.setEnabled(next);
      if (next) questAudio.playClick();
      return { ...prev, soundEnabled: next };
    });
  };

  // Name change handler
  const handleChangeName = (newName: string) => {
    setPlayerState((prev) => ({
      ...prev,
      playerName: newName.trim() || 'Cosmic Cadet'
    }));
  };

  // Reset progress handler
  const handleResetProgress = () => {
    if (window.confirm('Reset all Cosmic Brightness Quest progress? This will reset XP, badges, and unlock status.')) {
      setPlayerState(INITIAL_PLAYER_STATE);
      setCurrentView('dashboard');
      questAudio.playClick();
    }
  };

  // Start a specific level
  const handleStartLevel = (levelId: number) => {
    setActiveLevelId(levelId);
    setCurrentView('level');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Level completion
  const handleLevelComplete = (earnedXP: number, stars: number) => {
    setShowConfetti(true);
    questAudio.playFanfare();

    setPlayerState((prev) => {
      const newXP = prev.xp + earnedXP;
      const newRank = calculateRank(newXP);
      const nextUnlocked = Math.max(prev.unlockedLevel, Math.min(12, activeLevelId + 1));
      const nextCurrent = Math.min(12, activeLevelId + 1);

      // Check badges to unlock
      const newBadges = [...prev.unlockedBadges];
      QUEST_ACHIEVEMENTS.forEach((b) => {
        if (!newBadges.includes(b.id) && b.requiredLevel <= activeLevelId) {
          newBadges.push(b.id);
        }
      });

      // Daily challenge completion bonus
      let bonusXP = 0;
      if (activeLevelId === DAILY_CHALLENGE.targetLevel && !DAILY_CHALLENGE.completed) {
        bonusXP = DAILY_CHALLENGE.xpReward;
        DAILY_CHALLENGE.completed = true;
      }

      return {
        ...prev,
        xp: newXP + bonusXP,
        rank: newRank,
        unlockedLevel: nextUnlocked,
        currentLevel: nextCurrent,
        unlockedBadges: newBadges,
        completedLevels: {
          ...prev.completedLevels,
          [activeLevelId]: {
            completed: true,
            score: earnedXP,
            stars,
            completedAt: new Date().toISOString(),
            perfect: stars === 3,
            hintsUsed: 0
          }
        }
      };
    });
  };

  // Advance to next level
  const handleNextLevel = () => {
    if (activeLevelId < 12) {
      setActiveLevelId(activeLevelId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowCertificate(true);
      setCurrentView('dashboard');
    }
  };

  // Render current level
  const renderLevelComponent = () => {
    const props = {
      onComplete: handleLevelComplete,
      onNextLevel: handleNextLevel,
      onBackToMap: () => setCurrentView('map'),
      onNavigateModule
    };

    switch (activeLevelId) {
      case 1:
        return <Level1SpotBrighter {...props} />;
      case 2:
        return <Level2ArrangeBrightness {...props} />;
      case 3:
        return <Level3BrightnessDetective {...props} />;
      case 4:
        return <Level4MagnitudeMission {...props} />;
      case 5:
        return <Level5InverseSquareMystery {...props} />;
      case 6:
        return <Level6LuminosityLab {...props} />;
      case 7:
        return <Level7VariableStarWatch {...props} />;
      case 8:
        return <Level8BuildLightCurve {...props} />;
      case 9:
        return <Level9StarOrPlanet {...props} />;
      case 10:
        return <Level10InfraredVision {...props} />;
      case 11:
        return <Level11SpectralChallenge {...props} />;
      case 12:
        return (
          <Level12CosmicInvestigator
            {...props}
            onOpenCertificate={() => setShowCertificate(true)}
          />
        );
      default:
        return <Level1SpotBrighter {...props} />;
    }
  };

  const currentLevelDef = QUEST_LEVELS.find((l) => l.id === activeLevelId);

  return (
    <div className="relative min-h-screen text-slate-100 pb-20 select-none">
      {/* Confetti overlay */}
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Persistent Quick Sub-Nav for Quest */}
      <div className="sticky top-0 z-30 bg-[#080D18]/90 backdrop-blur-md border-b border-[#1E2D45] px-4 md:px-8 py-3 mb-6 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          {currentView !== 'dashboard' && (
            <button
              onClick={() => {
                questAudio.playClick();
                setCurrentView('dashboard');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <h1 className="text-sm font-bold font-display tracking-wider text-white">
              COSMIC BRIGHTNESS QUEST
            </h1>
          </div>

          {currentView === 'level' && currentLevelDef && (
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#1E2D45] text-xs font-mono text-[#38BDF8]">
              <span className="px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">
                Level {currentLevelDef.id} of 12
              </span>
              <span className="text-[#94A3B8] truncate max-w-[200px]">{currentLevelDef.title}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Rank Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#A78BFA]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{playerState.rank}</span>
          </div>

          {/* Map View Toggle */}
          <button
            onClick={() => {
              questAudio.playClick();
              setCurrentView('map');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition ${
              currentView === 'map'
                ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8]'
                : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8] hover:text-white'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Level Map</span>
          </button>

          {/* Library Modal */}
          <button
            onClick={() => {
              questAudio.playClick();
              setShowLibrary(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="hidden md:inline">Library</span>
          </button>

          {/* Certificate Modal */}
          <button
            onClick={() => {
              questAudio.playClick();
              setShowCertificate(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-[#FCD34D] hover:border-[#FCD34D] transition"
          >
            <Award className="w-3.5 h-3.5 text-[#FCD34D]" />
            <span className="hidden md:inline">Certificate</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label="Toggle sound"
            className="p-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition"
          >
            {playerState.soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#64748B]" />
            )}
          </button>
        </div>
      </div>

      {/* Main View Switcher */}
      <div className="px-4 md:px-8">
        {currentView === 'dashboard' && (
          <GameDashboard
            playerState={playerState}
            onStartLevel={handleStartLevel}
            onOpenMap={() => setCurrentView('map')}
            onOpenLibrary={() => setShowLibrary(true)}
            onOpenCertificate={() => setShowCertificate(true)}
            onToggleSound={handleToggleSound}
            onResetProgress={handleResetProgress}
            onChangeName={handleChangeName}
          />
        )}

        {currentView === 'map' && (
          <LevelMap
            playerState={playerState}
            onSelectLevel={handleStartLevel}
            onCloseMap={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'level' && renderLevelComponent()}
      </div>

      {/* Learning Library Modal */}
      <LearningLibraryModal
        isOpen={showLibrary}
        onClose={() => setShowLibrary(false)}
        onNavigateModule={onNavigateModule}
      />

      {/* Cosmic Certificate Modal */}
      <CosmicCertificateModal
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        playerState={playerState}
      />
    </div>
  );
};

