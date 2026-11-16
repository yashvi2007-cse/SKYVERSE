import React, { useState } from 'react';
import { TopicItem } from '../../../types/learnExplore';
import { InteractiveVisualizer } from './InteractiveVisualizer';
import { TopicQuizModal } from './TopicQuizModal';
import {
  ArrowLeft,
  Award,
  Sparkles,
  BookOpen,
  Clock,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Bookmark,
  Share2,
  ChevronRight,
  Info
} from 'lucide-react';

interface TopicDetailPageProps {
  topic: TopicItem;
  onBack: () => void;
  onNavigateModule?: (moduleId: string) => void;
  onQuizCompleted: (topicId: string, score: number, accuracy: number, earnedXp: number) => void;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: (topicId: string) => void;
}

export const TopicDetailPage: React.FC<TopicDetailPageProps> = ({
  topic,
  onBack,
  onNavigateModule,
  onQuizCompleted,
  isCompleted = false,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 rounded-2xl bg-[#09101E]/90 border border-[#1E2D45] backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Topics</span>
        </button>

        <div className="flex items-center gap-2">
          {onToggleBookmark && (
            <button
              onClick={() => onToggleBookmark(topic.id)}
              className={`p-2 rounded-xl border transition ${
                isBookmarked
                  ? 'bg-[#FDE047]/20 border-[#FDE047] text-[#FDE047]'
                  : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8] hover:text-white'
              }`}
              title="Bookmark Topic"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8] hover:text-white transition"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={() => setShowQuiz(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0284C7] hover:to-[#6366F1] text-[#080D18] font-bold text-xs font-mono shadow-md shadow-[#38BDF8]/20 transition"
          >
            <Award className="w-4 h-4" />
            <span>Start Topic Quiz</span>
          </button>
        </div>
      </div>

      {/* Topic Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C1527] via-[#09101E] to-[#050711] border border-[#1E2D45] p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
              {topic.categoryId.replace('-', ' ').toUpperCase()}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                topic.difficulty === 'Beginner'
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                  : topic.difficulty === 'Intermediate'
                  ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                  : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
              }`}
            >
              {topic.difficulty}
            </span>

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5" />
              <span>{topic.readingTimeMinutes} min read</span>
            </div>

            {isCompleted && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Completed</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            {topic.title}
          </h1>

          <p className="text-lg md:text-xl text-[#38BDF8] font-medium font-sans">
            {topic.subtitle}
          </p>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            {topic.summary}
          </p>
        </div>
      </div>

      {/* Section 1 & 2: Introduction & Beginner-Friendly Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-[#09101E]/80 border border-[#1E2D45] backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#818CF8]">
            <BookOpen className="w-4 h-4" />
            <span>1. Scientific Introduction</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {topic.introduction}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#09101E]/80 border border-[#1E2D45] backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FDE047]">
            <Lightbulb className="w-4 h-4" />
            <span>2. Simple Everyday Analogy</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {topic.simpleExplanation}
          </p>
        </div>
      </div>

      {/* Section 7: Interactive Scientific Visualization */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8]">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Scientific Simulation</span>
          </div>
          <span className="text-[10px] font-mono text-[#94A3B8]">Real-Time Physics Model</span>
        </div>

        <InteractiveVisualizer
          vizType={topic.vizType}
          title={topic.vizTitle}
          description={topic.vizDescription}
        />
      </div>

      {/* Section 3 & 4: How It Works & Why It Matters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-[#09101E]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
          <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>3. How It Works (Physical Mechanism)</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300 font-sans leading-relaxed">
            {topic.howItWorks.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-md bg-[#111C2E] border border-[#1E2D45] text-[#38BDF8] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-[#09101E]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
          <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>4. Why It Matters in Astronomy</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300 font-sans leading-relaxed">
            {topic.whyItMatters.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-md bg-[#111C2E] border border-[#1E2D45] text-[#A855F7] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  ✦
                </span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 5: Scientific Terminology */}
      {topic.terminology.length > 0 && (
        <div className="p-6 rounded-3xl bg-[#09101E]/80 border border-[#1E2D45] backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8]">
            <Info className="w-4 h-4" />
            <span>5. Important Scientific Terminology</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {topic.terminology.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0C1527] border border-[#1E2D45] space-y-1.5"
              >
                <div className="text-xs font-bold font-mono text-[#FDE047]">{t.term}</div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{t.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 8 & 9: Interesting Facts & Key Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-[#09101E] to-[#0C1527] border border-amber-500/20 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
            <Sparkles className="w-4 h-4" />
            <span>8. Fascinating Cosmic Facts</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-200/90 font-sans leading-relaxed">
            {topic.facts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#F59E0B] font-bold">★</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-[#09101E] to-[#0C1527] border border-emerald-500/20 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>9. Key Scientific Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs text-emerald-200/90 font-sans leading-relaxed">
            {topic.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 11 & Bridge: Connect Learn & Explore with SKYVERSE */}
      {topic.skyverseBridge && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1E293B]/60 via-[#0C1527] to-[#1E293B]/60 border border-[#38BDF8]/40 shadow-xl flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Explore This Concept in SKYVERSE</span>
            </div>
            <h4 className="text-base font-bold font-display text-white">
              Connect Theory to Observation: {topic.skyverseBridge.moduleName}
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              {topic.skyverseBridge.description}
            </p>
          </div>

          <button
            onClick={() => onNavigateModule && onNavigateModule(topic.skyverseBridge!.moduleId)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#6366F1] hover:from-[#0284C7] hover:to-[#4F46E5] text-white font-bold text-xs font-mono shadow-[0_0_20px_rgba(56,189,248,0.3)] transition transform hover:-translate-y-0.5"
          >
            <span>{topic.skyverseBridge.actionLabel}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Section 10: Master Call-to-Action: Start Quiz */}
      <div className="p-8 rounded-3xl bg-[#09101E] border border-[#1E2D45] text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold font-display text-white">
          Ready to Test Your Knowledge?
        </h3>
        <p className="text-xs md:text-sm text-[#94A3B8] font-sans max-w-md mx-auto">
          Attempt the 5-question mastery challenge for <strong className="text-white">{topic.title}</strong>, earn Learning XP, and unlock achievement badges.
        </p>

        <button
          onClick={() => setShowQuiz(true)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#A855F7] hover:from-[#0284C7] hover:to-[#9333EA] text-[#080D18] font-bold text-sm font-mono shadow-[0_0_25px_rgba(56,189,248,0.35)] transition transform hover:-translate-y-0.5"
        >
          <Award className="w-5 h-5" />
          <span>Launch Topic Quiz (+125 XP Potential)</span>
        </button>
      </div>

      {/* Quiz Modal */}
      <TopicQuizModal
        topic={topic}
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        onQuizCompleted={onQuizCompleted}
      />
    </div>
  );
};

