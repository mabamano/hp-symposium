import { 
  Code, Brain, Gamepad2, 
  Terminal, Globe, Shield, 
  Trophy, Users, BookOpen, MapPin, Clock, User
} from 'lucide-react';
import { useState } from 'react';

interface EventsProps {
  onNavigate: (section: string) => void;
}

interface Event {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'technical' | 'non-technical';
  studentCoordinators: string[];
  facultyCoordinator: string;
  venue: string;
  timing: string;
  details: string;
}

const events: Event[] = [
  // TECHNICAL EVENTS
  {
    id: 'stranger-minds',
    name: 'Stranger Minds',
    description: 'Paper Presentation',
    icon: BookOpen,
    category: 'technical',
    studentCoordinators: ['Ramya K', 'Nithish Kannan G'],
    facultyCoordinator: 'M Rama Krishnan',
    venue: 'Mechanical seminar hall',
    timing: '11.00 AM to 01.00 PM',
    details: 'Showcase your research and technical insights to a panel of experts. This paper presentation event challenges you to push the boundaries of knowledge.',
  },
  {
    id: 'spellcraft-coding',
    name: 'SpellCraft Coding',
    description: 'Coding Event',
    icon: Code,
    category: 'technical',
    studentCoordinators: ['SivaPriya', 'Santhosh G'],
    facultyCoordinator: 'M Jeya Sundari',
    venue: 'Business Analytics Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'Cast your code spells to solve complex algorithmic puzzles. Speed, efficiency, and accuracy are your ingredients for success.',
  },
  {
    id: 'slytherin-webforge',
    name: 'Slytherin WebForge',
    description: 'Web Design',
    icon: Globe,
    category: 'technical',
    studentCoordinators: ['Thanalakshmi G', 'Pradeep'],
    facultyCoordinator: 'M Shabana Fathima',
    venue: 'Data Analytics Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'Forge mesmerizing web experiences. Combine aesthetics with functionality in this high-stakes web design battle.',
  },
  {
    id: 'heist-protocol',
    name: 'Heist Protocol',
    description: 'CTF Challenge',
    icon: Shield,
    category: 'technical',
    studentCoordinators: ['Kaviya N', 'Jason Ezra'],
    facultyCoordinator: 'M PreethiRam',
    venue: 'OOPA Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'Enter the digital fortress. Hack, crack, and secure in this Capture The Flag challenge designed for true cyber warriors.',
  },
  {
    id: 'cook-the-code',
    name: 'Cook the Code',
    description: 'Hackathon',
    icon: Terminal,
    category: 'technical',
    studentCoordinators: ['Gayathri Devi', 'Bala Vignesh'],
    facultyCoordinator: 'B Yazhini',
    venue: 'IT Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'Brew innovation in this intensive hackathon. Build a working prototype that solves real-world problems using your technical alchemy.',
  },

  // NON-TECHNICAL EVENTS
  {
    id: 'forbidden-arena',
    name: 'Forbidden Arena',
    description: 'Esports',
    icon: Gamepad2,
    category: 'non-technical',
    studentCoordinators: ['Ashin Sree P', 'Manoj Kumar M'],
    facultyCoordinator: 'Ereena Veerappa Dinesh',
    venue: 'Class Room',
    timing: '02.00 PM to 03.00 PM',
    details: 'Enter the arena of ultimate gaming. Battle it out in the most popular esports titles and claim your throne.',
  },
  {
    id: 'throne-of-crowns',
    name: 'Throne of Crowns',
    description: 'Geo-Politics Debate',
    icon: Users,
    category: 'non-technical',
    studentCoordinators: ['Vaishnavi V', 'Rajakaleeswaran'],
    facultyCoordinator: 'M PreethiRam',
    venue: 'Mechanical seminar hall',
    timing: '02.00 PM to 03.00 PM',
    details: 'Navigate the complex waters of global politics. Represent nations and debate issues that shape our world.',
  },
  {
    id: 'wizarding-premier-auction',
    name: 'Wizarding Premier Auction',
    description: 'IPL Auction',
    icon: Trophy,
    category: 'non-technical',
    studentCoordinators: ['Mufrin Ashika O J', 'Raja Pandiyan'],
    facultyCoordinator: 'M Jeya Sundari',
    venue: 'Data Analytics Lab',
    timing: '02.00 PM to 03.00 PM',
    details: 'Bid, strategize, and build your dream team. Experience the thrill of a high-stakes IPL auction with a magical twist.',
  },
  {
    id: 'wizards-quiz-bowl',
    name: 'Wizard’s Quiz Bowl',
    description: 'Quiz Event',
    icon: Brain,
    category: 'non-technical',
    studentCoordinators: ['Kaavyadharshini', 'Harinishanthan'],
    facultyCoordinator: 'M Rekha',
    venue: 'Business Analytics Lab',
    timing: '02.00 PM to 03.00 PM',
    details: 'Test your knowledge across realms. A battle of wits where the fastest mind with the most wisdom triumphs.',
  },
];

export default function Events({ onNavigate }: EventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow">
            The Spellbook
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-80">
            Choose your challenge and prove your mastery in these ancient competitions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'technical', 'non-technical'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-10 py-2 rounded-none uppercase text-xs tracking-[0.4em] font-bold transition-all duration-700 border ${
                filter === category
                  ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] border-white'
                  : 'bg-transparent text-white/60 hover:text-white border-white/5 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative bg-[#050505] p-10 rounded-none border border-white/5 cursor-pointer transform transition-all duration-700 hover:border-white/40 hover:bg-[#0a0a0a] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 mb-10 bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <Icon className="w-10 h-10 text-white/50 group-hover:text-white transition-all duration-700" />
                  </div>

                  <h3 className="text-2xl font-light text-white mb-6 tracking-[0.1em] group-hover:text-white group-hover:magical-glow transition-all duration-500 uppercase">
                    {event.name}
                  </h3>

                  <p className="text-white/60 mb-8 leading-relaxed font-light text-sm group-hover:text-white/80 transition-colors">{event.description}</p>

                  <div className="inline-block px-6 py-2 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[0.3em] group-hover:border-white/30">
                    {event.category.replace('-', ' ')}
                  </div>
                </div>

                <div className="absolute inset-0 border-r border-b border-transparent group-hover:border-white/10 transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0a0a0a] p-12 rounded-none border border-white/10 shadow-3xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center space-x-6 mb-8">
              {(() => {
                const Icon = selectedEvent.icon;
                return <Icon className="w-12 h-12 text-gray-300" />;
              })()}
              <h3 className="text-4xl font-light text-white tracking-tight">{selectedEvent.name}</h3>
            </div>

            <p className="text-gray-400 mb-10 leading-relaxed text-lg font-light">{selectedEvent.details}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Venue</p>
                    <p className="text-white font-light">{selectedEvent.venue}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Timing</p>
                    <p className="text-white font-light">{selectedEvent.timing}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Student Coordinators</p>
                    <p className="text-white font-light">{selectedEvent.studentCoordinators.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Faculty Coordinator</p>
                    <p className="text-white font-light">{selectedEvent.facultyCoordinator}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-8">
              <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                {selectedEvent.category.replace('-', ' ')}
              </span>

              <button
                onClick={() => {
                  setSelectedEvent(null);
                  onNavigate('register');
                }}
                className="px-8 py-3 bg-white text-black text-xs uppercase font-bold tracking-widest hover:bg-gray-200 transition-all duration-300"
              >
                Accept Challenge
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
