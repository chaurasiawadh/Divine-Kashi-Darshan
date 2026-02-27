import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import PackageCard from '../components/PackageCard';

export default function Home() {
  /* 
    AI Image Generation Prompts for Reference:
    1. Hero: Cinematic 3D ultra-realistic wide landscape (16:9) of Kashi Vishwanath Temple and Dashashwamedh Ghat during Evening Ganga Aarti. Hundreds of devotees holding glowing diyas. Golden hour sky, soft spiritual glow.
    2. Ayodhya: Majestic 3D ultra-detailed wide landscape (16:9) of Ram Mandir Ayodhya at early morning sunrise. Saffron sky, devotees walking toward temple, light divine aura.
    3. Prayagraj: 3D realistic wide landscape (16:9) of Triveni Sangam in Prayagraj. Wooden boat, holy dip, soft golden morning light, birds flying.
  */

  const packages = [
    {
      title: "Kashi Spiritual Tour",
      duration: "2N/3D",
      location: "Varanasi",
      price: "8,499",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["Ganga Aarti Experience", "Kashi Vishwanath Darshan", "Sunrise Boat Ride"],
      isRecommended: false
    },
    {
      title: "Ayodhya Ram Mandir Tour",
      duration: "1N/2D",
      location: "Ayodhya",
      price: "6,999",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["Ram Janmabhoomi Darshan", "Hanuman Garhi Visit", "Sarayu River Aarti"],
      isRecommended: false
    },
    {
      title: "Divine Spiritual Triangle",
      duration: "5N/6D",
      location: "Varanasi + Ayodhya + Prayagraj",
      price: "18,999",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["VIP Darshan Assistance", "Triveni Sangam Snan", "Luxury AC Transport"],
      isRecommended: true
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1920" 
            alt="Cinematic 3D render of Evening Ganga Aarti at Dashashwamedh Ghat and Kashi Vishwanath Temple in Varanasi" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-saffron/20 backdrop-blur-md text-saffron border border-saffron/30 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              Connecting Souls to Sacred Destinations
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 font-heading leading-tight">
              Divine Kashi Darshan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
              Experience divine journeys to Varanasi, Ayodhya, and Prayagraj with comfort, devotion, and trusted service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Book Your Sacred Journey Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <MessageCircle className="text-green-400" />
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "VIP Darshan",
                "Comfortable Stays",
                "Spiritual Guides",
                "Senior Friendly"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2 text-white/80 text-sm">
                  <CheckCircle size={16} className="text-gold" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">Why Choose Divine Kashi Darshan?</h2>
            <div className="w-24 h-1 saffron-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Specialized Experts",
                desc: "Decades of experience in spiritual travel planning across North India's sacred sites.",
                icon: "🛕"
              },
              {
                title: "Trusted Planning",
                desc: "Every detail from VIP darshan to puja planning is handled with utmost devotion.",
                icon: "🙏"
              },
              {
                title: "Premium Comfort",
                desc: "Handpicked hotels and AC transport ensuring a peaceful journey for all ages.",
                icon: "🏨"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-spiritual-white border border-gray-100 text-center"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-24 bg-spiritual-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">Popular Tour Packages</h2>
              <p className="text-slate-600 max-w-xl">Curated spiritual experiences designed for maximum devotion and comfort.</p>
            </div>
            <button className="mt-6 md:mt-0 text-saffron font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Packages <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <PackageCard 
                key={`pkg-${idx}`}
                title={pkg.title}
                duration={pkg.duration}
                location={pkg.location}
                price={pkg.price}
                image={pkg.image}
                highlights={pkg.highlights}
                isRecommended={pkg.isRecommended}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 saffron-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading">Ready for Your Spiritual Awakening?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of devotees who have experienced the divine with us. Limited slots available for the upcoming season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-white text-saffron px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-spiritual-white transition-all active:scale-95">
              Get a Free Quote
            </button>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-80">Call our experts</p>
                <a href="tel:+919559557776" className="text-xl font-bold hover:text-white transition-colors">+91 95595 57776</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Sticky */}
      <a 
        href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-semibold">
          Chat with us
        </span>
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
