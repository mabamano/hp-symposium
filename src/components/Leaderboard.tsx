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

  const getHouseGradient = (houseName: string) => {
    switch (houseName) {
      case 'Gryffindor':
        return 'from-red-900 to-red-700';
      case 'Slytherin':
        return 'from-green-900 to-green-700';
      case 'Ravenclaw':
        return 'from-blue-900 to-blue-700';
      case 'Hufflepuff':
        return 'from-yellow-700 to-yellow-600';
      default:
        return 'from-gray-800 to-gray-700';
    }
  };

  return (
    <section id="leaderboard" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950 to-blue-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <Trophy className="w-12 h-12 text-amber-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            House Cup Standings
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The eternal battle for glory and honor among the four great houses
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-6">
            {houses.map((house, index) => {
              const percentage = totalPoints > 0 ? (house.points / totalPoints) * 100 : 0;

              return (
                <div
                  key={house.id}
                  className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center text-2xl font-bold text-amber-400 border border-amber-500/30">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                          {house.name}
                        </h3>
                        <p className="text-sm text-gray-400 italic">{house.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-400">{house.points}</div>
                      <div className="text-sm text-gray-400">points</div>
                    </div>
                  </div>

                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden border border-amber-500/20">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getHouseGradient(
                        house.name
                      )} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                      style={{ width: `${percentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>

                  {index === 0 && house.points > 0 && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-amber-500/50 animate-pulse">
                      Leading!
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Points are awarded for event participation, victories, and outstanding contributions to the symposium
          </p>
        </div>
      </div>
    </section>
  );
}
