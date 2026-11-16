import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, Play, Pause, Clock, Activity } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level7VariableStarWatch: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[6];

  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Animation state
  const [simTime, setSimTime] = useState(0); // in simulated days
  const periodDays = 5.0; // simulated 5.0 day period

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSimTime((prev) => prev + 0.08 * speed);
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  // Sine wave brightness pulsation: flux oscillating between 0.4 and 1.0
  const phase = (simTime % periodDays) / periodDays;
  const currentFlux = 0.7 + 0.3 * Math.sin(phase * Math.PI * 2);
  const starRadius = 14 + 12 * currentFlux;

  const handleSubmit = () => {
    if (!selectedType || selectedPeriod === null) return;
    const typeCorrect = selectedType === 'cepheid';
    const periodCorrect = selectedPeriod === 5;
    const allCorrect = typeCorrect && periodCorrect;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 200 : 175;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedType(null);
    setSelectedPeriod(null);
    setShowFeedback(false);
  };

  // Generate light curve points for the last 15 days
  const points: { t: number; f: number }[] = [];
  for (let t = Math.max(0, simTime - 12); t <= simTime; t += 0.3) {
    const p = (t % periodDays) / periodDays;
    points.push({ t, f: 0.7 + 0.3 * Math.sin(p * Math.PI * 2) });
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
            Stage 3 • Level 07
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

      {/* Real-time Time-Domain Simulator */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-[#1E2D45] pb-4">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              Target ID: V-402 Pulsating System
            </h3>
            <p className="text-xs text-[#94A3B8] font-mono">
              Observation Time: Day {simTime.toFixed(1)} • Current Relative Flux: {(currentFlux * 100).toFixed(1)}%
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-white hover:bg-[#1E2D45] transition"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSpeed(speed === 1 ? 2 : speed === 2 ? 4 : 1)}
              className="px-3 py-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-slate-300 hover:text-white transition"
            >
              {speed}× Speed
            </button>
          </div>
        </div>

        {/* Visual Dual Display: Pulsating Star + Realtime Light Curve Graph */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Animated Pulsating Star */}
          <div className="md:col-span-5 h-56 rounded-2xl bg-[#080D18] border border-[#1E2D45] flex flex-col items-center justify-center relative overflow-hidden">
            <div
              className="rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-white transition-all duration-100"
              style={{
                width: `${starRadius * 2}px`,
                height: `${starRadius * 2}px`,
                boxShadow: `0 0 ${starRadius * 1.8}px rgba(251, 191, 36, ${currentFlux})`
              }}
            />
            <div className="absolute bottom-2 text-[10px] font-mono text-slate-400">
              Radial Expansion & Temperature Modulation
            </div>
          </div>

          {/* Real-time Scrolling Light Curve SVG Graph */}
          <div className="md:col-span-7 h-56 rounded-2xl bg-[#080D18] border border-[#1E2D45] p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2">
              <span>Light Curve (Flux vs. Time)</span>
              <span>Amplitude ΔF ≈ 0.6</span>
            </div>

            <div className="flex-1 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                {/* Horizontal reference grid lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="#1E2D45" strokeDasharray="3,3" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="#1E2D45" strokeDasharray="3,3" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="#1E2D45" strokeDasharray="3,3" />

                {/* Plot points & curve */}
                {points.length > 1 && (
                  <path
                    d={points
                      .map((p, idx) => {
                        const x = ((p.t - (simTime - 12)) / 12) * 300;
                        const y = 110 - (p.f - 0.4) * 160;
                        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                  />
                )}

                {/* Current Time Indicator Point */}
                <circle cx="300" cy={110 - (currentFlux - 0.4) * 160} r="4" fill="#FBBF24" />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-500 px-2">
              <span>Day {(simTime - 12).toFixed(1)}</span>
              <span>Day {simTime.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Task 1: Measure the period */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-white font-display block">
            Measurement 1: Measure the time elapsed from one brightness peak to the next consecutive peak. What is the pulsation period?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
            {[2, 3.5, 5, 8.5].map((p) => (
              <button
                key={p}
                onClick={() => {
                  setSelectedPeriod(p);
                  questAudio.playClick();
                }}
                className={`p-3 rounded-xl border text-xs font-mono text-center transition ${
                  selectedPeriod === p
                    ? 'bg-[#A78BFA]/20 border-[#A78BFA] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#A78BFA]/50'
                }`}
              >
                {p} Days
              </button>
            ))}
          </div>
        </div>

        {/* Task 2: Classify the variable type */}
        <div className="space-y-3 pt-4 border-t border-[#1E2D45]">
          <label className="text-sm font-bold text-white font-display block">
            Classification 2: Based on its smooth periodic radial expansion and light curve signature, what type of variable star is this?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {[
              { id: 'cepheid', name: 'Pulsating Variable (Cepheid-Type)', desc: 'Smooth periodic radial expansion and contraction' },
              { id: 'eclipsing', name: 'Eclipsing Binary System', desc: 'Sudden flat-bottomed drops when companion passes in front' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedType(t.id);
                  questAudio.playClick();
                }}
                className={`p-3.5 rounded-xl border text-left transition ${
                  selectedType === t.id
                    ? 'bg-[#A78BFA]/20 border-[#A78BFA] text-white font-bold'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#A78BFA]/50'
                }`}
              >
                <div className="text-xs font-bold text-white">{t.name}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!selectedType || selectedPeriod === null || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              selectedType && selectedPeriod !== null && !completed
                ? 'bg-[#A78BFA] hover:bg-[#8B5CF6] text-[#080D18] shadow-lg shadow-[#A78BFA]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Submit Variable Star Classification
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Watch the peak of the light curve. Notice that the star reaches peak brightness at Day 0, Day 5, Day 10, Day 15... The period is 5 days!
            </div>
          </div>
        )}
      </div>

      {/* Feedback Panel */}
      {showFeedback && (
        <div
          className={`p-6 rounded-3xl border transition-all animate-in fade-in space-y-4 ${
            isCorrect
              ? 'bg-[#10B981]/10 border-[#10B981]/40 shadow-xl'
              : 'bg-[#EF4444]/10 border-[#EF4444]/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              ) : (
                <AlertCircle className="w-6 h-6 text-[#EF4444]" />
              )}
              <h3 className="text-base font-bold text-white font-display">
                {isCorrect ? 'Accurate Measurement! 5.0 Day Cepheid Identified.' : 'Check Period Readings and Try Again.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+200 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Pulsation Physics:</strong> This star undergoes the <em>kappa-mechanism</em> (valve effect): helium in the outer envelope ionizes at peak compression, becoming opaque and trapping heat. The pressure forces the star to expand, cool down, and become transparent again every <strong>5.0 days</strong>!
            </p>
            <p className="text-slate-400">
              Because Cepheid variable periods are directly linked to their true intrinsic luminosity (Leavitt’s Law), measuring this 5-day cycle immediately informs astronomers of the star's exact distance!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 8 (Build Light Curve)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 rounded-xl bg-[#1E2D45] hover:bg-[#2A3F60] text-white font-medium text-xs font-mono transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

