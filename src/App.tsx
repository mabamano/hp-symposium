import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SortingHat from './components/SortingHat';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MagicalCursor from './components/MagicalCursor';
import MusicPlayer from './components/MusicPlayer';
import IntroOverlay from './components/IntroOverlay';

function MainApp() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();
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

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'sorting-hat') {
      navigate('/sorting-hat');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden min-h-screen">
      {showIntro && location.pathname === '/' && (
        <IntroOverlay onComplete={() => setShowIntro(false)} />
      )}
      <FloatingParticles />
      <MagicalCursor />
      <MusicPlayer />

      <Navbar onNavigate={handleNavigate} />
      
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/sorting-hat" element={<SortingHat />} />
      </Routes>

      <Footer />
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
