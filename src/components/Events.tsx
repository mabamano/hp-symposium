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
  image: string;
  prizePool: string[];
  teamSize: string;
  rulebook?: string;
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
    details: 'Stranger Minds is a technical paper presentation event designed to evaluate participants’ knowledge, research ability, presentation skills, and innovation in emerging technologies. Participants can choose any one topic from the given list of 10 topics, prepare a presentation, and present it on the day of the symposium.',
    image: '/images/events/paper.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: '1 - 3 members',
    rulebook: '/docs/paper.pdf'
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
    details: 'This is a coding competition conducted through a dedicated website platform. The event tests participants\' programming knowledge, debugging skills, and problem-solving ability. Participants will complete all rounds on the website within the given time limits.',
    image: '/images/events/coding.png',
    prizePool: ['Cash Prize + Certificate', 'Cash Prize + Certificate', 'Participation Certificates'],
    teamSize: '1 - 3 members',
    rulebook: '/docs/coding.pdf'
  },
  {
    id: 'slytherin-webforge',
    name: 'Slytherin WebForge',
    description: 'Web Design',
    icon: Globe,
    category: 'technical',
    studentCoordinators: ['Thanalakshmi G', 'Pradeep K'],
    facultyCoordinator: 'M Shabana Fathima',
    venue: 'Data Analytics Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'This is a web designing competition that tests creativity, UI/UX skills, and logical thinking. Participants will create modern and responsive web interfaces using frontend technologies. AI tools like ChatGPT are allowed, but participants must understand and explain their work.',
    image: '/images/events/web.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: 'Individual / Team of 2',
    rulebook: '/docs/web.pdf'
  },
  {
    id: 'heist-protocol',
    name: 'Heist Protocol',
    description: 'CTF Challenge',
    icon: Shield,
    category: 'technical',
    studentCoordinators: ['Kaviya N', 'Kathirvel G'],
    facultyCoordinator: 'M Preethi Ram',
    venue: 'OOPS Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'This is a technical Capture The Flag competition designed to test participants\' cybersecurity skills, problem-solving abilities, reverse engineering expertise, and quick thinking under pressure. The event follows a Squid Game theme, where participants must survive multiple rounds by solving progressively difficult security challenges.',
    image: '/images/events/ctf.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: '1 - 3 members',
    rulebook: '/docs/ctf.pdf'
  },
  {
    id: 'cook-the-code',
    name: 'Cook the Code',
    description: 'Hackathon',
    icon: Terminal,
    category: 'technical',
    studentCoordinators: ['Gayathri Devi', 'Jason Ezra'],
    facultyCoordinator: 'B Yazhini',
    venue: 'IT Lab',
    timing: '11.00 AM to 01.00 PM',
    details: 'Problem Statement will be given at the start of the event. All code and designs must be created during the hackathon. Use of pre-built projects is strictly not allowed. Open-source libraries and APIs can be used.',
    image: '/images/events/hack.png',
    prizePool: ['Cash Prize + Certificate', 'Cash Prize + Certificate', 'Participation Certificate(Hard copy)'],
    teamSize: '1 - 3 members'
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
    details: 'Battle Royale format conducted online (Round 1) and Offline Finals Clown Squad (Round 2). Gameplay will test coordination and strategy.',
    image: '/images/events/esports.png',
    prizePool: ['₹2500 Cash Prize + Certificate', '₹1500 Cash Prize + Certificate', 'Participation Certificate'],
    teamSize: 'Team Event',
    rulebook: '/docs/esports.pdf'
  },
  {
    id: 'throne-of-crowns',
    name: 'Throne of Crowns',
    description: 'Geo-Politics Debate',
    icon: Users,
    category: 'non-technical',
    studentCoordinators: ['Vaishnavi V', 'Rajakaleeswaran S'],
    facultyCoordinator: 'M PreethiRam',
    venue: 'Mechanical seminar hall',
    timing: '02.00 PM to 03.00 PM',
    details: 'Throne of Crowns is an intellectual debate competition where participants engage in a battle of words, logic, and reasoning. The event tests critical thinking, presence of mind, confidence, structured argument building, and rebuttal skills. Topics will be revealed on the spot.',
    image: '/images/events/debate.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: '2 - 3 members (6 teams per topic)',
    rulebook: '/docs/debate.pdf'
  },
  {
    id: 'wizarding-premier-auction',
    name: 'Wizarding Premier Auction',
    description: 'IPL Auction',
    icon: Trophy,
    category: 'non-technical',
    studentCoordinators: ['Mufrin Ashika O J', 'Raja Pandiyan P'],
    facultyCoordinator: 'M Jeya Sundari',
    venue: 'Data Analytics Lab',
    timing: '02.00 PM to 03.00 PM',
    details: 'Experience the thrill of a high-stakes IPL auction. Bid, strategize, and build your dream team within budget limits. Random shuffle method for team formation.',
    image: '/images/events/auction.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: '2 - 4 members'
  },
  {
    id: 'wizards-quiz-bowl',
    name: 'Wizard’s Quiz Bowl',
    description: 'Quiz Event',
    icon: Brain,
    category: 'non-technical',
    studentCoordinators: ['Kaavyadharshini', 'Bala Vignesh S'],
    facultyCoordinator: 'M Rekha',
    venue: 'Business Analytics Lab',
    timing: '02.00 PM to 03.00 PM',
    details: 'A fun non-technical quiz competition designed to test general knowledge, creativity, memory power, and quick thinking. Includes logical puzzles, picture guessing, and brain challenges.',
    image: '/images/events/quiz.png',
    prizePool: ['Shield(Team) + Certificate', 'Shield(Team) + Certificate', 'Participation certificates'],
    teamSize: '2 members',
    rulebook: '/docs/quiz.pdf'
  },
];

