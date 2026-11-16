import React from 'react';
import { TopicItem } from '../../../types/learnExplore';
import {
  Search,
  Sparkles,
  Telescope,
  GraduationCap,
  Award,
  ArrowRight,
  BookOpen,
  Orbit,
  Compass,
  Activity
} from 'lucide-react';

interface LearningHeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  featuredTopic: TopicItem;
  onSelectTopic: (topicId: string) => void;
}

export const LearningHero: React.FC<LearningHeroProps> = ({
  searchQuery,
  onSearchChange,
  featuredTopic,
  onSelectTopic
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1224] via-[#080D18] to-[#04060B] border border-[#1E2D45] p-6 md:p-12 shadow-2xl">
      {/* Radial cosmic glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>SKYVERSE Astronomical Learning & Science Academy</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            THE UNIVERSE IS YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">CLASSROOM.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
            Explore the unknown, understand the science behind the universe and challenge your astronomical knowledge.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#38BDF8]" />
            <input
              type="text"
              placeholder="Search 47 topics, concepts (e.g., SPHEREx, Light Curves, Black Holes, Inverse-Square, Orbits)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0F172A]/90 border border-[#1E2D45] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition shadow-inner font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Featured Topic of the Day Banner */}
        <div className="p-4 rounded-2xl bg-[#0C1527]/80 border border-[#1E2D45] flex items-center justify-between flex-wrap gap-4 backdrop-blur-md max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
                Featured Topic of the Day
              </div>
              <div className="text-sm font-bold text-white font-display">
                {featuredTopic.title}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectTopic(featuredTopic.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111C2E] hover:bg-[#1E2D45] border border-[#1E2D45] text-xs font-mono text-[#38BDF8] hover:text-white transition"
          >
            <span>Explore Lesson</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Stat Pills */}
        <div className="flex items-center gap-4 flex-wrap pt-2 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>6 Cosmic Categories</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#818CF8]" />
            <span>47 Scientific Topics</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>235 Mastery Questions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>NASA SPHEREx, Gaia & NEOSSat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

