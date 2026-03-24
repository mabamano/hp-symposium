import { useEffect, useState } from 'react';

export default function MagicalCursor() {
  const [particles, setParticles] = useState<Array<{ 
    id: number; x: number; y: number; tx?: number; ty?: number; color?: string 
  }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleBurst = (x: number, y: number) => {
      const colors = ['#4ade80', '#ef4444', '#facc15', '#fff']; // green, red, gold, white
      const burstSize = 12;
      
      const newParticles = Array.from({ length: burstSize }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 100;
        return {
          id: particleId++,
          x,
          y,
          tx: Math.cos(angle) * dist,
          ty: Math.sin(angle) * dist,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
      });

      setParticles((prev) => [...prev, ...newParticles].slice(-60));
      
      newParticles.forEach(p => {
        setTimeout(() => {
          setParticles((prev) => prev.filter((part) => part.id !== p.id));
        }, 800);
      });
    };

    const handleMove = (x: number, y: number) => {
      const newParticle = { id: particleId++, x, y };
      setParticles((prev) => [...prev, newParticle].slice(-30));
      setTimeout(() => setParticles((prev) => prev.filter((p) => p.id !== newParticle.id)), 800);
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) handleBurst(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-50 rounded-full blur-[0.5px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.tx ? '3px' : '1.5px',
            height: particle.tx ? '3px' : '1.5px',
            backgroundColor: particle.color || 'white',
            boxShadow: `0 0 10px ${particle.color || 'white'}`,
            animation: particle.tx ? 'spell-burst 0.8s ease-out forwards' : 'sparkle 0.8s ease-out forwards',
            ['--tx' as any]: `${particle.tx}px`,
            ['--ty' as any]: `${particle.ty}px`,
          }}
        />
      ))}
    </>
  );
}
