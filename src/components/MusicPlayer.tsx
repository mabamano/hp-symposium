import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt auto-play on mount (will likely be blocked until interaction)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          // Increase volume for mobile users specifically
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          audioRef.current.volume = isMobile ? 1.0 : 0.6;
          
          await audioRef.current.play();
          setPlaying(true);
        }
      } catch (err) {
        console.log("Autoplay blocked. User must interact to play music.");
      }
    };

    playAudio();
  }, []);

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[1100] flex items-center group">
      {!playing && (
        <div className="mr-4 px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest animate-bounce shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Enable music for better experience
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
        </div>
      )}
      <audio
        ref={audioRef}
        src="/bg_music/hp.mp4"
        loop
      />
      <button
        onClick={toggle}
        className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.08)] bg-black/60 backdrop-blur-md relative overflow-hidden"
        title={playing ? "Silence the Shadows" : "Hear the Magic"}
      >
        {playing ? (
          <Volume2 className="w-5 h-5 magical-glow animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
