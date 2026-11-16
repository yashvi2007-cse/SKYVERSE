import React, { useState, useEffect } from 'react';
import {
  Telescope,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  Database,
  Layers,
  Calendar,
  CheckCircle2,
  Activity,
  Target,
  Disc,
  Globe,
  ChevronRight,
  ShieldCheck,
  Compass,
  Info,
  Rocket,
  Award,
  GraduationCap
} from 'lucide-react';
import { ChallengeTarget, ObservationsResponse } from '../../types/astronomy';
import { fetchChallengeTargets, fetchObservations } from '../../services/api';
import { ThreeSpherexTelescope } from '../../components/ThreeSpherexTelescope';

interface OverviewModuleProps {
  onNavigate: (module: string) => void;
  onSelectTarget: (target: ChallengeTarget) => void;
  currentCoords: { ra: number; dec: number; fov: number };
}

export const OverviewModule: React.FC<OverviewModuleProps> = ({
  onNavigate,
  onSelectTarget,
  currentCoords
}) => {
  const [targets, setTargets] = useState<ChallengeTarget[]>([]);
  const [obsSummary, setObsSummary] = useState<ObservationsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [targetsData, obsData] = await Promise.all([
          fetchChallengeTargets(),
          fetchObservations(currentCoords.ra, currentCoords.dec, currentCoords.fov)
        ]);
        setTargets(targetsData);
        setObsSummary(obsData);
      } catch (err) {
        console.error('Error loading overview data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [currentCoords.ra, currentCoords.dec, currentCoords.fov]);

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto pb-16">
      {/* ================= SECTION 1: MASTER 3D CINEMATIC HERO (GLASSMORPHIC IMMERSIVE VIEW) ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-[#050711]/45 backdrop-blur-md border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.7)] transition-all">
        {/* Subtle radial cosmic glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-10 px-6 py-4 md:px-8 border-b border-white/10 flex items-center justify-between flex-wrap gap-4 bg-[#050711]/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] p-0.5 shadow-md shadow-[#38BDF8]/20">
              <div className="w-full h-full bg-[#080D18] rounded-[6px] flex items-center justify-center">
                <Disc className="w-4 h-4 text-[#38BDF8]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-base font-mono text-white leading-tight">
                SKYVERSE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#38BDF8] uppercase">
                SPHEREx Sky Hunter
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs font-mono text-slate-300">
            <button onClick={() => onNavigate('overview')} className="text-white hover:text-[#38BDF8] transition">Overview</button>
            <button onClick={() => onNavigate('explorer')} className="hover:text-white transition">Features</button>
            <button onClick={() => onNavigate('targets')} className="hover:text-white transition">Challenge Targets</button>
            <button onClick={() => onNavigate('resources')} className="hover:text-white transition">Resources</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('targets')}
              className="px-3.5 py-1.5 rounded-xl bg-[#111C2E]/70 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-[#1E2D45] transition flex items-center gap-1.5"
            >
              <span>❖</span>
              <span>3D Showcase</span>
            </button>

            <button
              onClick={() => onNavigate('explorer')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white font-medium text-xs font-mono shadow-lg shadow-[#6366F1]/30 transition"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Body with Left Headline and Right 3D Rotating Telescope */}
        <div className="relative z-10 p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Explore the Changing{' '}
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#818CF8] bg-clip-text text-transparent">
                Universe.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-sans drop-shadow-md">
              Investigate real SPHEREx observations, compare the sky across time, and explore the 102-band infrared universe.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => onNavigate('learn-explore')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] hover:from-[#0284C7] hover:to-[#6366F1] text-white font-bold text-sm shadow-[0_0_24px_rgba(56,189,248,0.4)] transition transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4 text-[#FDE047]" />
                Learn & Explore
              </button>

              <button
                onClick={() => onNavigate('quest')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#A855F7]/30 to-[#EC4899]/30 hover:from-[#A855F7]/50 hover:to-[#EC4899]/50 text-white font-semibold text-sm border border-[#A855F7]/40 backdrop-blur-md transition shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                <Award className="w-4 h-4 text-[#FDE047]" />
                Cosmic Brightness Quest
              </button>

              <button
                onClick={() => onNavigate('explorer')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111C2E]/70 hover:bg-[#1E2D45] text-[#F1F5F9] font-medium text-sm border border-white/10 backdrop-blur-md transition"
              >
                Launch Sky Explorer <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('targets')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#111C2E]/70 hover:bg-[#1E2D45] text-[#F1F5F9] font-medium text-sm border border-white/10 backdrop-blur-md transition"
              >
                <Target className="w-4 h-4 text-[#A78BFA]" />
                Challenge Targets
              </button>
            </div>

            {/* 4 Scientific Resource Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B1324]/70 border border-white/10 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 text-xs">
                  🌌
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">SPHEREx</div>
                  <div className="text-[10px] text-slate-400 truncate">Infrared Sky Survey</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B1324]/70 border border-white/10 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-lg bg-[#818CF8]/15 border border-[#818CF8]/30 flex items-center justify-center text-[#818CF8] shrink-0 text-xs">
                  ✦
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">Gaia DR3</div>
                  <div className="text-[10px] text-slate-400 truncate">Astrometry</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B1324]/70 border border-white/10 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 text-xs">
                  ☄️
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">NEOSSat</div>
                  <div className="text-[10px] text-slate-400 truncate">Near-Earth Objects</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B1324]/70 border border-white/10 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0 text-xs">
                  🗄️
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">CADC</div>
                  <div className="text-[10px] text-slate-400 truncate">Astronomy Archive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Rotating WebGL SPHEREx Telescope (Remains at its position and keeps rotating) */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
            <ThreeSpherexTelescope className="w-full h-full" autoRotate={true} />
          </div>
        </div>

        {/* Bottom Landing Pill Indicator */}
        <div className="relative z-10 px-6 py-4 flex items-center justify-center border-t border-white/10 bg-[#060A14]/40">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111C2E]/70 border border-white/10 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-md">
            <Rocket className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Landing Page — Cinematic introduction, mission, SPHEREx, features & targets.</span>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: UNIVERSE IN MOTION DASHBOARD ================= */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#0E1626]/60 backdrop-blur-md border border-white/10 shadow-xl space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Universe in Motion</h2>
          <p className="text-xs text-slate-300 mt-1">
            A public platform to explore SPHEREx data and discover changing objects in the infrared sky.
          </p>
        </div>

        {/* 5 Status Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 font-mono">
          <div className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#6C8CFF]/15 border border-[#6C8CFF]/30 flex items-center justify-center text-[#6C8CFF] shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Observations</div>
              <div className="text-xl font-bold text-white mt-0.5">{obsSummary?.total_records || 12}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#49D7E8]/15 border border-[#49D7E8]/30 flex items-center justify-center text-[#49D7E8] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Epochs</div>
              <div className="text-xl font-bold text-[#49D7E8] mt-0.5">{obsSummary?.epochs_count || 4}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#A78BFA]/15 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Spectral Channels</div>
              <div className="text-xl font-bold text-[#A78BFA] mt-0.5">102</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Field of View</div>
              <div className="text-xl font-bold text-white mt-0.5">{currentCoords.fov}°</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 flex items-center gap-3.5 shadow-md col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Data Quality</div>
              <div className="text-xl font-bold text-[#10B981] mt-0.5">Good</div>
            </div>
          </div>
        </div>

        {/* Challenge Targets Shelf */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-[#6C8CFF]" />
              Challenge Targets
            </h3>
            <button
              onClick={() => onNavigate('targets')}
              className="text-xs font-mono text-[#6C8CFF] hover:text-[#49D7E8] transition flex items-center gap-1"
            >
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 5 Graphical Target Cards with Celestial Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {targets.map((tgt) => {
              let sphereGradient = "from-[#EF4444] to-[#7F1D1D]";
              let glowColor = "rgba(239,68,68,0.4)";
              if (tgt.id === "barnards_star") {
                sphereGradient = "from-[#F97316] via-[#DC2626] to-[#7F1D1D]";
                glowColor = "rgba(249,115,22,0.4)";
              } else if (tgt.id === "epsilon_indi_b") {
                sphereGradient = "from-[#FB923C] via-[#9A3412] to-[#451A03]";
                glowColor = "rgba(251,146,60,0.35)";
              } else if (tgt.id === "wise_0855") {
                sphereGradient = "from-[#C084FC] via-[#7E22CE] to-[#3B0764]";
                glowColor = "rgba(192,132,252,0.4)";
              } else if (tgt.id === "rw_aurigae") {
                sphereGradient = "from-[#FDE047] via-[#D97706] to-[#78350F]";
                glowColor = "rgba(253,224,71,0.35)";
              } else if (tgt.id === "r_draconis") {
                sphereGradient = "from-[#F43F5E] via-[#BE123C] to-[#4C0519]";
                glowColor = "rgba(244,63,94,0.45)";
              }

              return (
                <div
                  key={tgt.id}
                  onClick={() => {
                    onSelectTarget(tgt);
                    onNavigate('targets');
                  }}
                  className="p-4 rounded-2xl bg-[#111C2E]/70 backdrop-blur-sm border border-white/10 hover:border-[#6C8CFF]/60 hover:bg-[#16243B]/80 transition-all cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-3">
                    {/* Visual Celestial Sphere Thumbnail */}
                    <div className="relative w-full h-24 rounded-xl bg-[#080D18]/80 border border-white/10 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(#1E2D45_1px,transparent_1px)] [background-size:10px_10px] opacity-40" />

                      {/* Glowing Planetary / Stellar Sphere */}
                      <div
                        className={`relative w-14 h-14 rounded-full bg-gradient-to-tr ${sphereGradient} shadow-[0_0_20px] transition-transform group-hover:scale-110 duration-300`}
                        style={{ boxShadow: `0 0 24px ${glowColor}` }}
                      >
                        <div className="absolute inset-0 rounded-full opacity-35 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
                        {tgt.id === 'rw_aurigae' && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 border border-[#FDE047]/60 rounded-[100%] rotate-[-25deg] shadow-[0_0_8px_#FDE047]" />
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#6C8CFF] transition truncate">
                        {tgt.name}
                      </div>
                      <div className="text-[11px] text-slate-300 font-mono mt-0.5 flex items-center justify-between">
                        <span className="truncate">{tgt.category.split(' ')[0]} {tgt.category.split(' ')[1]}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#6C8CFF] shrink-0 group-hover:translate-x-0.5 transition" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: DIRECT SCIENTIFIC PATHWAYS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => onNavigate('explorer')}
          className="p-6 rounded-3xl bg-[#0E1626]/60 backdrop-blur-md border border-white/10 hover:border-[#49D7E8]/50 transition cursor-pointer shadow-xl group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#49D7E8]/10 border border-[#49D7E8]/30 flex items-center justify-center text-[#49D7E8] group-hover:scale-105 transition">
            <Telescope className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-[#49D7E8] transition">
              Sky Explorer
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Explore authentic SPHEREx FITS cutouts across all 6 detector arrays with sub-arcsecond WCS registration.
            </p>
          </div>
          <div className="pt-2 flex items-center text-xs font-mono text-[#49D7E8] gap-1 group-hover:translate-x-1 transition">
            Launch Explorer <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('time-machine')}
          className="p-6 rounded-3xl bg-[#0E1626]/60 backdrop-blur-md border border-white/10 hover:border-[#6C8CFF]/50 transition cursor-pointer shadow-xl group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 flex items-center justify-center text-[#6C8CFF] group-hover:scale-105 transition">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-[#6C8CFF] transition">
              Cosmic Time Machine
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Blink chronological epochs, compute difference images, and detect kinematic dipoles of moving brown dwarfs.
            </p>
          </div>
          <div className="pt-2 flex items-center text-xs font-mono text-[#6C8CFF] gap-1 group-hover:translate-x-1 transition">
            Compare Epochs <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('spectral')}
          className="p-6 rounded-3xl bg-[#0E1626]/60 backdrop-blur-md border border-white/10 hover:border-[#A78BFA]/50 transition cursor-pointer shadow-xl group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA] group-hover:scale-105 transition">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition">
              Spectral Intelligence
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Extract 102 near-infrared spectral channels across 0.75 – 5.00 µm to analyze water ice, CO₂, and methane bands.
            </p>
          </div>
          <div className="pt-2 flex items-center text-xs font-mono text-[#A78BFA] gap-1 group-hover:translate-x-1 transition">
            Inspect Spectra <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Archive Provenance */}
      <div className="p-4 rounded-2xl bg-[#111C2E]/60 backdrop-blur-sm border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span className="text-white font-medium">Archive Provenance:</span>
          <span>NASA/IPAC Infrared Science Archive (IRSA) & ESA Gaia DR3</span>
        </div>
        <div className="text-[#49D7E8]">
          SPHEREx DR1 Calibration: v27-2026 • 102 Channels Operational
        </div>
      </div>
    </div>
  );
};
