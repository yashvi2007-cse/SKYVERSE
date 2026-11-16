import React from 'react';
import { TopicItem, TopicProgress } from '../../../types/learnExplore';
import {
  Clock,
  CheckCircle2,
  Award,
  ChevronRight,
  BookOpen,
  Sparkles,
  Zap
} from 'lucide-react';

interface TopicCardProps {
  topic: TopicItem;
  progress?: TopicProgress;
  onSelect: () => void;
  onStartQuiz: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  progress,
  onSelect,
  onStartQuiz
}) => {
  const isCompleted = progress?.completed;

  return (
    <div className="group relative rounded-2xl bg-[#09101E]/90 hover:bg-[#0E172B] border border-[#1E2D45] hover:border-[#38BDF8]/50 p-5 transition-all duration-200 shadow-lg hover:shadow-[#38BDF8]/10 flex flex-col justify-between space-y-4">
      {/* Top Meta Bar */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
              topic.difficulty === 'Beginner'
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : topic.difficulty === 'Intermediate'
                ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
            }`}
          >
            {topic.difficulty}
          </span>

          <div className="flex items-center gap-1 text-[11px] font-mono text-[#94A3B8]">
            <Clock className="w-3 h-3" />
            <span>{topic.readingTimeMinutes}m</span>
          </div>
        </div>

        {isCompleted ? (
          <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Done</span>
          </span>
        ) : progress?.totalAttempts ? (
          <span className="text-[10px] font-mono text-[#F59E0B] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
            Quiz: {progress.accuracy}%
          </span>
        ) : null}
      </div>

      {/* Main Title & Description */}
      <div className="space-y-1.5 cursor-pointer" onClick={onSelect}>
        <h4 className="text-base font-bold font-display text-white group-hover:text-[#38BDF8] transition leading-snug">
          {topic.title}
        </h4>
        <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed">
          {topic.subtitle}
        </p>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-2 border-t border-[#1E2D45]/70 flex items-center justify-between gap-2">
        <button
          onClick={onSelect}
          className="flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-white transition"
        >
          <span>Read Lesson</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onStartQuiz();
          }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#111C2E] hover:bg-[#1E2D45] border border-[#1E2D45] text-xs font-mono text-[#A855F7] hover:text-white transition"
          title="Take 5-Question Quiz"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Quiz</span>
        </button>
      </div>
    </div>
  );
};

