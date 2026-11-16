import React, { useState } from 'react';
import { BookOpen, X, Sparkles, ExternalLink, Compass, Activity, Clock, Telescope, ChevronRight } from 'lucide-react';
import { QUEST_LEVELS, QUEST_STAGES } from '../questData';

interface LearningLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateModule?: (moduleId: string) => void;
}

export const LearningLibraryModal: React.FC<LearningLibraryModalProps> = ({
  isOpen,
  onClose,
  onNavigateModule
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredLevels = QUEST_LEVELS.filter((lvl) => {
    const matchesStage = selectedStage === 'all' || lvl.stageId === selectedStage;
    const matchesSearch =
      lvl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lvl.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lvl.learningPoints.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStage && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0E1626] border border-[#1E2D45] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#1E2D45] flex items-center justify-between bg-[#111C2E]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display">Astrophysics Learning Library</h2>
              <p className="text-xs text-[#94A3B8] font-mono">
                Scientific principles, formulas & mission references from Cosmic Brightness Quest
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#1E2D45] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-[#1E2D45] bg-[#080D18]/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setSelectedStage('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition ${
                selectedStage === 'all'
                  ? 'bg-[#38BDF8] text-[#080D18] font-bold shadow-sm'
                  : 'bg-[#111C2E] text-[#94A3B8] hover:text-white'
              }`}
            >
              All Topics
            </button>
            {QUEST_STAGES.map((stg) => (
              <button
                key={stg.id}
                onClick={() => setSelectedStage(stg.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition whitespace-nowrap ${
                  selectedStage === stg.id
                    ? 'bg-[#38BDF8] text-[#080D18] font-bold shadow-sm'
                    : 'bg-[#111C2E] text-[#94A3B8] hover:text-white'
                }`}
              >
                {stg.name.split('—')[1]?.trim() || stg.name}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search concepts or formulas..."
            className="px-3.5 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#38BDF8] font-mono w-60"
          />
        </div>

        {/* Scrollable Encyclopedia Entries */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {filteredLevels.map((lvl) => (
            <div
              key={lvl.id}
              className="p-5 rounded-2xl bg-[#111C2E]/60 border border-[#1E2D45] hover:border-[#38BDF8]/40 transition space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono text-[#38BDF8] tracking-wider uppercase">
                    Level {lvl.id} • {lvl.concept}
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5">{lvl.title}</h3>
                </div>

                {lvl.scientificFormula && (
                  <div className="px-3 py-1.5 rounded-xl bg-[#080D18] border border-[#1E2D45] text-xs font-mono text-[#FBBF24]">
                    {lvl.scientificFormula}
                  </div>
                )}
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">{lvl.description}</p>

              {/* Key Bullet Points */}
              <div className="p-3 rounded-xl bg-[#080D18]/80 border border-[#1E2D45]/60 space-y-1.5">
                <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider">
                  Key Scientific Takeaways:
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {lvl.learningPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep Dive Note */}
              <div className="text-xs text-slate-400 italic bg-[#1E2D45]/20 p-2.5 rounded-lg border-l-2 border-[#A78BFA]">
                <strong className="text-slate-300 not-italic font-mono text-[11px]">Astrophysics Insight: </strong>
                {lvl.learnMoreText}
              </div>

              {/* Contextual Link to SKYVERSE */}
              {lvl.scientificContextLink && onNavigateModule && (
                <div className="pt-2 flex items-center justify-between border-t border-[#1E2D45]/60 text-xs font-mono">
                  <span className="text-[#94A3B8] text-[11px]">{lvl.scientificContextLink.description}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateModule(lvl.scientificContextLink!.module);
                    }}
                    className="flex items-center gap-1.5 text-[#38BDF8] hover:text-white transition group"
                  >
                    <span>{lvl.scientificContextLink.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </button>
                </div>
              )}
            </div>
          ))}

          {filteredLevels.length === 0 && (
            <div className="text-center py-12 text-[#94A3B8] font-mono text-sm">
              No astronomical topics match "{searchTerm}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1E2D45] bg-[#0E1626] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <span>12 Scientific Modules Verified with NASA/IPAC IRSA & SPHEREx Syllabus</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E2D45] hover:bg-[#2A3F60] text-white font-medium transition"
          >
            Close Library
          </button>
        </div>
      </div>
    </div>
  );
};

