import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow brightness-125">
            Ministry
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-100 drop-shadow-md underline decoration-white/10 underline-offset-8">
            Have questions? Our officials are here to assist you through the shadows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Mail, title: 'Owl Post Address', values: ['techphoenix2026@gmail.com'] },
            { 
              icon: Phone, 
              title: 'Floo Network', 
              values: [
                'Yashwin V: +91 8248818119', 
                'Gowtham P: +91 7845491973', 
                'Suchithra S: +91 6380196684', 
                'Vaishnavi V: +91 8056465490'
              ] 
            },
            { icon: MapPin, title: 'Marked Location', values: ['Ramco Institute of Technology', 'Rajapalayam, Tamil Nadu'] },
          ].map((item, i) => (
            <div key={i} className="bg-[#050505] p-12 border border-white/5 transition-all duration-700 hover:border-white/20 group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <item.icon className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-light text-white mb-6 uppercase tracking-[0.2em] transition-all duration-500 underline decoration-white/5 magical-glow-mobile">
                  {item.title}
                </h3>
                <div className="space-y-3">
                  {item.values.map((v, j) => (
                    <p key={j} className="text-white/80 font-light group-hover:text-white transition-colors tracking-widest text-sm leading-relaxed drop-shadow-sm">
                      {v}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                <item.icon className="w-32 h-32 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
