import { Wand2 } from 'lucide-react';

interface SortingHatSectionProps {
  onNavigate: (section: string) => void;
}

export default function SortingHatSection({ onNavigate }: SortingHatSectionProps) {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent opacity-30" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-block p-4 bg-white/5 border border-white/10 mb-12 animate-pulse">
           <Wand2 className="w-12 h-12 text-white/50" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-widest uppercase magical-glow">
          The Sorting Ceremony
        </h2>
        
        <p className="text-xl text-white max-w-2xl mx-auto font-light leading-relaxed tracking-wide opacity-80 mb-16">
          "There's nothing hidden in your head the Sorting Hat can't see..." 
          Discover your destined house and join the ranks of the elite wizards in the BIZNOVEXA symposium.
        </p>
        
        <button
          onClick={() => onNavigate('sorting-hat')}
          className="group relative px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.4em] text-sm hover:bg-gray-200 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.3)] animate-glow"
        >
          Begin the Initiation
        </button>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
           <img src="/houses/Gryffindor.png" alt="Gryffindor" className="h-24 mx-auto object-contain mix-blend-screen" />
           <img src="/houses/Slytherin.png" alt="Slytherin" className="h-24 mx-auto object-contain mix-blend-screen" />
           <img src="/houses/Ravenclaw.png" alt="Ravenclaw" className="h-24 mx-auto object-contain mix-blend-screen" />
           <img src="/houses/Hufflepuff.png" alt="Hufflepuff" className="h-24 mx-auto object-contain mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}
