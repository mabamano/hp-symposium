import { useState, useRef, useEffect } from 'react';

export default function Hero({ startVideo = true }: { startVideo?: boolean }) {
  const [videoState, setVideoState] = useState<'title' | 'clg'>('title');
  const mobileTitleRef = useRef<HTMLVideoElement>(null);
  const desktopTitleRef = useRef<HTMLVideoElement>(null);
  const mobileClgRef = useRef<HTMLVideoElement>(null);
  const desktopClgRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (startVideo) {
      if (videoState === 'title') {
        if (mobileTitleRef.current) mobileTitleRef.current.play().catch(() => {});
        if (desktopTitleRef.current) desktopTitleRef.current.play().catch(() => {});
      } else if (videoState === 'clg') {
        if (mobileClgRef.current) mobileClgRef.current.play().catch(() => {});
        if (desktopClgRef.current) desktopClgRef.current.play().catch(() => {});
      }
    }
  }, [startVideo, videoState]);

  const handleVideoEnd = () => {
    if (videoState === 'title') {
      setVideoState('clg');
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background Section - Initial View */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          
          {/* BACKGROUND LAYER: CLG Video (Always present, starts hidden behind Title, plays on switch) */}
          <video
            ref={mobileClgRef}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain block md:hidden"
          >
            <source src="/home_video/clg.mp4" type="video/mp4" />
          </video>
          
          <video
            ref={desktopClgRef}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain hidden md:block"
          >
            <source src="/home_video/clg.mp4" type="video/mp4" />
          </video>

          {/* FOREGROUND LAYER: Title Video (Fades out when done) */}
          <video
            ref={mobileTitleRef}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`absolute inset-0 w-full h-full object-cover block md:hidden transition-opacity duration-1000 ease-in-out ${videoState === 'clg' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <source src="/home_video/title_mobile.mp4" type="video/mp4" />
          </video>
          
          <video
            ref={desktopTitleRef}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`absolute inset-0 w-full h-full object-cover hidden md:block transition-opacity duration-1000 ease-in-out ${videoState === 'clg' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <source src="/home_video/title.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle overlay if needed for transitions, but keeping it clean as requested */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-40 z-10 pointer-events-none">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Content Section - Below Video */}
      <div className="relative z-20 py-32 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none">
        <div className="animate-fadeIn">
          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] magical-glow">
            BIZNOVEXA
          </h1>

          <div className="h-[2px] w-64 mx-auto mb-10 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

          <p className="text-2xl md:text-4xl text-white mb-8 font-serif italic tracking-[0.3em] uppercase magical-glow brightness-150">
            Mischief Managed
          </p>

          <p className="text-lg md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg opacity-100">
            Enter the dark depths of innovation. A symposium where the ancient magic of technology 
            reveals the secrets of the Deathly Hallows.
          </p>

          <p className="text-xl md:text-2xl text-white mb-12 font-serif tracking-[0.2em] uppercase magical-glow">
            10th April 2026
          </p>
        </div>
      </div>
    </section>
  );
}
