import { useState, useRef, useEffect } from 'react';
import { Wand2, Sparkles, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, House } from '../lib/supabase';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    houseWeights: { [key: string]: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a complex bug, your first instinct is to...",
    options: [
      { text: "Dive headfirst into the code and battle it until it's fixed.", houseWeights: { 'Gryffindor': 3, 'Slytherin': 1 } },
      { text: "Deconstruct the entire system and understand the core principles.", houseWeights: { 'Ravenclaw': 3, 'Gryffindor': 1 } },
      { text: "Methodically trace every execution path and document the findings.", houseWeights: { 'Hufflepuff': 3, 'Ravenclaw': 1 } },
      { text: "Find the most efficient, perhaps unconventional, shortcut to victory.", houseWeights: { 'Slytherin': 3, 'Hufflepuff': 1 } },
    ]
  },
  {
    id: 2,
    text: "Which realm of technology calls to your soul?",
    options: [
      { text: "The cutting-edge frontier of AI and Machine Learning.", houseWeights: { 'Ravenclaw': 3, 'Slytherin': 1 } },
      { text: "The robust fortifications of Cyber Security.", houseWeights: { 'Gryffindor': 3, 'Hufflepuff': 1 } },
      { text: "The intricate architecture of Full-Stack development.", houseWeights: { 'Hufflepuff': 3, 'Ravenclaw': 1 } },
      { text: "The ambitious world of Tech Entrepreneurship.", houseWeights: { 'Slytherin': 3, 'Gryffindor': 1 } },
    ]
  },
  {
    id: 3,
    text: "In a group project, what is your chosen role?",
    options: [
      { text: "The charismatic leader who inspires the team.", houseWeights: { 'Gryffindor': 3, 'Slytherin': 1 } },
      { text: "The brilliant researcher who provides all the answers.", houseWeights: { 'Ravenclaw': 3, 'Hufflepuff': 1 } },
      { text: "The dependable worker who ensures everything is complete.", houseWeights: { 'Hufflepuff': 3, 'Ravenclaw': 1 } },
      { text: "The strategic mastermind who coordinates every move.", houseWeights: { 'Slytherin': 3, 'Gryffindor': 1 } },
    ]
  },
  {
    id: 4,
    text: "What do you value most in a project?",
    options: [
      { text: "Impact and the courage to try something new.", houseWeights: { 'Gryffindor': 3, 'Ravenclaw': 1 } },
      { text: "Precision, knowledge, and technical excellence.", houseWeights: { 'Ravenclaw': 3, 'Slytherin': 1 } },
      { text: "Collaboration, fairness, and a job well done.", houseWeights: { 'Hufflepuff': 3, 'Gryffindor': 1 } },
      { text: "Power, efficiency, and individual achievement.", houseWeights: { 'Slytherin': 3, 'Hufflepuff': 1 } },
    ]
  }
];

