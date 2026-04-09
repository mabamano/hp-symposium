import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative">
      {/* Subtle Background Image */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/bg/bg.jpeg')" }}
      />
      
      <Hero />
    </div>
  );
}
