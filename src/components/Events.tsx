import { Code, FlaskConical, Brain, TrendingUp, MessageSquare, Gamepad2, Palette, Newspaper, Wand2 } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'technical' | 'non-technical' | 'creative';
  details: string;
}

const events: Event[] = [
  {
    id: 'code-wizardry',
    name: 'Code Wizardry',
    description: 'Cast your code spells in this ultimate coding challenge',
    icon: Code,
    category: 'technical',
    details: 'A high-intensity coding competition where participants solve complex algorithms and data structure problems. Show your programming prowess!',
  },
  {
    id: 'potion-logic',
    name: 'Potion Logic',
    description: 'Debug the darkest code and solve mystical problems',
    icon: FlaskConical,
    category: 'technical',
    details: 'Test your debugging skills and logical thinking. Find bugs, optimize code, and solve challenging computational problems.',
  },
  {
    id: 'ai-divination',
    name: 'AI Divination',
    description: 'Predict the future with machine learning and AI',
    icon: Brain,
    category: 'technical',
    details: 'Build innovative AI/ML models to solve real-world problems. Showcase your knowledge in neural networks, deep learning, and data science.',
  },
  {
    id: 'triwizard-pitch',
    name: 'Triwizard Pitch',
    description: 'Present your startup idea to the wizarding investors',
    icon: TrendingUp,
    category: 'non-technical',
    details: 'Pitch your innovative business idea to a panel of judges. Demonstrate your entrepreneurial spirit and convince investors of your vision.',
  },
  {
    id: 'house-debate',
    name: 'House Debate Championship',
    description: 'Battle with words in inter-house debates',
    icon: MessageSquare,
    category: 'non-technical',
    details: 'Represent your house in heated debates on technology, business, and innovation. Showcase your argumentation and public speaking skills.',
  },
  {
    id: 'spell-arena',
    name: 'Spell Casting Arena',
    description: 'Compete in the ultimate gaming tournament',
    icon: Gamepad2,
    category: 'non-technical',
    details: 'Battle in popular esports titles. Show your gaming prowess and strategic thinking in this high-energy competition.',
  },
  {
    id: 'marauders-design',
    name: "Marauder's Design Map",
    description: 'Create magical user experiences and interfaces',
    icon: Palette,
    category: 'creative',
    details: 'Design stunning UI/UX solutions for real-world problems. Showcase your creativity and understanding of user-centered design principles.',
  },
  {
    id: 'daily-prophet',
    name: 'Daily Prophet',
    description: 'Craft compelling stories and marketing campaigns',
    icon: Newspaper,
    category: 'creative',
    details: 'Create engaging content marketing campaigns. Write, design, and strategize to capture attention and drive engagement.',
  },
  {
    id: 'wand-artistry',
    name: 'Wand Artistry',
    description: 'Design mesmerizing posters and visual content',
    icon: Wand2,
    category: 'creative',
    details: 'Showcase your graphic design skills. Create stunning posters, illustrations, and visual content that captivates and inspires.',
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'technical' | 'non-technical' | 'creative'>('all');

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950 via-blue-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            The Spellbook
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your challenge and prove your mastery in these legendary competitions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'technical', 'non-technical', 'creative'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-amber-500/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 hover:border-amber-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {event.name}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>

                  <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
                    {event.category.replace('-', ' ')}
                  </div>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-400 text-sm font-medium flex items-center">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center space-x-4 mb-6">
              {(() => {
                const Icon = selectedEvent.icon;
                return <Icon className="w-12 h-12 text-amber-400" />;
              })()}
              <h3 className="text-3xl font-bold text-amber-400">{selectedEvent.name}</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{selectedEvent.details}</p>

            <div className="flex items-center justify-between">
              <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium">
                {selectedEvent.category.replace('-', ' ')}
              </span>

              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
