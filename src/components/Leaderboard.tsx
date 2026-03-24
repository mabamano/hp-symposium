import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { supabase, House } from '../lib/supabase';

export default function Leaderboard() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const { data, error } = await supabase
        .from('houses')
        .select('*')
        .order('points', { ascending: false });

      if (error) throw error;
      setHouses(data || []);
    } catch (error) {
      console.error('Error fetching houses:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPoints = houses.reduce((sum, house) => sum + house.points, 0);

  return (
    <section id="leaderboard" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-8 bg-white/5 border border-white/5 mb-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Trophy className="w-16 h-16 text-white opacity-80" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow">
            House Cup
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-80">
            The eternal battle for glory and honor among the four great houses
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-2 border-white/10 border-t-white rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-6">
            {houses.map((house, index) => {
              const percentage = totalPoints > 0 ? (house.points / totalPoints) * 100 : 0;

              return (
                <div
                  key={house.id}
                  className="group relative bg-[#050505] p-10 border border-white/5 transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-8">
                      <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-xl font-light text-white/60 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-white tracking-[0.2em] group-hover:magical-glow transition-all duration-500 uppercase">
                          {house.name}
                        </h3>
                        <p className="text-sm text-white/40 italic font-light group-hover:text-white/60 transition-colors uppercase tracking-widest">{house.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-light text-white tracking-tighter group-hover:magical-glow transition-all duration-500">{house.points}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold group-hover:text-white/60 transition-colors">Points</div>
                    </div>
                  </div>

                  <div className="relative h-[2px] bg-white/5 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-white transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {index === 0 && house.points > 0 && (
                    <div className="absolute top-0 right-0 bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      Supreme Leader
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-light">
            Points are awarded for event participation and victories in the magical arena
          </p>
        </div>
      </div>
    </section>
  );
}
