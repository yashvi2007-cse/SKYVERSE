import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Award,
  Sparkles,
  Layers,
  Clock,
  Compass,
  FileCheck
} from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
  onOpenCertificate?: () => void;
}

export const Level12CosmicInvestigator: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap,
  onNavigateModule,
  onOpenCertificate
}) => {
  const levelDef = QUEST_LEVELS[11];

  const [activeEpoch, setActiveEpoch] = useState<1 | 2>(1);
  const [selectedNature, setSelectedNature] = useState<string | null>(null);
  const [selectedBehavior, setSelectedBehavior] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Blink toggle
  const toggleBlink = () => {
    setActiveEpoch((prev) => (prev === 1 ? 2 : 1));
    questAudio.playClick();
  };

  const handleSubmit = () => {
    if (!selectedNature || !selectedBehavior) return;
    const natureCorrect = selectedNature === 'brown_dwarf';
    const behaviorCorrect = selectedBehavior === 'moving';
    const allCorrect = natureCorrect && behaviorCorrect;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playFanfare();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 350 : 300;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedNature(null);
    setSelectedBehavior(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#F59E0B]/40 shadow-lg shadow-[#F59E0B]/10">
        <div>
          <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider flex items-center gap-1 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Capstone Level 12 • Final Investigation</span>
          </span>
          <h2 className="text-xl font-bold text-white font-display">{levelDef.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setShowHint(true);
              setHintsUsed((p) => p + 1);
              questAudio.playHint();
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#FBBF24] hover:border-[#FBBF24] transition"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Hint</span>
          </button>
          <button
            onClick={onBackToMap}
            className="px-3 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-slate-300 hover:text-white transition"
          >
            Level Map
          </button>
        </div>
      </div>

      {/* Main Capstone Investigation Workbench */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Investigate Candidate Anomaly SKY-2026-XQ
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Blink the two observation epochs, inspect the photometry readings, and formulate your final scientific conclusion.
          </p>
        </div>

        {/* Blink Comparator Workbench */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Visual Blink Frame */}
          <div className="md:col-span-7 h-72 rounded-2xl bg-[#080D18] border border-[#1E2D45] relative overflow-hidden flex flex-col justify-between p-4">
            <div className="flex items-center justify-between text-xs font-mono z-10">
              <span className="px-2.5 py-1 rounded-md bg-[#111C2E]/90 border border-[#1E2D45] text-[#38BDF8] font-bold">
                {activeEpoch === 1 ? 'Epoch 1 (2024-04-12)' : 'Epoch 2 (2024-10-18)'}
              </span>
              <span className="text-slate-400">Δt = 189 Days</span>
            </div>

            {/* Simulated Starfield with Candidate Target */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Stationary Background Reference Stars */}
              <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-white opacity-80" />
              <div className="absolute top-20 right-24 w-3 h-3 rounded-full bg-cyan-200 opacity-90" />
              <div className="absolute bottom-12 left-28 w-2 h-2 rounded-full bg-slate-300 opacity-70" />
              <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-amber-200 opacity-80" />

              {/* The Candidate Anomaly Source (Moves horizontally from left to right between Epoch 1 and Epoch 2) */}
              <div
                className="absolute transition-all duration-300 flex flex-col items-center"
                style={{
                  left: activeEpoch === 1 ? '40%' : '58%',
                  top: '46%'
                }}
              >
                {/* Reticle Target Ring */}
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#F59E0B] animate-spin-slow flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#A78BFA] shadow-[0_0_12px_#c084fc]" />
                </div>
                <span className="text-[9px] font-mono text-[#F59E0B] font-bold mt-1">CANDIDATE</span>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between z-10 pt-2 border-t border-[#1E2D45]/40">
              <button
                onClick={toggleBlink}
                className="px-4 py-1.5 rounded-xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-md"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Blink Epochs (Click)</span>
              </button>

              <span className="text-[10px] font-mono text-slate-400">
                WCS: RA 133.795°, Dec -7.245°
              </span>
            </div>
          </div>

          {/* Scientific Telemetry Panel */}
          <div className="md:col-span-5 h-72 rounded-2xl bg-[#111C2E] border border-[#1E2D45] p-5 flex flex-col justify-between text-xs font-mono space-y-2">
            <div className="border-b border-[#1E2D45] pb-2 text-slate-300 font-bold">
              Archival Metadata & Photometry
            </div>

            <div className="space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Epoch 1 Flux:</span>
                <span className="text-white font-bold">14.2 µJy (Band 4)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Epoch 2 Flux:</span>
                <span className="text-white font-bold">14.1 µJy (Band 4)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Brightness Change:</span>
                <span className="text-[#10B981] font-bold">&lt; 1% (Constant Flux)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Positional Shift:</span>
                <span className="text-[#F59E0B] font-bold">Δθ = 0.42 arcsec</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Near-IR Color Index:</span>
                <span className="text-[#A78BFA] font-bold">Extremely Red (Y-Type)</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#080D18] border border-[#1E2D45] text-[11px] text-slate-400">
              Diagnostic: High proper motion displacement detected over 189 days without photometric variability.
            </div>
          </div>
        </div>

        {/* Conclusion Question 1: Nature of Object */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-white font-display block">
            Investigation Task 1: What is the physical classification of this candidate object?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'brown_dwarf', label: 'Sub-Stellar Cold Brown Dwarf', desc: 'Ultra-cool thermal infrared emitter in solar neighborhood' },
              { id: 'pulsar', label: 'Radio Pulsar', desc: 'Rapidly rotating neutron star with millisecond radio pulses' },
              { id: 'quasar', label: 'Supermassive Quasar', desc: 'Distant active galactic nucleus billions of light-years away' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setSelectedNature(opt.id);
                  questAudio.playClick();
                }}
                className={`p-3.5 rounded-xl border text-left transition ${
                  selectedNature === opt.id
                    ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white font-bold shadow-md'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#F59E0B]/50'
                }`}
              >
                <div className="text-xs font-bold text-white">{opt.label}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Conclusion Question 2: Physical Mechanism */}
        <div className="space-y-3 pt-4 border-t border-[#1E2D45]">
          <label className="text-sm font-bold text-white font-display block">
            Investigation Task 2: What physical mechanism caused the candidate’s detection between Epoch 1 and Epoch 2?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'moving', label: 'High Proper Motion (Astrometric Displacement)', desc: 'The nearby brown dwarf physically moved across the sky relative to distant stars' },
              { id: 'flare', label: 'Stellar Superflare Dimming', desc: 'The star was undergoing massive explosive dimming' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setSelectedBehavior(opt.id);
                  questAudio.playClick();
                }}
                className={`p-3.5 rounded-xl border text-left transition ${
                  selectedBehavior === opt.id
                    ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold shadow-md'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#38BDF8]/50'
                }`}
              >
                <div className="text-xs font-bold text-white">{opt.label}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Final Investigation Report */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!selectedNature || !selectedBehavior || completed}
            className={`px-8 py-3.5 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center gap-2 mx-auto ${
              selectedNature && selectedBehavior && !completed
                ? 'bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#FDE047] text-[#080D18] shadow-lg shadow-[#F59E0B]/30 scale-105 font-extrabold'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>Submit Final Scientific Report</span>
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Notice that the brightness remains constant at 14.1 µJy across both epochs (no dimming or flaring), while its position shifted by 0.42 arcseconds! It is a moving cold brown dwarf like WISE 0855!
            </div>
          </div>
        )}
      </div>

      {/* Grand Completion & Certificate Award Banner */}
      {showFeedback && (
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all animate-in fade-in space-y-6 ${
            isCorrect
              ? 'bg-gradient-to-r from-[#0E1626] via-[#111C2E] to-[#0E1626] border-[#F59E0B] shadow-[0_0_50px_rgba(245,158,11,0.3)]'
              : 'bg-[#EF4444]/10 border-[#EF4444]/40'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B]">
                  <Award className="w-7 h-7" />
                </div>
              ) : (
                <AlertCircle className="w-8 h-8 text-[#EF4444]" />
              )}
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  {isCorrect
                    ? 'Congratulations! Certified Cosmic Scientist Rank Achieved!'
                    : 'Investigation Inconclusive. Check Findings.'}
                </h3>
                <p className="text-xs text-[#FBBF24] font-mono mt-0.5">
                  {isCorrect ? 'Tracking ID Issued: SKY-QUEST-2026-X12 • +350 XP Master Bonus' : 'Re-examine findings'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Scientific Verification:</strong> You successfully combined all core pillars of observational astronomy:
              Blinking chronological epochs, verifying constant flux with zero false variability, and recognizing the signature of a <strong>fast-moving sub-stellar brown dwarf</strong> traversing our solar neighborhood!
            </p>
            <p className="text-slate-400">
              You have completed all 12 Levels of <strong>COSMIC BRIGHTNESS QUEST</strong>. Your official credential has been generated and is ready to view and download.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
            {isCorrect && onOpenCertificate && (
              <button
                onClick={onOpenCertificate}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-2 shadow-lg shadow-[#F59E0B]/40 animate-pulse"
              >
                <Award className="w-4 h-4" />
                <span>Claim Official Cosmic Scientist Certificate</span>
              </button>
            )}

            <button
              onClick={onBackToMap}
              className="px-5 py-3 rounded-xl bg-[#111C2E] hover:bg-[#1E2D45] text-white font-medium text-xs font-mono transition"
            >
              Return to Level Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

