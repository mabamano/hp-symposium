import { Sparkles, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center space-x-4 mb-8 group">
              <Sparkles className="w-8 h-8 text-white group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              <span className="text-2xl font-bold text-white tracking-tighter uppercase magical-glow">
                BIZNOVEXA
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed text-sm italic tracking-wide group-hover:text-white/90 transition-colors">
              "Until the very end." A symposium that brings together the most ambitious minds to transcend the boundaries of magic and technology.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white/40 mb-8 uppercase tracking-[0.4em] magical-glow">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'The Great Hall', href: '#home' },
                { name: 'The Spellbook', href: '#events' },
                { name: 'House Cup', href: '#leaderboard' },
                { name: 'Owl Post', href: '#register' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/50 hover:text-white transition-all duration-500 text-xs font-bold uppercase tracking-widest hover:magical-glow">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white/40 mb-8 uppercase tracking-[0.4em] magical-glow">The Eternal Network</h3>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold magical-glow">
            &copy; 2026 BIZNOVEXA. MISCHIEF MANAGED.
          </p>
        </div>
      </div>
    </footer>
  );
}
