export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background Section - Initial View */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center block md:hidden"
          >
            <source src="/home_video/title_mobile.mp4" type="video/mp4" />
          </video>
          
          {/* PC / Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center hidden md:block"
          >
            <source src="/home_video/title.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay if needed for transitions, but keeping it clean as requested */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-40 z-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Content Section - Below Video */}
      <div className="relative z-20 py-32 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
