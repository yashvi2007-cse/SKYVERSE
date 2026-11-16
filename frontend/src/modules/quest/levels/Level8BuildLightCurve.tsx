import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, Clock, Activity } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

interface EpochData {
  epochIndex: number;
  dateStr: string;
  measuredFlux: number; // 0 to 1
  fitted: boolean;
}

export const Level8BuildLightCurve: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[7];

  const rawEpochs: EpochData[] = [
    { epochIndex: 1, dateStr: 'Epoch 1 (MJD 60120)', measuredFlux: 0.95, fitted: false },
    { epochIndex: 2, dateStr: 'Epoch 2 (MJD 60180)', measuredFlux: 0.45, fitted: false },
    { epochIndex: 3, dateStr: 'Epoch 3 (MJD 60240)', measuredFlux: 0.85, fitted: false },
    { epochIndex: 4, dateStr: 'Epoch 4 (MJD 60300)', measuredFlux: 0.38, fitted: false },
    { epochIndex: 5, dateStr: 'Epoch 5 (MJD 60360)', measuredFlux: 0.92, fitted: false }
  ];

  const [epochs, setEpochs] = useState<EpochData[]>(rawEpochs);
  const [selectedEpoch, setSelectedEpoch] = useState<number | null>(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Mark an epoch as plotted on the graph
  const handlePlotEpoch = (idx: number) => {
    const updated = epochs.map((e) => (e.epochIndex === idx ? { ...e, fitted: true } : e));
    setEpochs(updated);
    questAudio.playClick();

    // Advance to next unplotted
    const nextUnplotted = updated.find((e) => !e.fitted);
    if (nextUnplotted) {
      setSelectedEpoch(nextUnplotted.epochIndex);
    }
  };

  const allPlotted = epochs.every((e) => e.fitted);

  const handleVerify = () => {
    if (!allPlotted) return;
    setIsCorrect(true);
    setShowFeedback(true);
    questAudio.playSuccess();
    setCompleted(true);
    const stars = hintsUsed === 0 ? 3 : 2;
    const xp = hintsUsed === 0 ? 225 : 200;
    onComplete(xp, stars);
  };

  const handleReset = () => {
    setEpochs(rawEpochs);
    setSelectedEpoch(1);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
            Stage 3 • Level 08
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

      {/* Main Interactive Light Curve Builder */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Reconstruct the Multi-Epoch Light Curve
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Click each observation epoch to measure its flux and plot it onto the time-series light curve graph.
          </p>
        </div>

        {/* 5 Observation Epoch Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
          {epochs.map((ep) => (
            <div
              key={ep.epochIndex}
              onClick={() => {
                if (!ep.fitted) handlePlotEpoch(ep.epochIndex);
              }}
              className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-between space-y-2 ${
                ep.fitted
                  ? 'bg-[#10B981]/15 border-[#10B981]/40 text-[#10B981]'
                  : selectedEpoch === ep.epochIndex
                  ? 'bg-[#111C2E] border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.3)] text-white'
                  : 'bg-[#111C2E]/60 border-[#1E2D45] text-slate-400 hover:border-[#38BDF8]/40'
              }`}
            >
              <div className="text-xs font-mono font-bold">Epoch {ep.epochIndex}</div>

              {/* Mini visual aperture ring */}
              <div className="w-10 h-10 rounded-full bg-[#080D18] border border-[#1E2D45] flex items-center justify-center relative">
                <div
                  className="rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                  style={{
                    width: `${ep.measuredFlux * 18}px`,
                    height: `${ep.measuredFlux * 18}px`
                  }}
                />
              </div>

              <div className="text-[10px] font-mono">
                {ep.fitted ? '✓ Plotted' : 'Click to Plot'}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Coordinate Light Curve Graph */}
        <div className="rounded-2xl bg-[#080D18] border border-[#1E2D45] p-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Y: Relative Normalized Flux (0.0 to 1.0)</span>
            <span>X: Observation Epoch (MJD)</span>
          </div>

          <div className="h-64 w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
              {/* Grid axes */}
              <line x1="40" y1="20" x2="40" y2="180" stroke="#1E2D45" strokeWidth="2" />
              <line x1="40" y1="180" x2="480" y2="180" stroke="#1E2D45" strokeWidth="2" />

              {/* Grid horizontal ticks */}
              <line x1="35" y1="40" x2="480" y2="40" stroke="#1E2D45" strokeDasharray="3,3" />
              <line x1="35" y1="100" x2="480" y2="100" stroke="#1E2D45" strokeDasharray="3,3" />
              <line x1="35" y1="160" x2="480" y2="160" stroke="#1E2D45" strokeDasharray="3,3" />

              <text x="10" y="45" fill="#64748B" fontSize="10" fontFamily="monospace">1.0</text>
              <text x="10" y="105" fill="#64748B" fontSize="10" fontFamily="monospace">0.5</text>
              <text x="10" y="165" fill="#64748B" fontSize="10" fontFamily="monospace">0.0</text>

              {/* Fitted Spline Curve (rendered once at least 2 points plotted) */}
              {epochs.filter((e) => e.fitted).length > 1 && (
                <path
                  d={epochs
                    .filter((e) => e.fitted)
                    .map((e, i) => {
                      const x = 70 + (e.epochIndex - 1) * 95;
                      const y = 170 - e.measuredFlux * 130;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  className="animate-in fade-in"
                />
              )}

              {/* Plotted Points */}
              {epochs.map((e) => {
                const x = 70 + (e.epochIndex - 1) * 95;
                const y = 170 - e.measuredFlux * 130;

                if (!e.fitted) return null;

                return (
                  <g key={e.epochIndex} className="animate-in zoom-in-50">
                    <circle cx={x} cy={y} r="6" fill="#FBBF24" stroke="#080D18" strokeWidth="2" />
                    <text x={x - 12} y={y - 12} fill="#FBBF24" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      {e.measuredFlux.toFixed(2)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex justify-between text-xs font-mono text-slate-500 px-6">
            <span>MJD 60120</span>
            <span>MJD 60180</span>
            <span>MJD 60240</span>
            <span>MJD 60300</span>
            <span>MJD 60360</span>
          </div>
        </div>

        {/* Verification Action */}
        <div className="text-center pt-2">
          <button
            onClick={handleVerify}
            disabled={!allPlotted || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              allPlotted && !completed
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#080D18] shadow-lg shadow-[#38BDF8]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            {allPlotted ? 'Validate Light Curve Reconstruction' : `Plot all 5 epochs (${epochs.filter(e => e.fitted).length}/5 plotted)`}
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Click on each of the 5 Epoch cards at the top. The telescope photometer will extract the brightness and plot the coordinate point automatically.
            </div>
          </div>
        )}
      </div>

      {/* Feedback Panel */}
      {showFeedback && (
        <div className="p-6 rounded-3xl bg-[#10B981]/10 border border-[#10B981]/40 shadow-xl space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              <h3 className="text-base font-bold text-white font-display">
                Light Curve Verified! Time-Series Photometry Mastered.
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">+225 XP Earned</span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Scientific Data Visualization:</strong> By connecting discrete multi-epoch observations across 240 days, you revealed an undulating periodic variability cycle with an amplitude of $\Delta F \approx 0.57$.
            </p>
            <p className="text-slate-400">
              This exact workflow powers the <strong>Cosmic Time Machine</strong> in SKYVERSE. Survey satellites map the sky in repeated passes, compiling epochs into light curves to flag new astronomical variables and transiting objects.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={onNextLevel}
              className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
            >
              <span>Advance to Level 9 (Star or Planet)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

