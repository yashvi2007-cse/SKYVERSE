import React, { useRef } from 'react';
import { Award, X, Download, Printer, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { QuestPlayerState } from '../../../types/quest';

interface CosmicCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerState: QuestPlayerState;
}

export const CosmicCertificateModal: React.FC<CosmicCertificateModalProps> = ({
  isOpen,
  onClose,
  playerState
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const completedCount = Object.keys(playerState.completedLevels).length;
  const totalStars = Object.values(playerState.completedLevels).reduce((acc, curr) => acc + curr.stars, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-[#080D18] border border-[#F59E0B]/50 rounded-3xl shadow-[0_0_80px_rgba(245,158,11,0.25)] p-6 sm:p-8 flex flex-col space-y-6 max-h-[95vh] overflow-y-auto">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-[#1E2D45] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <Sparkles className="w-4 h-4" />
            <span>ACCREDITED SKYVERSE CITIZEN SCIENCE CERTIFICATE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-slate-300 hover:text-white hover:bg-[#1E2D45] transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#1E2D45] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Body */}
        <div
          ref={certificateRef}
          className="relative rounded-2xl bg-gradient-to-b from-[#0E1626] to-[#0A101C] border-4 border-double border-[#F59E0B]/60 p-8 sm:p-12 text-center space-y-6 shadow-inner overflow-hidden"
        >
          {/* Subtle watermark background */}
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Seal / Emblem */}
          <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FBBF24] to-[#FDE047] p-1 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
            <div className="w-full h-full rounded-full bg-[#080D18] flex items-center justify-center text-[#F59E0B]">
              <Award className="w-10 h-10" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#F59E0B] font-bold">
              SKYVERSE ASTROPHYSICAL OBSERVATORY
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Certificate of Cosmic Mastery
            </h1>
            <p className="text-xs text-[#94A3B8] font-mono">
              Issued under the SPHEREx & Time-Domain Education Curriculum
            </p>
          </div>

          <div className="py-2">
            <p className="text-xs text-slate-400 italic">This official credential certifies that</p>
            <div className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] font-sans tracking-wide mt-1 pb-1 border-b border-[#F59E0B]/30 inline-block px-8">
              {playerState.playerName || 'Cadet Astronomer'}
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto leading-relaxed">
              has demonstrated exemplary mastery of apparent stellar flux, Pogson’s logarithmic magnitude scale, the inverse-square law of radiation, multi-epoch light curve synthesis, and 102-channel near-infrared molecular spectrophotometry.
            </p>
          </div>

          {/* Distinction Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#111C2E]/80 border border-[#1E2D45]">
              <div className="text-[10px] text-[#94A3B8]">Final Rank</div>
              <div className="text-sm font-bold text-[#38BDF8] mt-0.5">Cosmic Scientist</div>
            </div>
            <div className="p-3 rounded-xl bg-[#111C2E]/80 border border-[#1E2D45]">
              <div className="text-[10px] text-[#94A3B8]">Total Mastery XP</div>
              <div className="text-sm font-bold text-[#F59E0B] mt-0.5">{playerState.xp} XP</div>
            </div>
            <div className="p-3 rounded-xl bg-[#111C2E]/80 border border-[#1E2D45]">
              <div className="text-[10px] text-[#94A3B8]">Stars Earned</div>
              <div className="text-sm font-bold text-[#10B981] mt-0.5">{totalStars} / 36 ★</div>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-6 border-t border-[#1E2D45]/80 grid grid-cols-2 gap-8 text-left text-xs font-mono text-[#94A3B8]">
            <div className="space-y-1">
              <div className="font-sans text-sm font-bold text-white tracking-wide">
                SPHEREx Time-Domain Faculty
              </div>
              <div className="text-[11px] text-[#38BDF8]">SKYVERSE Academic Board</div>
              <div className="text-[10px] text-slate-500">Validation ID: SKY-CERT-2026-XQ9</div>
            </div>

            <div className="space-y-1 text-right">
              <div className="flex items-center justify-end gap-1 text-[#10B981] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Scientific Curriculum</span>
              </div>
              <div className="text-[11px] text-slate-400">Date: {new Date().toLocaleDateString()}</div>
              <div className="text-[10px] text-slate-500">Status: Fully Accredited</div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs font-mono text-[#94A3B8]">
          Ready to apply your knowledge to genuine NASA observations? Launch the{' '}
          <span className="text-[#38BDF8] font-bold">Sky Explorer</span> or report candidates in the{' '}
          <span className="text-[#A78BFA] font-bold">Discovery Hub</span>.
        </div>
      </div>
    </div>
  );
};

