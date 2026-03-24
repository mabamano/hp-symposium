import Hero from '../components/Hero';
import About from '../components/About';
import SortingHatSection from '../components/SortingHatSection';
import Events from '../components/Events';
import Leaderboard from '../components/Leaderboard';
import Registration from '../components/Registration';
import Contact from '../components/Contact';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <SortingHatSection onNavigate={onNavigate} />
      <Events onNavigate={onNavigate} />
      <Leaderboard />
      <Registration />
      <Contact />
    </>
  );
}
