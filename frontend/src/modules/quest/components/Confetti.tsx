import React, { useEffect, useRef } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  alpha: number;
}

export const Confetti: React.FC<{ active: boolean; onComplete?: () => void }> = ({ active, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ['#38BDF8', '#818CF8', '#A78BFA', '#F59E0B', '#10B981', '#EC4899', '#FFFFFF'];
    const pieces: ConfettiPiece[] = [];

    // Burst 120 pieces from bottom center/sides
    for (let i = 0; i < 120; i++) {
      const angle = (Math.random() * Math.PI) / 1.5 + Math.PI / 6; // upward arc
      const speed = Math.random() * 12 + 6;
      pieces.push({
        x: width * 0.5 + (Math.random() - 0.5) * 200,
        y: height * 0.7,
        vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1),
        vy: -Math.abs(Math.sin(angle) * speed),
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        alpha: 1
      });
    }

    let animId: number;
    let frames = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frames++;

      let alive = false;
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.vx *= 0.98; // air drag
        p.rotation += p.vRot;

        if (frames > 40) {
          p.alpha -= 0.015;
        }

        if (p.alpha > 0 && p.y < height + 50) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      }

      if (alive && frames < 160) {
        animId = requestAnimationFrame(render);
      } else {
        if (onComplete) onComplete();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};

