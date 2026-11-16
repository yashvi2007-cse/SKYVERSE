export type CategoryId =
  | 'space-fundamentals'
  | 'stars-stellar'
  | 'planets-exoplanets'
  | 'light-spectral'
  | 'deep-space'
  | 'space-missions';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ScientificTerm {
  term: string;
  definition: string;
  etymologyOrContext?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'scenario';
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
  scenarioContext?: string;
}

export interface SkyverseBridge {
  moduleId: string;
  moduleName: string;
  actionLabel: string;
  description: string;
  defaultCoords?: { ra: number; dec: number; fov: number };
}

export type VizType =
  | 'inverse-square'
  | 'spectrum-wavelength'
  | 'planetary-orbit'
  | 'stellar-evolution'
  | 'light-curve'
  | 'coordinates-sphere'
  | 'habitable-zone'
  | 'redshift-doppler'
  | 'celestial-galaxy';

export interface TopicItem {
  id: string;
  categoryId: CategoryId;
  title: string;
  subtitle: string;
  difficulty: DifficultyLevel;
  readingTimeMinutes: number;
  iconName: string;
  summary: string;
  introduction: string;
  simpleExplanation: string;
  howItWorks: string[];
  whyItMatters: string[];
  terminology: ScientificTerm[];
  facts: string[];
  keyTakeaways: string[];
  vizType: VizType;
  vizTitle: string;
  vizDescription: string;
  skyverseBridge?: SkyverseBridge;
  quizQuestions: QuizQuestion[];
}

export interface LearningCategory {
  id: CategoryId;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  gradient: string;
  badgeColor: string;
  topicIds: string[];
}

export interface TopicProgress {
  topicId: string;
  completed: boolean;
  viewedAt: string;
  quizPassed: boolean;
  bestScore: number;
  totalAttempts: number;
  accuracy: number;
  needsRevisit?: boolean;
}

export interface LearningAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  requiredXp?: number;
  requiredTopicsCount?: number;
}

export interface UserLearningState {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedTopicIds: string[];
  inProgressTopicId: string | null;
  quizHistory: Record<string, TopicProgress>;
  unlockedAchievements: string[];
  bookmarkedTopicIds: string[];
}

