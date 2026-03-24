import { useState, useEffect } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { supabase, House } from '../lib/supabase';

export default function Registration() {
  const [step, setStep] = useState<'form' | 'sorting' | 'success'>('form');
  const [houses, setHouses] = useState<House[]>([]);
  const [assignedHouse, setAssignedHouse] = useState<House | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    events: [] as string[],
  });

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    const { data } = await supabase.from('houses').select('*');
    if (data) setHouses(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStep('sorting');

    setTimeout(async () => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)];
      setAssignedHouse(randomHouse);

      try {
        const { error } = await supabase.from('registrations').insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          house_id: randomHouse.id,
          events: formData.events,
        });

        if (error) throw error;

        setTimeout(() => {
          setStep('success');
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error registering:', error);
        setLoading(false);
      }
    }, 3000);
  };

  const eventOptions = [
    'Stranger Minds',
    'SpellCraft Coding',
    'Slytherin WebForge',
    'Heist Protocol',
    'Cook the Code',
    'Forbidden Arena',
    'Throne of Crowns',
    'Wizarding Premier Auction',
    'Wizard’s Quiz Bowl',
  ];

  const toggleEvent = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((e) => e !== event)
        : [...prev.events, event],
    }));
  };

  return (
    <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow">
            Owl Post
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-80">
            Bind your soul to the magical symposium. Your journey into the dark arts of innovation begins here.
          </p>
        </div>

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="bg-[#050505] p-12 border border-white/5 shadow-3xl hover:border-white/10 transition-all duration-700">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-80 magical-glow">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
                    placeholder="WIZARD NAME"
                  />
                </div>

                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-80 magical-glow">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
                    placeholder="OWL.POST@DOMAIN.COM"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-80 magical-glow">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-80 magical-glow">College/University</label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
                    placeholder="INSTITUTION"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-6 opacity-80 magical-glow">Select Challenges</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {eventOptions.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => toggleEvent(event)}
                      className={`px-4 py-3 text-[10px] tracking-widest uppercase font-bold text-left transition-all duration-500 border ${
                        formData.events.includes(event)
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-black text-xs uppercase font-bold tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-gray-200 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send className="w-4 h-4" />
                <span>Bind the Covenant</span>
              </button>
            </div>
          </form>
        )}

        {step === 'sorting' && (
          <div className="bg-[#050505] p-24 border border-white/10 text-center animate-fadeIn shadow-[0_0_50px_rgba(255,255,255,0.02)]">
            <div className="mb-14">
              <div className="inline-block relative">
                <Loader2 className="w-24 h-24 text-white animate-spin opacity-40 font-thin" />
                <div className="absolute inset-0 bg-white/10 blur-3xl animate-pulse" />
              </div>
            </div>
            <h3 className="text-4xl font-light text-white mb-8 uppercase tracking-[0.3em] magical-glow">The Sorting Has Begun...</h3>
            <p className="text-white/60 text-xl font-light italic max-w-lg mx-auto leading-relaxed drop-shadow-md">
              "The Elder Wand, the Resurrection Stone, the Cloak of Invisibility... 
              where do you belong in this triangle of power?"
            </p>
          </div>
        )}

        {step === 'success' && assignedHouse && (
          <div className="bg-[#050505] p-24 border border-white/10 text-center animate-fadeIn shadow-[0_0_60px_rgba(255,255,255,0.03)]">
            <div className="mb-14">
              <CheckCircle className="w-24 h-24 text-white mx-auto opacity-60 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
            </div>
            <h3 className="text-6xl font-light text-white mb-8 uppercase tracking-[0.2em] magical-glow">{assignedHouse.name}</h3>
            <p className="text-3xl text-white/70 mb-12 italic font-light font-serif">"{assignedHouse.description}"</p>
            <div className="p-10 bg-white/5 border border-white/10 mb-12">
              <p className="text-xl text-white/80 font-light leading-relaxed tracking-wide">
                You have been marked for <span className="text-white font-bold tracking-[0.2em] uppercase magical-glow">BIZNOVEXA</span>.
                <br />
                The shadows await your arrival. Watch the horizon for your final instructions.
              </p>
            </div>
            <button
              onClick={() => {
                setStep('form');
                setFormData({ name: '', email: '', phone: '', college: '', events: [] });
                setAssignedHouse(null);
              }}
              className="px-16 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Return to Shadows
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
