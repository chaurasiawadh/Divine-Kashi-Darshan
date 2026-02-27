import { motion } from 'motion/react';
import { MapPin, ArrowRight, Info, Calendar, Sun } from 'lucide-react';
import SEO from '../components/SEO';

export default function Destinations() {
  const destinations = [
    {
      name: "Varanasi",
      tagline: "The City of Salvation",
      desc: "Varanasi, or Kashi, is one of the oldest living cities in the world. It is the spiritual heart of India, where the sacred Ganges flows and the eternal light of Shiva shines.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200",
      alt: "Cinematic 3D render of Evening Ganga Aarti at Dashashwamedh Ghat and Kashi Vishwanath Temple in Varanasi",
      tips: ["Attend the evening Ganga Aarti", "Take a sunrise boat ride", "Visit Kashi Vishwanath Temple early morning"],
      bestTime: "October to March"
    },
    {
      name: "Ayodhya",
      tagline: "Birthplace of Lord Ram",
      desc: "The sacred city of Ayodhya is witnessing a divine resurgence. Home to the magnificent Ram Mandir, it is a place of immense peace and historical significance.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200",
      alt: "Majestic 3D ultra-detailed image of Ram Mandir Ayodhya at sunrise with a divine aura",
      tips: ["Visit the Ram Janmabhoomi", "Explore Hanuman Garhi", "Take a dip in the Sarayu River"],
      bestTime: "September to April"
    },
    {
      name: "Prayagraj",
      tagline: "Sacred Confluence",
      desc: "Known for the Triveni Sangam—the meeting point of Ganga, Yamuna, and the mythical Saraswati. It is the site of the world-famous Kumbh Mela.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200",
      alt: "3D realistic image of Triveni Sangam Prayagraj at morning with boats and spiritual atmosphere",
      tips: ["Perform Sangam Snan", "Visit the Allahabad Fort", "Explore the Anand Bhavan"],
      bestTime: "November to February"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-spiritual-white">
      <SEO 
        title="Destinations" 
        description="Explore the sacred cities of Varanasi, Ayodhya, and Prayagraj with Divine Kashi Darshan."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-deep-blue mb-4 font-heading">Sacred Destinations</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the spiritual essence of India's most revered cities. Each destination offers a unique path to divinity.
            </p>
          </div>

          <div className="space-y-32">
            {destinations.map((dest, idx) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={dest.image} 
                      alt={dest.alt} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-saffron text-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <Sun size={32} />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <span className="text-saffron font-bold uppercase tracking-widest text-sm">{dest.tagline}</span>
                    <h2 className="text-5xl font-bold text-deep-blue mt-2 font-heading">{dest.name}</h2>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {dest.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 font-bold text-deep-blue">
                        <Info className="text-saffron" size={20} />
                        Travel Tips
                      </h4>
                      <ul className="space-y-2">
                        {dest.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 font-bold text-deep-blue">
                        <Calendar className="text-saffron" size={20} />
                        Best Time to Visit
                      </h4>
                      <p className="text-sm text-slate-500">{dest.bestTime}</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="btn-primary flex items-center gap-2">
                      Explore {dest.name} Packages
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
