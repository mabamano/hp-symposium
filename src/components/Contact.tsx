import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-950 to-purple-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Ministry of Magic
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? Our ministry officials are here to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Owl Post Address</h3>
                  <p className="text-gray-400">biznovexa@college.edu</p>
                  <p className="text-gray-400">info@biznovexa.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Floo Network</h3>
                  <p className="text-gray-400">+91 XXXXX XXXXX</p>
                  <p className="text-gray-400">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Your College Name</p>
                  <p className="text-gray-400">City, State - PIN CODE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg text-black font-bold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-[1.02] transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
