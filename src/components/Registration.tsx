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
    'Code Wizardry',
    'Potion Logic',
    'AI Divination',
    'Triwizard Pitch',
    'House Debate Championship',
    'Spell Casting Arena',
    "Marauder's Design Map",
    'Daily Prophet',
    'Wand Artistry',
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
    <section id="register" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950 via-purple-950 to-black min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Owl Post
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Send your acceptance letter and join the magical symposium
          </p>
        </div>

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">College/University</label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="Your institution name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-3">Select Events (Optional)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventOptions.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => toggleEvent(event)}
                      className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        formData.events.includes(event)
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium shadow-lg shadow-amber-500/30'
                          : 'bg-gray-800/50 border border-amber-500/30 text-gray-300 hover:border-amber-500/50'
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
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg text-black font-bold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>Send via Owl Post</span>
              </button>
            </div>
          </form>
        )}

        {step === 'sorting' && (
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-12 rounded-2xl border border-amber-500/20 shadow-2xl text-center">
            <div className="mb-8">
              <div className="inline-block w-32 h-32 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full animate-pulse opacity-30" />
                <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
                  <Loader2 className="w-16 h-16 text-amber-400 animate-spin" />
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-amber-400 mb-4">The Sorting Hat is Deciding...</h3>
            <p className="text-gray-300 text-lg">
              "Hmm, difficult... very difficult. Plenty of courage, I see. Not a bad mind, either..."
            </p>
          </div>
        )}

        {step === 'success' && assignedHouse && (
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-12 rounded-2xl border border-amber-500/20 shadow-2xl text-center animate-fadeIn">
            <div className="mb-8">
              <div className="inline-block p-6 rounded-full bg-green-500/10 border-2 border-green-500/30">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-amber-400 mb-4">{assignedHouse.name}!</h3>
            <p className="text-2xl text-gray-300 mb-6 italic">"{assignedHouse.description}"</p>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-amber-500/20 mb-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                You have been accepted to <span className="font-bold text-amber-400">BIZNOVEXA</span>!
                <br />
                Your magical journey begins now. Check your email for further details.
              </p>
            </div>
            <button
              onClick={() => {
                setStep('form');
                setFormData({ name: '', email: '', phone: '', college: '', events: [] });
                setAssignedHouse(null);
              }}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg text-black font-bold hover:shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Return to Form
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
