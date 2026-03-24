import { useEffect, useState } from 'react';

export default function MagicalCursor() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMove = (x: number, y: number) => {
      const newParticle = {
        id: particleId++,
        x,
        y,
      };

      setParticles((prev) => [...prev, newParticle].slice(-20)); // Limit active particles

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-50 w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
          style={{
            left: particle.x,
            top: particle.y,
            animation: 'sparkle 1s ease-out forwards',
          }}
        />
      ))}
    </>
  );
}
