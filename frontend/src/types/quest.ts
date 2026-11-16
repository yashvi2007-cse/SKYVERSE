export type PlayerRank =
  | 'Starlight Beginner'
  | 'Cosmic Explorer'
  | 'Astronomy Learner'
  | 'Stellar Analyst'
  | 'Cosmic Scientist';

export type StageId = 'stage1' | 'stage2' | 'stage3' | 'stage4';

export interface StageInfo {
  id: StageId;
  name: string;
  subtitle: string;
  levels: number[];
  accentColor: string;
  badge: string;
}

export interface LevelResult {
  completed: boolean;
  score: number;
  stars: number; // 1, 2, or 3 stars
  completedAt: string;
  perfect: boolean;
  hintsUsed: number;
}

export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  stage: StageId;
  unlockedAt?: string;
  requiredLevel: number;
}

export interface DailyChallenge {
  id: string;
  date: string;
  title: string;
  description: string;
  xpReward: number;
  completed: boolean;
  targetLevel: number;
}

export interface QuestPlayerState {
  xp: number;
  currentLevel: number;
  unlockedLevel: number;
  rank: PlayerRank;
  streak: number;
  lastPlayedDate: string;
  soundEnabled: boolean;
  completedLevels: Record<number, LevelResult>;
  unlockedBadges: string[];
  playerName: string;
}

export interface LevelDefinition {
  id: number;
  stageId: StageId;
  title: string;
  subtitle: string;
  concept: string;
  description: string;
  xpReward: number;
  scientificFormula?: string;
  learningPoints: string[];
  learnMoreText: string;
  scientificContextLink?: {
    module: string;
    label: string;
    description: string;
  };
}

