import React, { useState, useEffect } from 'react';
import { RotateCw, Sparkles } from 'lucide-react';

interface SpherexProps {
  className?: string;
  autoRotate?: boolean;
}

export const SpherexSatelliteIllustration: React.FC<SpherexProps> = ({
  className = "w-full h-full",
  autoRotate = true
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  // Continuous smooth orbital rotation
  useEffect(() => {
    if (!isRotating) return;
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setRotationAngle((prev) => (prev + dt * 14) % 360); // 14 deg/sec smooth rotation
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRotating]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: nx * 15, y: -ny * 15 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseTilt({ x: 0, y: 0 })}
      className={`relative flex items-center justify-center select-none group perspective-[1000px] ${className}`}
    >
      {/* Background Cosmic Atmosphere & Planetary Orbit Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#6C8CFF]/25 via-[#A78BFA]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 right-4 w-96 h-36 rounded-full bg-[#49D7E8]/20 blur-2xl pointer-events-none" />

      {/* Orbit Track Rings */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-[#49D7E8]/15 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute w-[440px] h-[440px] rounded-full border border-[#6C8CFF]/10 pointer-events-none" />

      {/* Rotation Control Button in Corner */}
      <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono border backdrop-blur-md transition flex items-center gap-1.5 ${
            isRotating
              ? 'bg-[#49D7E8]/15 border-[#49D7E8]/40 text-[#49D7E8]'
              : 'bg-[#111C2E]/80 border-[#1E2D45] text-[#94A3B8] hover:text-white'
          }`}
          title="Toggle Telescope Orbital Rotation"
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          <span>{isRotating ? 'Rotating Orbit' : 'Paused'}</span>
        </button>
      </div>

      {/* 3D Rotating Spacecraft Container */}
      <div
        style={{
          transform: `rotateX(${mouseTilt.y}deg) rotateY(${mouseTilt.x}deg) rotate(${rotationAngle}deg)`,
          transformOrigin: '260px 210px',
          transition: 'transform 0.08s linear'
        }}
        className="relative w-full h-full max-w-[460px] max-h-[420px]"
      >
        <svg
          viewBox="0 0 520 420"
          className="w-full h-full drop-shadow-[0_15px_35px_rgba(73,215,232,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* SPHEREx Conical Shields Gradient */}
            <linearGradient id="coneOuter" x1="180" y1="70" x2="350" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E2E8F0" />
              <stop offset="55%" stopColor="#94A3B8" />
              <stop offset="85%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="coneInner" x1="220" y1="90" x2="310" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="40%" stopColor="#CBD5E1" />
              <stop offset="75%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            <linearGradient id="telescopeBore" x1="240" y1="80" x2="280" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="40%" stopColor="#0F172A" />
              <stop offset="80%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>

            {/* Solar Panel Texture Gradient */}
            <linearGradient id="solarCell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="25%" stopColor="#0F172A" />
              <stop offset="55%" stopColor="#1E3A8A" />
              <stop offset="85%" stopColor="#172554" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Gold Foil Bus Gradient */}
            <linearGradient id="goldFoil" x1="220" y1="230" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="30%" stopColor="#FACC15" />
              <stop offset="65%" stopColor="#CA8A04" />
              <stop offset="100%" stopColor="#854D0E" />
            </linearGradient>

            <linearGradient id="goldFoilFacet" x1="240" y1="240" x2="280" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>

            {/* Optical Aperture Shimmer */}
            <radialGradient id="apertureShimmer" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* ================= SPACE VEHICLE STRUCTURE ================= */}
          <g id="spacecraftBody">
            {/* Left Solar Array Wing */}
            <g id="leftWing">
              <rect x="65" y="215" width="140" height="52" rx="3" fill="url(#solarCell)" stroke="#94A3B8" strokeWidth="1.6" />
              {/* Solar cell division grids */}
              <line x1="100" y1="215" x2="100" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="135" y1="215" x2="135" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="170" y1="215" x2="170" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="65" y1="241" x2="205" y2="241" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              {/* Titanium wing boom to bus */}
              <rect x="205" y="235" width="20" height="12" fill="#CBD5E1" stroke="#475569" strokeWidth="1.2" />
            </g>

            {/* Right Solar Array Wing */}
            <g id="rightWing">
              <rect x="315" y="215" width="140" height="52" rx="3" fill="url(#solarCell)" stroke="#94A3B8" strokeWidth="1.6" />
              {/* Solar cell division grids */}
              <line x1="350" y1="215" x2="350" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="385" y1="215" x2="385" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="420" y1="215" x2="420" y2="267" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              <line x1="315" y1="241" x2="455" y2="241" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.75" />
              {/* Titanium wing boom to bus */}
              <rect x="295" y="235" width="20" height="12" fill="#CBD5E1" stroke="#475569" strokeWidth="1.2" />
            </g>

            {/* Service Bus (Hexagonal Gold / Multilayer Insulation) */}
            <polygon points="225,230 295,230 305,295 215,295" fill="url(#goldFoil)" stroke="#FACC15" strokeWidth="1.6" />
            {/* Multi-layer insulation facets */}
            <polygon points="225,230 260,230 260,295 215,295" fill="url(#goldFoilFacet)" fillOpacity="0.6" />
            <polygon points="260,230 295,230 305,295 260,295" fill="#713F12" fillOpacity="0.35" />

            {/* Avionics / Payload Radiator Panels */}
            <rect x="235" y="248" width="22" height="32" fill="#F8FAFC" rx="2" stroke="#64748B" strokeWidth="1" />
            <line x1="235" y1="258" x2="257" y2="258" stroke="#94A3B8" strokeWidth="0.8" />
            <line x1="235" y1="268" x2="257" y2="268" stroke="#94A3B8" strokeWidth="0.8" />

            {/* Attitude Control System Thruster Nozzles */}
            <circle cx="282" cy="265" r="9" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1.2" />
            <circle cx="282" cy="265" r="4.5" fill="#38BDF8" />

            {/* Star Tracker Baffles */}
            <rect x="208" y="252" width="9" height="16" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
            <rect x="303" y="252" width="9" height="16" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />

            {/* ================= SPHEREx CONICAL THERMAL PHOTON SHIELDS ================= */}
            {/* Layer 1: Outer Truncated Conical Shield */}
            <polygon points="165,75 355,75 295,230 225,230" fill="url(#coneOuter)" stroke="#F1F5F9" strokeWidth="2" />
            {/* Outer cone rim ellipse */}
            <ellipse cx="260" cy="75" rx="95" ry="26" fill="#64748B" stroke="#FFFFFF" strokeWidth="2.2" />

            {/* Layer 2: Middle Concentric V-Groove Shield */}
            <polygon points="192,90 328,90 285,212 235,212" fill="url(#coneInner)" stroke="#E2E8F0" strokeWidth="1.6" />
            {/* Middle cone rim ellipse */}
            <ellipse cx="260" cy="90" rx="68" ry="19" fill="#475569" stroke="#E2E8F0" strokeWidth="1.6" />

            {/* Layer 3: Inner Cold Shield & Telescope Assembly */}
            <polygon points="216,104 304,104 275,198 245,198" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1.4" />
            {/* Inner cold bore rim ellipse */}
            <ellipse cx="260" cy="104" rx="44" ry="13" fill="url(#telescopeBore)" stroke="#38BDF8" strokeWidth="1.8" />

            {/* Cryogenic Aperture Lens & Shimmer */}
            <ellipse cx="260" cy="104" rx="26" ry="8" fill="url(#apertureShimmer)" />
            <ellipse cx="260" cy="104" rx="18" ry="5" fill="#020617" />

            {/* Secondary Mirror Spider Support Struts */}
            <line x1="234" y1="104" x2="286" y2="104" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.9" />
            <line x1="260" y1="96" x2="260" y2="112" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.9" />
            <circle cx="260" cy="104" r="4.5" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="1.4" />

            {/* Telemetry Antenna Mast */}
            <line x1="260" y1="295" x2="260" y2="330" stroke="#CBD5E1" strokeWidth="2.2" />
            <circle cx="260" cy="333" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Earth Horizon Arc at Bottom of Hero */}
      <div className="absolute -bottom-8 inset-x-0 h-16 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 520 60" className="w-full h-full" fill="none" preserveAspectRatio="none">
          <path
            d="M-20 60 Q 260 10 540 60"
            stroke="#49D7E8"
            strokeWidth="3.5"
            strokeOpacity="0.85"
            fill="none"
          />
          <path
            d="M-20 60 Q 260 8 540 60"
            stroke="#6C8CFF"
            strokeWidth="12"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
