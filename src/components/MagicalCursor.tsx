import { useEffect, useState } from 'react';

export default function MagicalCursor() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
