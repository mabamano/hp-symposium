import { Wand2, Send } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background Section - Initial View */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
          >
            <source src="/home_video/title.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay if needed for transitions, but keeping it clean as requested */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40 z-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Content Section - Below Video */}
      <div className="relative z-20 py-32 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] magical-glow">
            BIZNOVEXA
          </h1>

          <div className="h-[2px] w-48 mx-auto mb-8 bg-gradient-to-r from-transparent via-white to-transparent" />

          <p className="text-2xl md:text-4xl text-white mb-6 font-serif italic tracking-[0.3em] uppercase magical-glow opacity-90">
            Mischief Managed
          </p>

          <p className="text-lg md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Enter the dark depths of innovation. A symposium where the ancient magic of technology 
            reveals the secrets of the Deathly Hallows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onNavigate('events')}
              className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-none overflow-hidden transform transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              <div className="relative flex items-center space-x-3 text-white font-medium tracking-widest uppercase text-sm">
                <Wand2 className="w-5 h-5 text-gray-400" />
                <span>Unveil the Secrets</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </button>

            <button
              onClick={() => onNavigate('register')}
              className="group relative px-10 py-4 bg-transparent border border-gray-600 rounded-none overflow-hidden transform transition-all duration-500 hover:border-gray-200"
            >
              <div className="relative flex items-center space-x-3 text-gray-400 font-medium group-hover:text-white transition-colors duration-500 tracking-widest uppercase text-sm">
                <Send className="w-5 h-5" />
                <span>Join the Covenant</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
