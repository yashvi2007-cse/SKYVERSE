import React, { useEffect, useRef } from 'react';
import cosmicBg from '../assets/cosmic-space-background.jpg';

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export const StarrySkyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // 1. Moving Meteors / Shooting Stars (Moving outwards across the sky)
    let meteors: Meteor[] = [];
    let lastMeteorTime = Date.now();

    const spawnMeteor = () => {
      // Meteors originate from upper-center/deep space radiating downward-right
      const startX = width * (0.3 + Math.random() * 0.4);
      const startY = height * (0.05 + Math.random() * 0.25);
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25; // ~45 deg downward streak
      const speed = Math.random() * 8 + 10;

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 110 + 90,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 35,
        color: Math.random() < 0.65 ? '#E0F2FE' : '#A78BFA',
        size: Math.random() * 1.5 + 1.2
      });
    };

    // 2. Cosmic Stardust Particles (Moving outwards and drifting)
    let particles: Particle[] = [];
    const particleColors = ['#FFFFFF', '#38BDF8', '#818CF8', '#C084FC', '#FDE047'];

    const initParticles = () => {
      particles = [];
      const count = Math.floor((width * height) / 9000);
      for (let i = 0; i < Math.min(180, Math.max(60, count)); i++) {
        // Subtle drift radiating outwards
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.35 + 0.08;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.8), // primarily in space, above Earth
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)]
        });
      }
    };

    initParticles();

    // Initial burst of meteors
    spawnMeteor();

    let time = 0;
    let lastFrameTime = performance.now();

    const render = (currentTime: number) => {
      const dt = Math.min(32, currentTime - lastFrameTime);
      lastFrameTime = currentTime;
      time += 0.015;

      // Mouse easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const parallaxX = (mouseX - width / 2) * 0.025;
      const parallaxY = (mouseY - height / 2) * 0.025;

      ctx.clearRect(0, 0, width, height);

      // --- A. GALAXY CORE SUBTLE PULSATION (Top Right, matching image galaxy) ---
      const galaxyX = width * 0.76 + parallaxX * 0.3;
      const galaxyY = height * 0.22 + parallaxY * 0.3;
      const galaxyPulse = 1 + Math.sin(time * 0.8) * 0.08;
      const galaxyGrad = ctx.createRadialGradient(
        galaxyX, galaxyY, 0,
        galaxyX, galaxyY, 220 * galaxyPulse
      );
      galaxyGrad.addColorStop(0, 'rgba(253, 224, 71, 0.10)');
      galaxyGrad.addColorStop(0.3, 'rgba(216, 180, 254, 0.12)');
      galaxyGrad.addColorStop(0.7, 'rgba(147, 51, 234, 0.05)');
      galaxyGrad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = galaxyGrad;
      ctx.beginPath();
      ctx.arc(galaxyX, galaxyY, 220 * galaxyPulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // --- B. EARTH ATMOSPHERIC LIMB BREATHING GLOW (Bottom Horizon) ---
      const earthLimbY = height * 0.62 + parallaxY * 0.15;
      const limbPulse = 1 + Math.sin(time * 1.2) * 0.06;
      const limbGrad = ctx.createLinearGradient(0, earthLimbY - 60, 0, earthLimbY + 80);
      limbGrad.addColorStop(0, 'transparent');
      limbGrad.addColorStop(0.5, `rgba(56, 189, 248, ${0.12 * limbPulse})`);
      limbGrad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = limbGrad;
      ctx.fillRect(0, earthLimbY - 60, width, 140);
      ctx.restore();

      // --- C. DRIFTING & TWINKLING STARDUST PARTICLES ---
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move outwards
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height * 0.8;
        if (p.y > height * 0.8) p.y = 0;

        // Twinkle
        p.alpha = Math.max(0.1, Math.min(1.0, p.baseAlpha + Math.sin(time * 2.0 + i) * 0.28));

        const drawX = p.x + parallaxX * (p.radius / 1.5);
        const drawY = p.y + parallaxY * (p.radius / 1.5);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra halo for larger stars
        if (p.radius > 1.2) {
          ctx.globalAlpha = p.alpha * 0.25;
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // --- D. SPAWN & RENDER SHOOTING STARS / METEORS (STREAKING OUTWARDS) ---
      const now = Date.now();
      if (now - lastMeteorTime > 2800 && Math.random() < 0.6) {
        spawnMeteor();
        lastMeteorTime = now;
      }

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx * (dt / 16);
        m.y += m.vy * (dt / 16);
        m.life += dt / 16;
        m.opacity = Math.max(0, 1 - m.life / m.maxLife);

        if (m.life >= m.maxLife || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const hyp = Math.hypot(m.vx, m.vy);
        const tailX = m.x - (m.vx / hyp) * m.length;
        const tailY = m.y - (m.vy / hyp) * m.length;

        const streakGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        streakGrad.addColorStop(0, '#FFFFFF');
        streakGrad.addColorStop(0.2, m.color);
        streakGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.3)');
        streakGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = m.size;
        ctx.globalAlpha = m.opacity;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Brilliant glowing head
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = m.opacity;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 1.4, 0, Math.PI * 2);
        ctx.fill();

        // Soft radial head flare
        const headGlow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 6);
        headGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        headGlow.addColorStop(0.4, 'rgba(56, 189, 248, 0.4)');
        headGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Underlying Cinematic Cosmic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-100"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          filter: 'brightness(0.92) contrast(1.08)'
        }}
      />

      {/* 2. Subtle Dark Vignette & Depth Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/90 via-transparent to-[#050711]/50 pointer-events-none" />

      {/* 3. Interactive Kinetic Canvas Layer (Meteors, Stardust Particles, Breathing Limb Glow) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
