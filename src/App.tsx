import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Leaderboard from './components/Leaderboard';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MagicalCursor from './components/MagicalCursor';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <FloatingParticles />
      <MagicalCursor />

      <Navbar onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Events />
      <Leaderboard />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
