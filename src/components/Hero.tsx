import { Wand2, Send } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-purple-950" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-400" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTkxLDM2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-shimmer">
            BIZNOVEXA
          </h1>

          <div className="h-1 w-64 mx-auto mb-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />

          <p className="text-2xl md:text-4xl text-gray-300 mb-4 font-serif italic">
            Where Innovation Meets Magic
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Step into the realm of extraordinary possibilities. A symposium where the brightest minds
            converge to showcase innovation, compete in magical challenges, and forge legendary connections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onNavigate('events')}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2 text-black font-bold">
                <Wand2 className="w-5 h-5" />
                <span>Enter the Castle</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('register')}
              className="group relative px-8 py-4 bg-transparent border-2 border-amber-500 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2 text-amber-400 font-bold group-hover:text-amber-300">
                <Send className="w-5 h-5" />
                <span>Register via Owl Post</span>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <div className="inline-block p-2 rounded-full bg-amber-500/10 border border-amber-500/30">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
