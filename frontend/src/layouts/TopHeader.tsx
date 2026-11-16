import React, { useState } from 'react';
import {
  Search,
  Share2,
  Check,
  Radio,
  ExternalLink,
  Sparkles,
  User,
  SlidersHorizontal
} from 'lucide-react';

interface TopHeaderProps {
  currentModule: string;
  onSearchCoordinates: (ra: string, dec: string) => void;
  currentCoords: { ra: number; dec: number; fov: number };
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentModule,
  onSearchCoordinates,
  currentCoords
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [copied, setCopied] = useState(false);

  const getModuleTitle = (mod: string) => {
    switch (mod) {
      case 'overview':
        return { title: 'Overview & Mission Status', desc: 'Real-time SPHEREx survey status and time-domain monitors' };
      case 'learn-explore':
        return { title: 'Learn & Explore', desc: 'The Universe is your classroom. Explore astronomy topics, interactive simulations, and knowledge challenges' };
      case 'quest':
        return { title: 'Cosmic Brightness Quest', desc: 'Discover the Light. Understand the Universe. Interactive 12-level space learning game' };
      case 'explorer':
        return { title: 'Sky Explorer', desc: 'Coordinate-based SPHEREx FITS exploration with WCS inspection' };
      case 'time-machine':
        return { title: 'Cosmic Time Machine', desc: 'Blink comparator, chronological time-lapse, and difference imaging' };
      case 'spectral':
        return { title: 'Spectral Intelligence', desc: '102 near-infrared channels (0.75 - 5.00 µm) quick-look spectrum extraction' };
      case 'investigation':
        return { title: 'Object Investigation Lab', desc: 'Astrometric displacement, light curve, and Gaia DR3 reference panel' };
      case 'discovery':
        return { title: 'Citizen Discovery Hub', desc: 'Submit and review moving or variable infrared candidate investigations' };
      case 'targets':
        return { title: 'Challenge Targets', desc: '5 NASA challenge benchmarks: Barnard\'s Star, Eps Indi B, WISE 0855, RW Aur, R Dra' };
      case 'neossat':
        return { title: 'NEOSSat Research & Learning', desc: 'Canadian Space Agency microsatellite & CADC data products (RAW/CLEAN/COR/CORD)' };
      case 'resources':
        return { title: 'Resources & Methodology', desc: 'Technical documentation, tutorial notebooks, and scientific citations' };
      default:
        return { title: 'SKYVERSE', desc: 'Explore the Changing Universe' };
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    const parts = searchInput.trim().split(/[\s,]+/);
    if (parts.length >= 2) {
      onSearchCoordinates(parts[0], parts[1]);
    } else {
      onSearchCoordinates(parts[0], '');
    }
  };

  const handleShareUrl = () => {
    const url = new URL(window.location.origin);
    url.searchParams.set('ra', String(currentCoords.ra));
    url.searchParams.set('dec', String(currentCoords.dec));
    url.searchParams.set('fov', String(currentCoords.fov));
    url.searchParams.set('module', currentModule);

    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const meta = getModuleTitle(currentModule);

  return (
    <header className="h-16 bg-[#0E1626]/90 backdrop-blur-md border-b border-[#1E2D45] px-6 flex items-center justify-between z-20">
      {/* Title & Description */}
      <div className="flex flex-col">
        <h1 className="text-base font-semibold text-[#F1F5F9] flex items-center gap-2">
          {meta.title}
        </h1>
        <p className="text-xs text-[#94A3B8] hidden sm:block truncate max-w-md">
          {meta.desc}
        </p>
      </div>

      {/* Center Coordinate Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex items-center relative w-80 max-w-md"
      >
        <Search className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 pointer-events-none" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="RA, Dec (e.g. 133.795, -7.245 or 08h55m)"
          className="w-full bg-[#111C2E] text-xs text-[#F1F5F9] pl-9 pr-20 py-2 rounded-lg border border-[#1E2D45] focus:outline-none focus:border-[#6C8CFF] focus:ring-1 focus:ring-[#6C8CFF]/30 transition placeholder:text-[#94A3B8]/60 font-mono"
        />
        <button
          type="submit"
          className="absolute right-1 px-2 py-1 text-[10px] font-mono font-medium rounded bg-[#1E2D45] text-[#49D7E8] hover:bg-[#2A3F60] transition"
        >
          Jump
        </button>
      </form>

      {/* Right Action Icons & Badges */}
      <div className="flex items-center gap-3">
        {/* Connection Status Indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#111C2E] border border-[#1E2D45] text-[11px] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="text-[#94A3B8] hidden sm:inline">IRSA:</span>
          <span className="text-[#10B981] font-medium">ONLINE</span>
        </div>

        {/* Share Button */}
        <button
          onClick={handleShareUrl}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
            copied
              ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
              : 'bg-[#111C2E] text-[#94A3B8] border-[#1E2D45] hover:text-[#F1F5F9] hover:bg-[#1E2D45]'
          }`}
          title="Share coordinate investigation URL"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? 'Copied' : 'Share URL'}</span>
        </button>

        {/* User Badge */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#1E2D45]">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#6C8CFF]/20 to-[#49D7E8]/20 border border-[#6C8CFF]/40 flex items-center justify-center text-xs font-mono text-[#49D7E8]">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-medium text-[#F1F5F9] leading-tight">Citizen Scientist</span>
            <span className="text-[10px] text-[#94A3B8] leading-tight font-mono">ID: usr_guest</span>
          </div>
        </div>
      </div>
    </header>
  );
};

