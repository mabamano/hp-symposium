import { Sparkles, Scroll, Send, Users, Mail, Wand2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'The Great Hall', icon: Sparkles, id: 'home' },
    { name: 'The Spellbook', icon: Scroll, id: 'events' },
    { name: 'Sorting Hat', icon: Wand2, id: 'sorting-hat' },
    { name: 'House Cup', icon: Users, id: 'leaderboard' },
    { name: 'Owl Post', icon: Send, id: 'register' },
    { name: 'Ministry', icon: Mail, id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <Sparkles className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            <span className="text-2xl font-bold text-white tracking-tighter uppercase magical-glow drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              BIZNOVEXA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group flex items-center space-x-2 px-6 py-2 text-white hover:text-white transition-all duration-500 relative"
                >
                  <Icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                  <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] group-hover:magical-glow">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </button>
              );
            })}
          </div>

          <button className="md:hidden text-white/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