export default function SortingHat() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'video' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    'Gryffindor': 0,
    'Ravenclaw': 0,
    'Hufflepuff': 0,
    'Slytherin': 0,
  });
  const [assignedHouse, setAssignedHouse] = useState<House | null>(null);
  const [houses, setHouses] = useState<House[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const { data } = await supabase.from('houses').select('*');
      if (data) setHouses(data);
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  const startQuiz = () => setStep('quiz');

  const handleAnswer = (houseWeights: { [key: string]: number }) => {
    const newScores = { ...scores };
    Object.keys(houseWeights).forEach(house => {
      newScores[house] += houseWeights[house];
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('video');
    }
  };

  useEffect(() => {
    if (step === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.error("Playback failed:", err));
    }
  }, [step]);

  const handleVideoEnd = () => {
    let winningHouseName = 'Gryffindor';
    let maxScore = -1;

    Object.keys(scores).forEach(house => {
      if (scores[house] > maxScore) {
        maxScore = scores[house];
        winningHouseName = house;
      }
    });

    let house = houses.find(h => h.name === winningHouseName);
    
    if (!house) {
      house = {
        id: winningHouseName.toLowerCase(),
        name: winningHouseName,
        description: 
          winningHouseName === 'Gryffindor' ? 'Daring, nerve and chivalry set Gryffindors apart.' :
          winningHouseName === 'Slytherin' ? 'Ambition, cunning, and resourceful leaders.' :
          winningHouseName === 'Ravenclaw' ? 'Wit and learning will always find their kind.' :
          'Just and loyal, those patient Hufflepuffs are true.',
        points: 0,
        color: 
          winningHouseName === 'Gryffindor' ? '#740001' :
          winningHouseName === 'Slytherin' ? '#1a472a' :
          winningHouseName === 'Ravenclaw' ? '#0e1a40' : '#ecb939',
        created_at: '',
        updated_at: ''
      };
    }

    setAssignedHouse(house);
    setStep('result');
  };

  return (
    <section id="sorting-hat" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 transition-all duration-1000">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {step === 'intro' && (
          <div className="text-center space-y-12 animate-fadeIn py-20">
            <div className="flex justify-center">
              <div className="relative p-10 bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-700">
                <Wand2 className="w-20 h-20 text-white/40 animate-pulse" />
                <div className="absolute inset-0 bg-white/10 blur-2xl animate-pulse opacity-50" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-widest uppercase magical-glow brightness-125">
                Sorting Ceremony
              </h2>
              <p className="text-xl text-white font-light leading-relaxed tracking-wide max-w-2xl mx-auto opacity-100 drop-shadow-lg">
                Step into the ancient ritual. Let the Sorting Hat gaze into your spirit and reveal the house where your true tech potential lies.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="px-12 py-4 bg-white text-black text-xs uppercase font-bold tracking-[0.4em] hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:scale-105"
            >
              Begin the Ceremony
            </button>
          </div>
        )}

        {step === 'quiz' && (
          <div className="space-y-12 animate-fadeIn py-10">
            <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Question {currentQuestion + 1} / {questions.length}</span>
              <div className="flex space-x-1">
                {questions.map((_, i) => (
                  <div key={i} className={`h-[2px] w-8 transition-all duration-500 ${i <= currentQuestion ? 'bg-white' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-wide mb-12 italic">
              "{questions[currentQuestion].text}"
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.houseWeights)}
                  className="group relative w-full p-8 bg-[#050505] border border-white/5 hover:border-white/40 hover:bg-white/5 text-left transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10 flex items-center space-x-6">
                    <span className="text-[10px] text-white/20 font-bold group-hover:text-white/60 transition-colors uppercase tracking-[0.2em] w-8">0{index + 1}</span>
                    <span className="text-xl text-white/60 group-hover:text-white transition-colors font-light tracking-wide">{option.text}</span>
                  </div>
                  <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'video' && (
          <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center animate-fadeIn">
            <div className="relative w-[85%] max-w-5xl h-[70vh] border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden bg-black/40 backdrop-blur-md">
              <video
                ref={videoRef}
                className="w-full h-full object-cover object-center grayscale opacity-60"
                onEnded={handleVideoEnd}
                playsInline
              >
                <source src="/hat.mp4" type="video/mp4" />
              </video>
              
              {/* Cinematic overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none" />
              
              <div className="absolute bottom-10 left-0 right-0 text-center z-10">
                <p className="text-[10px] uppercase tracking-[1em] text-white/40 animate-pulse font-bold">
                  The Sorting Hat is judging your soul...
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 'result' && assignedHouse && (
          <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
            {/* Massive Glowing Shield Asset Overlay */}
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center py-12">
              
              <button 
                onClick={() => setStep('intro')}
                className="absolute top-0 right-0 p-4 text-white/20 hover:text-white transition-colors animate-fadeIn"
                title="Restart Ceremony"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative group mb-8">
                {/* Background glow removed as per request */}
                <div className="relative z-10 animate-houseReveal">
                  <img 
                    src={`/houses/${assignedHouse.name}.png`} 
                    alt={assignedHouse.name}
                    className="w-[320px] md:w-[480px] h-auto transition-all duration-700 mix-blend-screen scale-110"
                  />
                </div>

                {/* Sparkles around the asset */}
                <div className="absolute -inset-10 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <Sparkles 
                      key={i}
                      className="absolute text-white opacity-30 animate-sparkle"
                      style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 text-center space-y-6 animate-fadeInUp delay-700 max-w-xl px-4">
                 <h3 className="text-5xl md:text-7xl font-bold text-white tracking-[0.2em] uppercase magical-glow">
                   {assignedHouse.name}
                 </h3>
                 <p className="text-lg md:text-xl text-white/60 italic font-serif leading-relaxed py-6 border-y border-white/5">
                   "{assignedHouse.description}"
                 </p>

                 <div className="flex flex-wrap justify-center gap-6 mt-10">
                  <button
                    onClick={() => {
                      setStep('intro');
                      setCurrentQuestion(0);
                      setScores({ 'Gryffindor': 0, 'Ravenclaw': 0, 'Hufflepuff': 0, 'Slytherin': 0 });
                      setAssignedHouse(null);
                    }}
                    className="px-8 py-3 border border-white/10 text-white/30 text-[10px] uppercase font-bold tracking-[0.5em] hover:border-white hover:text-white transition-all duration-700 hover:bg-white/5"
                  >
                    Re-evaluate
                  </button>
                  
                  <button
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        const el = document.getElementById('register');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="px-12 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-[0.5em] hover:bg-gray-200 transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
                  >
                    Enter the Hall
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
