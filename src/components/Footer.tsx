import { Sparkles, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-amber-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                BIZNOVEXA
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where Innovation Meets Magic. A symposium that brings together the brightest minds to compete, collaborate, and create the future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">
                  The Great Hall
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-amber-400 transition-colors">
                  The Spellbook
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="text-gray-400 hover:text-amber-400 transition-colors">
                  House Cup
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Owl Post
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 border border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 border border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 border border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 border border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-500/20 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 BIZNOVEXA. All rights reserved. | Designed with magic and innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
