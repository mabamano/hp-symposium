import { Send } from 'lucide-react';

export default function Registration() {
  return (
    <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow brightness-125">
            Owl Post
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-100 mb-12 drop-shadow-md">
            Bind your soul to the magical symposium. Your journey into the dark arts of innovation begins here.
          </p>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtfSL_Aj2loBJLwo4ntS5Ey0mmMriLE17cHP-FzUAtHVJvzA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-6 px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.4em] text-sm hover:bg-gray-200 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.2)] group"
          >
            <span>Register via Google Form</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <div className="mt-20">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
              The horizon awaits your arrival
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
