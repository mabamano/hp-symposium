import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-widest uppercase magical-glow">
            Ministry
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-80">
            Have questions? Our officials are here to assist you through the shadows
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: Mail, title: 'Owl Post Address', values: ['biznovexa@college.edu', 'info@biznovexa.com'] },
              { icon: Phone, title: 'Floo Network', values: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX'] },
              { icon: MapPin, title: 'Marked Location', values: ['Your College Name', 'City, State - PIN CODE'] },
            ].map((item, i) => (
              <div key={i} className="bg-[#050505] p-10 border border-white/5 transition-all duration-700 hover:border-white/20 group">
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <item.icon className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-4 uppercase tracking-[0.2em] group-hover:magical-glow transition-all duration-500">{item.title}</h3>
                    {item.values.map((v, j) => (
                      <p key={j} className="text-white/40 font-light group-hover:text-white/80 transition-colors tracking-widest text-sm">{v}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#050505] p-12 border border-white/5 hover:border-white/20 transition-all duration-700">
            <h3 className="text-2xl font-light text-white mb-10 uppercase tracking-widest magical-glow">Send an Invocation</h3>
            <form className="space-y-8">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light tracking-widest text-sm"
              />
              <textarea
                rows={4}
                placeholder="YOUR MESSAGE"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all resize-none font-light tracking-widest text-sm"
              />
              <button
                type="submit"
                className="w-full py-5 bg-white text-black text-xs uppercase font-bold tracking-[0.4em] flex items-center justify-center space-x-3 hover:bg-gray-200 transition-all duration-500 group shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <Send className="w-4 h-4" />
                <span>Cast Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
