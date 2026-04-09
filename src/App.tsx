import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import FloatingParticles from './components/FloatingParticles';
import MagicalCursor from './components/MagicalCursor';
import MusicPlayer from './components/MusicPlayer';
import IntroOverlay from './components/IntroOverlay';

function MainApp() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    if (showIntro && location.pathname === '/') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro, location.pathname]);

  return (
    <div className="relative bg-black text-white overflow-x-hidden min-h-screen">
      {showIntro && location.pathname === '/' && (
        <IntroOverlay onComplete={() => setShowIntro(false)} />
      )}
      <FloatingParticles />
      <MagicalCursor />
      <MusicPlayer />

      <Routes>
        <Route path="/" element={<Home isIntroComplete={!showIntro} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
