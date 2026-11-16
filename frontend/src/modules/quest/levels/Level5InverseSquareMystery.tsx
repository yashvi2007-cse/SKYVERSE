import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, Compass, Activity } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level5InverseSquareMystery: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[4];

  const [distance, setDistance] = useState<number>(1.0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Calculate live inverse-square flux: F = 1 / d^2
  const observedFlux = 1 / (distance * distance);
  const fluxPercent = (observedFlux * 100).toFixed(1);
  const starDisplayRadius = Math.max(6, Math.min(32, 28 * Math.sqrt(observedFlux)));

  const options = [
    { id: 'opt1', label: '1/3 of original flux (33.3%)', correct: false },
    { id: 'opt2', label: '1/6 of original flux (16.7%)', correct: false },
    { id: 'opt3', label: '1/9 of original flux (11.1%)', correct: true },
    { id: 'opt4', label: '1/27 of original flux (3.7%)', correct: false }
  ];

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer === 'opt3';
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 175 : 150;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
            Stage 2 • Level 05
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

      {/* Interactive Physics Simulation Lab */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="p-5 rounded-2xl bg-[#111C2E]/60 border border-[#1E2D45] space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#1E2D45] pb-3">
            <span className="text-xs font-mono text-[#818CF8] font-bold">
              PHYSICS LAB: Inverse-Square Wavefront Dilution
            </span>
            <span className="text-xs font-mono text-[#FBBF24]">
              Formula: F = L / (4πd²)
            </span>
          </div>

          {/* Interactive Distance Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-white">
              <span>Observer Distance (d): <strong className="text-[#38BDF8]">{distance.toFixed(1)} AU</strong></span>
              <span>Observed Flux (F): <strong className="text-[#FBBF24]">{fluxPercent}%</strong> (1 / { (distance * distance).toFixed(2) })</span>
            </div>

            <input
              type="range"
              min="1.0"
              max="5.0"
              step="0.5"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />

            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>d = 1.0 (F = 100%)</span>
              <span>d = 2.0 (F = 25%)</span>
              <span>d = 3.0 (F = 11.1%)</span>
              <span>d = 4.0 (F = 6.25%)</span>
              <span>d = 5.0 (F = 4.0%)</span>
            </div>
          </div>

          {/* Graphical Wavefront Representation */}
          <div className="relative h-44 rounded-2xl bg-[#080D18] border border-[#1E2D45] overflow-hidden flex items-center justify-between px-6 sm:px-12">
            {/* The Star Source at Left */}
            <div className="relative flex flex-col items-center z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-100 shadow-[0_0_30px_#f59e0b] animate-pulse" />
              <span className="text-[10px] font-mono text-amber-300 mt-2 font-bold">Star (L = 1.0 L_☉)</span>
            </div>

            {/* Concentric Spherical Wavefront Lines */}
            <div className="absolute left-10 inset-y-0 flex items-center pointer-events-none">
              <div className="w-40 h-40 rounded-full border border-sky-400/20" />
              <div className="absolute w-80 h-80 rounded-full border border-sky-400/15" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-sky-400/10" />
            </div>

            {/* The Telescope Detector at Distance d */}
            <div className="relative flex flex-col items-center z-10 transition-all duration-300">
              <div
                className="rounded-full bg-white transition-all shadow-[0_0_20px_#ffffff]"
                style={{
                  width: `${starDisplayRadius}px`,
                  height: `${starDisplayRadius}px`,
                  boxShadow: `0 0 ${starDisplayRadius * 1.5}px rgba(56, 189, 248, 0.8)`
                }}
              />
              <span className="text-[10px] font-mono text-[#38BDF8] mt-2">
                Telescope Sensor (d = {distance.toFixed(1)})
              </span>
            </div>
          </div>
        </div>

        {/* Challenge Question */}
        <div className="space-y-4 pt-2">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-display">
              Scientific Challenge Question:
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              If an astronomical space telescope travels from an initial distance of <strong className="text-white">d = 1 AU</strong> to a new distance of <strong className="text-white">d = 3 AU</strong> away from a stellar source, what fraction of the original radiant flux will its detector aperture receive?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setSelectedAnswer(opt.id);
                  questAudio.playClick();
                }}
                className={`p-3.5 rounded-xl border text-xs font-mono text-left transition ${
                  selectedAnswer === opt.id
                    ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold shadow-md'
                    : 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#38BDF8]/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              selectedAnswer && !completed
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] shadow-lg shadow-[#38BDF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Verify Inverse-Square Law
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Look closely at the formula F = L / (4πd²). When distance d is multiplied by 3, the denominator is multiplied by 3² = 9. So the flux is 1/9!
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
                {isCorrect ? 'Correct! Inverse-Square Law Validated.' : 'Incorrect Calculation.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+175 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Geometric Dilution Explained:</strong> Radiation emitted in 3D space spreads across spherical wavefronts with surface area A = 4πd². When distance triples from 1 AU to 3 AU, that same packet of photons spreads across an area 3² = 9 times larger!
            </p>
            <p className="text-slate-400">
              Therefore, our detector collects exactly <strong>1/9 (~11.11%)</strong> of the photon density. This fundamental law allows astronomers to estimate cosmic distances whenever an object’s true luminosity is known.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Level 6 (Luminosity Lab)</span>
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
