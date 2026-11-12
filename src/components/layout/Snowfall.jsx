import React, { useEffect, useRef } from 'react';

export default function Snowfall({ density = 45, speed = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create snowflakes with parallax depths
    const count = Math.floor(density * (width / 1200));
    const flakes = Array.from({ length: Math.max(25, count) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      density: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.25,
      drift: (Math.random() - 0.5) * 0.6,
      wobble: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.01;

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        flake.y += (flake.density * speed) + 0.3;
        flake.x += Math.sin(t + flake.wobble) * 0.4 + flake.drift;

        if (flake.y > height) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 232, 208, ${flake.alpha})`;
        ctx.shadowColor = 'rgba(235, 211, 154, 0.4)';
        ctx.shadowBlur = flake.radius > 1.8 ? 4 : 0;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
