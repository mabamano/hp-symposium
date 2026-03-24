import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [scene, setScene] = useState<'loading' | 'letter' | 'flight' | 'transition'>('loading');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedExitRef = useRef(false);

  useEffect(() => {
    // Asset Preloading Logic
    const preloadAssets = async () => {
      const assets = [
        // Intro Assets
        { type: 'image', src: '/intro/letter.png' },
        { type: 'image', src: '/intro/letter_mobile.png' },
        { type: 'video', src: '/intro/Owl_flying.mp4' },
        { type: 'video', src: '/intro/Owl_flying_moblie.mp4' },
        // Platform Core Assets
        { type: 'image', src: '/images/events/Ramco-logo.png' },
        { type: 'image', src: '/images/events/hogwarts-bg.webp' },
        { type: 'image', src: '/images/events/contact-bg.webp' },
        { type: 'image', src: '/houses/Gryffindor.png' },
        { type: 'image', src: '/houses/Slytherin.png' },
        { type: 'image', src: '/houses/Ravenclaw.png' },
        { type: 'image', src: '/houses/Hufflepuff.png' },
        // Video Backgrounds
        { type: 'video', src: '/home_video/title.mp4' },
        { type: 'video', src: '/home_video/title_mobile.mp4' },
        { type: 'video', src: '/hat.mp4' },
        { type: 'video', src: '/bg_music/hp.mp4' }
      ];

      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / assets.length) * 100));
        if (loadedCount === assets.length) {
          setTimeout(() => setScene('letter'), 1500);
        }
      };

      assets.forEach(asset => {
        if (asset.type === 'image') {
          const img = new Image();
          img.src = asset.src;
          img.onload = updateProgress;
          img.onerror = updateProgress;
        } else {
          const video = document.createElement('video');
          video.src = asset.src;
          video.preload = 'auto';
          video.oncanplaythrough = updateProgress;
          video.onerror = updateProgress;
          video.load();
        }
      });
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    // Entrance animation for the letter
    if (scene === 'letter' && letterRef.current) {
      gsap.fromTo(letterRef.current,
        { opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power4.out' }
      );
    }
  }, [scene]);

  const handleVideoEnd = () => {
    if (hasStartedExitRef.current) return;
    hasStartedExitRef.current = true;
    
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: onComplete
    });
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || hasStartedExitRef.current) return;

    // Start fade out 1.5 seconds before the video ends
    if (video.duration - video.currentTime <= 1.5) {
      handleVideoEnd();
    }
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.25;
    }
  };

  const handleOpenLetter = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Transition to flight scene
    const tl = gsap.timeline({
      onComplete: () => {
        setScene('flight');
        setIsTransitioning(false);
      }
    });

    tl.to(letterRef.current, {
      scale: 1.2,
      opacity: 0,
      filter: 'blur(20px)',
      duration: 1.2,
      ease: 'power2.inOut'
    });
  };

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: onComplete
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop')] bg-cover opacity-[0.05] filter grayscale" />
      </div>

      {scene === 'loading' && (
        <div className="relative z-10 flex flex-col items-center space-y-12">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-[0.4em] uppercase magical-glow opacity-20 animate-pulse">
              BIZNOVEXA
            </h1>
            <div className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl font-bold text-white tracking-[0.4em] uppercase magical-glow animate-slowSpin blur-sm opacity-10 pointer-events-none">
              BIZNOVEXA
            </div>
          </div>
          
          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          
          <p className="text-white/30 text-[10px] uppercase tracking-[0.6em] animate-pulse">
            Channelling Ancient Powers...
          </p>
        </div>
      )}

      {scene === 'letter' && (
        <div ref={letterRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center animate-fadeIn">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The Provided Letter Image - Full Screen Fit */}
            <picture className="w-full h-full">
              <source media="(max-width: 768px)" srcSet="/intro/letter_mobile.png" />
              <img 
                src="/intro/letter.png" 
                alt="Invitation" 
                className="w-full h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.9)]"
              />
            </picture>
            
            {/* The Ancient Magical Button Overlay - Moved Higher */}
            <div className="absolute bottom-[20%] md:bottom-[25%] left-1/2 -translate-x-1/2">
              <button
                onClick={handleOpenLetter}
                className="relative group px-12 py-4 transition-all duration-700 active:scale-95"
              >
                {/* Ancient Button Background/Border */}
                <div className="absolute inset-0 bg-[#1a0f0a] border-2 border-[#c4a484]/40 shadow-[0_0_20px_rgba(196,164,132,0.2)]" />
                <div className="absolute inset-[2px] border border-[#c4a484]/20" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#c4a484]/60" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#c4a484]/60" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#c4a484]/60" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#c4a484]/60" />

                <span className="relative z-10 text-[#c4a484] font-serif text-lg md:text-xl tracking-[0.3em] uppercase magical-glow group-hover:text-white transition-colors duration-500">
                  I Accept
                </span>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#c4a484]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
              </button>
            </div>
          </div>
        </div>
      )}

      {scene === 'flight' && (
        <div className="absolute inset-0 z-20 animate-fadeIn">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
            className="w-full h-full object-cover object-center"
          >
            <source src={window.innerWidth <= 768 ? "/intro/Owl_flying_moblie.mp4" : "/intro/Owl_flying.mp4"} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Persistent Skip Button */}
      <button
        onClick={handleSkip}
        className="fixed top-10 right-10 z-[1200] text-white font-bold text-[11px] uppercase tracking-[0.4em] px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 transform hover:scale-105"
      >
        <span className="magical-glow brightness-150">Skip Ceremony</span>
      </button>

      {/* Sound Hint Message - Only visible on the intro screen */}
      <div className="fixed bottom-24 right-10 invisible">
        {/* This helps position the music player but the actual component is global */}
      </div>
    </div>
  );
}