export default function Events({ onNavigate }: EventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow brightness-125">
            The Spellbook
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-100 drop-shadow-md underline decoration-white/10 underline-offset-8">
            Ancient scripts of innovation waiting to be mastered. Choose your destiny among the magical realms.
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

                  <h3 className="text-xl md:text-2xl font-light text-white mb-4 tracking-[0.2em] group-hover:magical-glow transition-all duration-700 uppercase drop-shadow-md">
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
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center">
                {(() => {
                  const Icon = selectedEvent.icon;
                  return <Icon className="w-8 h-8 text-gray-300" />;
                })()}
              </div>
              <div>
                <h3 className="text-3xl font-light text-white tracking-tight uppercase">{selectedEvent.name}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1">{selectedEvent.description}</p>
              </div>
            </div>

            <div className="mb-10 aspect-video w-full overflow-hidden border border-white/5 bg-[#050505] relative group/img">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.name}
                className="w-full h-full object-cover opacity-60 group-hover/img:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-light">{selectedEvent.details}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Venue</p>
                    <p className="text-white text-sm font-light">{selectedEvent.venue}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Timing</p>
                    <p className="text-white text-sm font-light">{selectedEvent.timing}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Prize Pool</p>
                    <div className="space-y-1">
                      {selectedEvent.prizePool.map((prize, idx) => (
                        <p key={idx} className="text-white text-sm font-light">
                          <span className="text-white/30 mr-2">{idx + 1}.</span> {prize}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Team Details</p>
                    <p className="text-white text-sm font-light">{selectedEvent.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Coordinators</p>
                    <div className="space-y-1">
                      <p className="text-white text-sm font-light"><span className="text-white/30 mr-2">Std:</span> {selectedEvent.studentCoordinators.join(', ')}</p>
                      <p className="text-white text-sm font-light"><span className="text-white/30 mr-2">Fac:</span> {selectedEvent.facultyCoordinator}</p>
                    </div>
                  </div>
                </div>
                {selectedEvent.rulebook && (
                  <button
                    onClick={() => window.open(selectedEvent.rulebook, '_blank')}
                    className="w-full mt-4 py-3 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Rulebook</span>
                  </button>
                )}
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
