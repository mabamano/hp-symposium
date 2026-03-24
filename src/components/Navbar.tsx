import { Sparkles, Scroll, Send, Users, Mail, Wand2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'The Great Hall', mobileName: 'Home', icon: Sparkles, id: 'home' },
    { name: 'The Spellbook', mobileName: 'Events', icon: Scroll, id: 'events' },
    { name: 'Sorting Hat', mobileName: 'Sorting Hat', icon: Wand2, id: 'sorting-hat' },
    { name: 'House Cup', mobileName: 'Leaderboard', icon: Users, id: 'leaderboard' },
    { name: 'Owl Post', mobileName: 'Registration', icon: Send, id: 'register' },
    { name: 'Ministry', mobileName: 'Contact', icon: Mail, id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => onNavigate('home')}>
            <img
              src="/images/events/Ramco-logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
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
                  <span className="relative z-10 text-[10px] uppercase tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] magical-glow-mobile">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out border-b border-white/5 ${isOpen
          ? 'opacity-100 translate-y-0 bg-black/95 backdrop-blur-xl'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 relative z-50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-4 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <Icon className="w-5 h-5 text-white/50" />
                <span className="text-sm font-bold uppercase tracking-widest">{item.mobileName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
