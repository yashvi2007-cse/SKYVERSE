import React, { useState, useEffect } from 'react';
import {
  CategoryId,
  TopicItem,
  UserLearningState,
  TopicProgress
} from '../../types/learnExplore';
import {
  LEARNING_CATEGORIES,
  INITIAL_LEARNING_STATE,
  LEARNING_ACHIEVEMENTS
} from './data/categoriesData';
import {
  ALL_TOPICS,
  getTopicById,
  getTopicsByCategory,
  searchTopics,
  getFeaturedTopic
} from './data/topicsData';
import { LearningHero } from './components/LearningHero';
import { LearningProgressCard } from './components/LearningProgressCard';
import { CategorySection } from './components/CategorySection';
import { TopicDetailPage } from './components/TopicDetailPage';
import { TopicQuizModal } from './components/TopicQuizModal';
import { TopicCard } from './components/TopicCard';
import {
  BookOpen,
  Filter,
  Layers,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Compass,
  CheckCircle2,
  Award
} from 'lucide-react';

const STORAGE_KEY = 'skyverse_learn_explore_progress_v1';

interface LearnExploreModuleProps {
  onNavigateModule?: (moduleId: string) => void;
  initialTopicId?: string;
}

export const LearnExploreModule: React.FC<LearnExploreModuleProps> = ({
  onNavigateModule,
  initialTopicId
}) => {
  // Saved user progress
  const [learningState, setLearningState] = useState<UserLearningState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_LEARNING_STATE;
  });

  // Navigation & Search State
  const [activeTopicId, setActiveTopicId] = useState<string | null>(initialTopicId || null);
  const [activeQuizTopic, setActiveQuizTopic] = useState<TopicItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningState));
    } catch {
      // ignore
    }
  }, [learningState]);

  // Featured Topic
  const featuredTopic = getFeaturedTopic();

  // Handle Quiz Completion
  const handleQuizCompleted = (
    topicId: string,
    score: number,
    accuracy: number,
    earnedXp: number
  ) => {
    setLearningState((prev) => {
      const existing = prev.quizHistory[topicId];
      const bestScore = Math.max(score, existing?.bestScore || 0);
      const isPassed = accuracy >= 60;

      const newHistory: Record<string, TopicProgress> = {
        ...prev.quizHistory,
        [topicId]: {
          topicId,
          completed: true,
          viewedAt: new Date().toISOString(),
          quizPassed: isPassed,
          bestScore,
          totalAttempts: (existing?.totalAttempts || 0) + 1,
          accuracy,
          needsRevisit: accuracy < 70
        }
      };

      const newCompleted = [...prev.completedTopicIds];
      if (!newCompleted.includes(topicId)) {
        newCompleted.push(topicId);
      }

      // Check for unlocked achievements
      const newBadges = [...prev.unlockedAchievements];
      LEARNING_ACHIEVEMENTS.forEach((ach) => {
        if (!newBadges.includes(ach.id)) {
          if (ach.requiredTopicsCount && newCompleted.length >= ach.requiredTopicsCount) {
            newBadges.push(ach.id);
          }
          if (ach.requiredXp && prev.xp + earnedXp >= ach.requiredXp) {
            newBadges.push(ach.id);
          }
        }
      });

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        completedTopicIds: newCompleted,
        quizHistory: newHistory,
        unlockedAchievements: newBadges
      };
    });
  };

  // Bookmark Toggle
  const handleToggleBookmark = (topicId: string) => {
    setLearningState((prev) => {
      const exists = prev.bookmarkedTopicIds.includes(topicId);
      const updated = exists
        ? prev.bookmarkedTopicIds.filter((id) => id !== topicId)
        : [...prev.bookmarkedTopicIds, topicId];
      return { ...prev, bookmarkedTopicIds: updated };
    });
  };

  // Reset Progress
  const handleResetProgress = () => {
    if (window.confirm('Reset all Learn & Explore progress, XP, and quiz records?')) {
      setLearningState(INITIAL_LEARNING_STATE);
    }
  };

  // If viewing an individual topic
  if (activeTopicId) {
    const topic = getTopicById(activeTopicId);
    if (topic) {
      return (
        <TopicDetailPage
          topic={topic}
          onBack={() => {
            setActiveTopicId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateModule={onNavigateModule}
          onQuizCompleted={handleQuizCompleted}
          isCompleted={learningState.completedTopicIds.includes(topic.id)}
          isBookmarked={learningState.bookmarkedTopicIds.includes(topic.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      );
    }
  }

  // Filtered topics when searching
  const searchedTopics = searchQuery.trim() ? searchTopics(searchQuery) : null;

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-24 text-slate-100 select-none">
      {/* 1. Hero Section */}
      <LearningHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        featuredTopic={featuredTopic}
        onSelectTopic={(id) => {
          setActiveTopicId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Learning Progress Overview */}
      <LearningProgressCard
        learningState={learningState}
        topics={ALL_TOPICS}
        onSelectTopic={(id) => {
          setActiveTopicId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetProgress={handleResetProgress}
      />

      {/* 3. Category Filter Navigation Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
            <Filter className="w-4 h-4 text-[#38BDF8]" />
            <span>Explore by Scientific Domain</span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {searchedTopics ? `${searchedTopics.length} Results Found` : '47 Comprehensive Topics'}
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap border ${
              selectedCategory === 'all'
                ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8] shadow-md shadow-[#38BDF8]/20'
                : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8] hover:text-white'
            }`}
          >
            All Categories (47)
          </button>

          {LEARNING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap border ${
                selectedCategory === cat.id
                  ? 'border-white text-white shadow-md'
                  : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8] hover:text-white'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.id ? `${cat.badgeColor}25` : undefined,
                borderColor: selectedCategory === cat.id ? cat.badgeColor : undefined,
                color: selectedCategory === cat.id ? cat.badgeColor : undefined
              }}
            >
              {cat.title} ({cat.topicIds.length})
            </button>
          ))}
        </div>
      </div>

      {/* 4. Topics Display (Search Results OR Category Sections) */}
      {searchedTopics ? (
        /* Search Results Grid */
        <div className="space-y-4">
          <div className="text-sm font-mono text-[#38BDF8]">
            Showing search matches for &ldquo;{searchQuery}&rdquo;:
          </div>
          {searchedTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchedTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  progress={learningState.quizHistory[topic.id]}
                  onSelect={() => {
                    setActiveTopicId(topic.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onStartQuiz={() => setActiveQuizTopic(topic)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-[#09101E] border border-[#1E2D45] space-y-3">
              <div className="text-4xl">🔭</div>
              <h4 className="text-base font-bold text-white font-display">No Astronomical Topics Found</h4>
              <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto">
                No matching topics for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;SPHEREx&rdquo;, &ldquo;Wavelength&rdquo;, &ldquo;Orbits&rdquo;, or &ldquo;Luminosity&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#38BDF8] hover:bg-[#1E2D45]"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Category Sections */
        <div className="space-y-12">
          {LEARNING_CATEGORIES.filter(
            (c) => selectedCategory === 'all' || selectedCategory === c.id
          ).map((cat) => {
            const catTopics = getTopicsByCategory(cat.id);
            return (
              <CategorySection
                key={cat.id}
                category={cat}
                topics={catTopics}
                quizHistory={learningState.quizHistory}
                onSelectTopic={(id) => {
                  setActiveTopicId(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onStartQuiz={(topic) => setActiveQuizTopic(topic)}
              />
            );
          })}
        </div>
      )}

      {/* Quick Quiz Modal triggered directly from topic card */}
      {activeQuizTopic && (
        <TopicQuizModal
          topic={activeQuizTopic}
          isOpen={true}
          onClose={() => setActiveQuizTopic(null)}
          onQuizCompleted={handleQuizCompleted}
        />
      )}
    </div>
  );
};

