import React from 'react';
import { UserLearningState, TopicItem } from '../../../types/learnExplore';
import { LEARNING_ACHIEVEMENTS } from '../data/categoriesData';
import {
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  Target
} from 'lucide-react';

interface LearningProgressCardProps {
  learningState: UserLearningState;
  topics: TopicItem[];
  onSelectTopic: (topicId: string) => void;
  onResetProgress?: () => void;
}

export const LearningProgressCard: React.FC<LearningProgressCardProps> = ({
  learningState,
  topics,
  onSelectTopic,
  onResetProgress
}) => {
  const completedCount = learningState.completedTopicIds.length;
  const totalTopics = topics.length;
  const overallPercentage = Math.round((completedCount / totalTopics) * 100);

  // Calculate average accuracy
  const quizHistoryValues = Object.values(learningState.quizHistory);
  const avgAccuracy =
    quizHistoryValues.length > 0
      ? Math.round(
          quizHistoryValues.reduce((acc, curr) => acc + (curr.accuracy || 0), 0) /
            quizHistoryValues.length
        )
      : 0;

  // Topics needing revisit (accuracy < 70%)
  const needsRevisit = topics.filter((t) => {
    const q = learningState.quizHistory[t.id];
    return q && q.accuracy < 70;
  });

  // Recommended next topic
  const nextRecommended =
    topics.find((t) => !learningState.completedTopicIds.includes(t.id)) || topics[0];

  return (
    <div className="rounded-3xl bg-[#09101E]/90 border border-[#1E2D45] p-6 space-y-6 shadow-xl backdrop-blur-md">
      {/* Top Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold font-display text-white">Your Learning Journey</h3>
            <div className="text-[10px] font-mono text-[#94A3B8]">Knowledge Retention & Progress</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-[#F59E0B] font-bold">
            <Flame className="w-4 h-4 text-[#F59E0B]" />
            <span>{learningState.streakDays} Day Streak</span>
          </div>

          {/* Reset progress button */}
          {onResetProgress && (
            <button
              onClick={onResetProgress}
              className="p-1.5 rounded-lg bg-[#111C2E] text-slate-500 hover:text-rose-400 hover:bg-[#1E2D45] transition"
              title="Reset Learning Progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
          <div className="text-2xl font-bold font-mono text-white">
            {completedCount} <span className="text-xs text-[#94A3B8] font-normal">/ {totalTopics}</span>
          </div>
          <div className="text-[10px] font-mono text-[#94A3B8] mt-0.5">Topics Mastered</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
          <div className="text-2xl font-bold font-mono text-[#38BDF8]">
            {avgAccuracy}%
          </div>
          <div className="text-[10px] font-mono text-[#94A3B8] mt-0.5">Quiz Accuracy</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
          <div className="text-2xl font-bold font-mono text-[#FDE047]">
            {learningState.xp} XP
          </div>
          <div className="text-[10px] font-mono text-[#94A3B8] mt-0.5">Learning XP</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
          <div className="text-2xl font-bold font-mono text-[#A855F7]">
            {quizHistoryValues.length}
          </div>
          <div className="text-[10px] font-mono text-[#94A3B8] mt-0.5">Quizzes Attempted</div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-[#94A3B8]">Curriculum Completion</span>
          <span className="text-white font-bold">{overallPercentage}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#111C2E] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#A855F7] transition-all duration-500"
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
      </div>

      {/* Recommended Next Topic & Revisit Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#1E2D45]">
        {/* Recommended Next Lesson */}
        {nextRecommended && (
          <div className="p-4 rounded-2xl bg-[#0C1527] border border-[#1E2D45] flex flex-col justify-between space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#38BDF8] font-bold">
                Recommended Next Topic
              </div>
              <h4 className="text-sm font-bold text-white font-display mt-0.5">
                {nextRecommended.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-sans">
                {nextRecommended.subtitle}
              </p>
            </div>

            <button
              onClick={() => onSelectTopic(nextRecommended.id)}
              className="flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-[#111C2E] hover:bg-[#1E2D45] border border-[#1E2D45] text-xs font-mono text-[#38BDF8] transition"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Topics to Revisit */}
        <div className="p-4 rounded-2xl bg-[#0C1527] border border-[#1E2D45] flex flex-col justify-between space-y-3">
          <div>
            <div className="text-[10px] font-mono uppercase text-[#F59E0B] font-bold">
              Topics to Revisit
            </div>
            {needsRevisit.length > 0 ? (
              <div className="space-y-1.5 mt-2">
                {needsRevisit.slice(0, 2).map((t) => (
                  <div
                    key={t.id}
                    onClick={() => onSelectTopic(t.id)}
                    className="flex items-center justify-between text-xs text-slate-300 hover:text-white cursor-pointer font-sans"
                  >
                    <span className="truncate max-w-[180px]">{t.title}</span>
                    <span className="text-[10px] font-mono text-rose-400">
                      {learningState.quizHistory[t.id]?.accuracy}% score
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-400/90 font-sans mt-2">
                All attempted quizzes passed with 70%+ accuracy! Outstanding work.
              </p>
            )}
          </div>

          {needsRevisit.length > 0 && (
            <button
              onClick={() => onSelectTopic(needsRevisit[0].id)}
              className="flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-[#111C2E] hover:bg-[#1E2D45] border border-[#1E2D45] text-xs font-mono text-[#F59E0B] transition"
            >
              <span>Review Difficult Topic</span>
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="space-y-3 pt-2 border-t border-[#1E2D45]">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#94A3B8]">Earned Academic Badges</span>
          <span className="text-[#A855F7] font-bold">
            {learningState.unlockedAchievements.length} / {LEARNING_ACHIEVEMENTS.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {LEARNING_ACHIEVEMENTS.map((b) => {
            const isUnlocked = learningState.unlockedAchievements.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-2.5 rounded-xl border text-center transition ${
                  isUnlocked
                    ? 'bg-[#111C2E] border-[#38BDF8]/40 shadow-sm shadow-[#38BDF8]/10'
                    : 'bg-[#080D18]/40 border-[#1E2D45]/40 opacity-40'
                }`}
                title={b.description}
              >
                <div className="w-7 h-7 mx-auto rounded-lg bg-[#0C1527] flex items-center justify-center text-xs mb-1">
                  {isUnlocked ? '🏆' : '🔒'}
                </div>
                <div className="text-[11px] font-bold text-white truncate font-display">{b.title}</div>
                <div className="text-[9px] text-[#94A3B8] truncate">{isUnlocked ? 'Unlocked' : 'Locked'}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

