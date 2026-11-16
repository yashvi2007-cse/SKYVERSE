import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, RotateCcw, Lightbulb, Compass, Orbit } from 'lucide-react';
import { questAudio } from '../audio';
import { QUEST_LEVELS } from '../questData';

interface LevelProps {
  onComplete: (xp: number, stars: number) => void;
  onNextLevel: () => void;
  onBackToMap: () => void;
  onNavigateModule?: (mod: string) => void;
}

export const Level9StarOrPlanet: React.FC<LevelProps> = ({
  onComplete,
  onNextLevel,
  onBackToMap
}) => {
  const levelDef = QUEST_LEVELS[8];

  const [activeTab, setActiveTab] = useState<'fusion' | 'twinkle' | 'motion'>('fusion');
  const [targetAClass, setTargetAClass] = useState<'star' | 'planet' | null>(null);
  const [targetBClass, setTargetBClass] = useState<'star' | 'planet' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Target A is a Star (Internal fusion, points twinkle, stationary background)
  // Target B is a Planet (Reflected starlight, steady disc, rapid orbital motion)

  const handleSubmit = () => {
    if (!targetAClass || !targetBClass) return;
    const aCorrect = targetAClass === 'star';
    const bCorrect = targetBClass === 'planet';
    const allCorrect = aCorrect && bCorrect;

    setIsCorrect(allCorrect);
    setShowFeedback(true);

    if (allCorrect) {
      questAudio.playSuccess();
      setCompleted(true);
      const stars = hintsUsed === 0 ? 3 : 2;
      const xp = hintsUsed === 0 ? 225 : 200;
      onComplete(xp, stars);
    } else {
      questAudio.playError();
    }
  };

  const handleRetry = () => {
    setTargetAClass(null);
    setTargetBClass(null);
    setShowFeedback(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45]">
        <div>
          <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
            Stage 3 • Level 09
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

      {/* Main Analysis Workbench */}
      <div className="rounded-3xl bg-[#060A14] border border-[#1E2D45] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-white font-display">
            Astrometric Classification Lab
          </h3>
          <p className="text-xs text-[#94A3B8] font-mono mt-1">
            Two mysterious luminous targets were detected. Switch between analysis tools to classify each body.
          </p>
        </div>

        {/* 3 Analysis Diagnostic Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-[#1E2D45] pb-4">
          <button
            onClick={() => setActiveTab('fusion')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition ${
              activeTab === 'fusion'
                ? 'bg-[#A78BFA] text-[#080D18] font-bold shadow-md'
                : 'bg-[#111C2E] text-slate-300 hover:text-white'
            }`}
          >
            1. Energy Source (Spectroscopy)
          </button>
          <button
            onClick={() => setActiveTab('twinkle')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition ${
              activeTab === 'twinkle'
                ? 'bg-[#A78BFA] text-[#080D18] font-bold shadow-md'
                : 'bg-[#111C2E] text-slate-300 hover:text-white'
            }`}
          >
            2. Scintillation / Twinkle Test
          </button>
          <button
            onClick={() => setActiveTab('motion')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition ${
              activeTab === 'motion'
                ? 'bg-[#A78BFA] text-[#080D18] font-bold shadow-md'
                : 'bg-[#111C2E] text-slate-300 hover:text-white'
            }`}
          >
            3. Orbital Motion Test
          </button>
        </div>

        {/* Diagnostic Readings for Targets A and B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Alpha */}
          <div className="p-5 rounded-2xl bg-[#111C2E] border border-[#1E2D45] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#38BDF8] font-bold">Unknown Body Alpha</span>
              <span className="text-[10px] font-mono text-slate-400">Object #A-901</span>
            </div>

            {/* Diagnostic Content */}
            <div className="p-4 rounded-xl bg-[#080D18] border border-[#1E2D45] min-h-[110px] flex flex-col justify-center text-xs font-mono space-y-1.5">
              {activeTab === 'fusion' && (
                <>
                  <div className="text-amber-300 font-bold">Radiation Source: Self-Luminous Plasma</div>
                  <div className="text-slate-400">Continuous blackbody emission matching core thermonuclear proton-proton chain fusion.</div>
                </>
              )}
              {activeTab === 'twinkle' && (
                <>
                  <div className="text-cyan-300 font-bold">Optical Size: Unresolvable Point Source</div>
                  <div className="text-slate-400">Angular diameter &lt; 0.001". Light undergoes strong rapid atmospheric twinkling.</div>
                </>
              )}
              {activeTab === 'motion' && (
                <>
                  <div className="text-purple-300 font-bold">Kinematic Drift: Quasi-Stationary</div>
                  <div className="text-slate-400">Follows standard celestial diurnal rotation; zero rapid planetary Keplerian motion.</div>
                </>
              )}
            </div>

            {/* Classification Selector */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <span className="text-xs font-mono text-slate-300">Classification:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTargetAClass('star')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    targetAClass === 'star'
                      ? 'bg-[#10B981] text-[#080D18] font-bold'
                      : 'bg-[#080D18] text-slate-300 hover:text-white border border-[#1E2D45]'
                  }`}
                >
                  Star
                </button>
                <button
                  onClick={() => setTargetAClass('planet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    targetAClass === 'planet'
                      ? 'bg-[#F59E0B] text-[#080D18] font-bold'
                      : 'bg-[#080D18] text-slate-300 hover:text-white border border-[#1E2D45]'
                  }`}
                >
                  Planet
                </button>
              </div>
            </div>
          </div>

          {/* Target Beta */}
          <div className="p-5 rounded-2xl bg-[#111C2E] border border-[#1E2D45] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#F59E0B] font-bold">Unknown Body Beta</span>
              <span className="text-[10px] font-mono text-slate-400">Object #B-404</span>
            </div>

            {/* Diagnostic Content */}
            <div className="p-4 rounded-xl bg-[#080D18] border border-[#1E2D45] min-h-[110px] flex flex-col justify-center text-xs font-mono space-y-1.5">
              {activeTab === 'fusion' && (
                <>
                  <div className="text-amber-300 font-bold">Radiation Source: Reflected Solar Albedo</div>
                  <div className="text-slate-400">Spectrum shows reflected G2V solar absorption lines; zero internal fusion detected.</div>
                </>
              )}
              {activeTab === 'twinkle' && (
                <>
                  <div className="text-cyan-300 font-bold">Optical Size: Resolvable Extended Disc</div>
                  <div className="text-slate-400">Angular diameter ~18.2 arcsec. Disc averages through atmospheric turbulence: steady light.</div>
                </>
              )}
              {activeTab === 'motion' && (
                <>
                  <div className="text-purple-300 font-bold">Kinematic Drift: Rapid Keplerian Orbit</div>
                  <div className="text-slate-400">Shifts 0.4° per day relative to fixed background constellations (Wanderer).</div>
                </>
              )}
            </div>

            {/* Classification Selector */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <span className="text-xs font-mono text-slate-300">Classification:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTargetBClass('star')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    targetBClass === 'star'
                      ? 'bg-[#10B981] text-[#080D18] font-bold'
                      : 'bg-[#080D18] text-slate-300 hover:text-white border border-[#1E2D45]'
                  }`}
                >
                  Star
                </button>
                <button
                  onClick={() => setTargetBClass('planet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    targetBClass === 'planet'
                      ? 'bg-[#F59E0B] text-[#080D18] font-bold'
                      : 'bg-[#080D18] text-slate-300 hover:text-white border border-[#1E2D45]'
                  }`}
                >
                  Planet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            disabled={!targetAClass || !targetBClass || completed}
            className={`px-8 py-3 rounded-xl font-mono text-xs font-bold transition ${
              targetAClass && targetBClass && !completed
                ? 'bg-[#A78BFA] hover:bg-[#8B5CF6] text-[#080D18] shadow-lg shadow-[#A78BFA]/30 scale-105'
                : 'bg-[#111C2E] text-slate-500 border border-[#1E2D45] cursor-not-allowed'
            }`}
          >
            Submit Classifications
          </button>
        </div>

        {showHint && (
          <div className="p-4 rounded-2xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs text-[#FBBF24] font-mono flex items-start gap-2.5 max-w-md mx-auto">
            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Astronomer's Hint: </strong>
              Stars are self-luminous through nuclear fusion. Planets shine by reflecting starlight, resolve into extended discs (meaning they don't twinkle), and "wander" quickly across the celestial sphere.
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
                {isCorrect ? 'Stage 3 Mastered! Star and Planet Correctly Classified.' : 'Classification Error Detected.'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FBBF24] font-bold">
              {isCorrect ? '+225 XP Earned' : '0 XP'}
            </span>
          </div>

          <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
            <p>
              <strong>Astrophysical Verdict:</strong> Target Alpha is indeed a genuine <strong>Star</strong> generating continuous nuclear energy, while Target Beta is a <strong>Planet</strong> shining strictly via reflected solar starlight!
            </p>
            <p className="text-slate-400">
              The Greek word <em>planētes</em> literally means "wanderers" because planets drift rapidly across the background constellations of fixed stars. In Level 10, we will enter the final Stage: <strong>Cosmic Scientist</strong>!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {isCorrect ? (
              <button
                onClick={onNextLevel}
                className="px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition flex items-center gap-1.5 shadow-md shadow-[#10B981]/30"
              >
                <span>Advance to Stage 4 (Infrared Vision)</span>
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

