import { Info } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block p-6 bg-white/5 border border-white/5 mb-10 group hover:border-white/20 transition-all duration-700">
            <Info className="w-12 h-12 text-white/60 group-hover:text-white transition-colors" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white tracking-[0.2em] uppercase magical-glow brightness-125">
            The Chronicle
          </h2>
          
          <div className="space-y-10 text-left">
            <div className="bg-[#050505] p-12 border border-white/10 hover:border-white/30 transition-all duration-700 relative overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.02)]">
              <div className="relative z-10">
                <h3 className="text-xl font-light text-white mb-6 uppercase tracking-[0.3em] magical-glow">RIT Biz Novexa</h3>
                <p className="text-lg text-white font-light leading-relaxed tracking-wide italic opacity-95">
                  "RIT Biz Novexa is a dynamic symposium organized by the Department of Computer Science and Business Systems at Ramco Institute of Technology."
                </p>
                <div className="h-px w-24 bg-white/40 my-8 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                <p className="text-white font-light leading-relaxed tracking-wide opacity-90">
                  The symposium features technical and non-technical events including coding, paper presentations, marketing, and interactive competitions. Join us where creativity meets technology.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                <Info className="w-48 h-48 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#050505] p-10 border border-white/10 hover:border-white/30 transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.01)]">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-4 font-bold magical-glow">Venue</p>
                <p className="text-white font-medium tracking-widest uppercase opacity-100">Ramco Institute of Technology, Rajapalayam</p>
              </div>
              <div className="bg-[#050505] p-10 border border-white/10 hover:border-white/30 transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.01)]">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-4 font-bold magical-glow">Event Date</p>
                <p className="text-white font-medium tracking-widest uppercase opacity-100">10th April 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
