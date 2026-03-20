import { Sparkles, Scroll, Send, Users, Mail } from 'lucide-react';
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
    { name: 'House Cup', icon: Users, id: 'leaderboard' },
    { name: 'Owl Post', icon: Send, id: 'register' },
    { name: 'Ministry', icon: Mail, id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-amber-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Sparkles className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              BIZNOVEXA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-amber-400 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm font-medium">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </button>
              );
            })}
          </div>

          <button className="md:hidden text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
