import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import SEO from '../components/SEO';

export default function Packages() {
  const packages = [
    {
      title: "Varanasi Darshan Package",
      duration: "2N/3D",
      location: "Varanasi",
      price: "8,499",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["Ganga Aarti Experience", "Kashi Vishwanath Darshan", "Sunrise Boat Ride", "Sarnath Excursion"]
    },
    {
      title: "Ayodhya Ram Mandir Package",
      duration: "1N/2D",
      location: "Ayodhya",
      price: "6,999",
      image: "https://images.unsplash.com/photo-1707150735438-2399238e8904?auto=format&fit=crop&q=80&w=800",
      highlights: ["Ram Janmabhoomi Darshan", "Hanuman Garhi Visit", "Sarayu River Aarti", "Kanak Bhawan"]
    },
    {
      title: "Prayagraj Sangam Package",
      duration: "1N/2D",
      location: "Prayagraj",
      price: "5,499",
      image: "https://images.unsplash.com/photo-1545063914-a1a6ec821acc?auto=format&fit=crop&q=80&w=800",
      highlights: ["Triveni Sangam Snan", "Allahabad Fort", "Anand Bhavan", "Hanuman Temple"]
    },
    {
      title: "Divine Spiritual Triangle Tour",
      duration: "5N/6D",
      location: "Varanasi + Ayodhya + Prayagraj",
      price: "18,999",
      image: "https://images.unsplash.com/photo-1545063914-a1a6ec821acc?auto=format&fit=crop&q=80&w=800",
      highlights: ["VIP Darshan Assistance", "Triveni Sangam Snan", "Luxury AC Transport", "All Major Temples"],
      isRecommended: true
    },
    {
      title: "Kashi + Gaya Pind Daan",
      duration: "3N/4D",
      location: "Varanasi + Gaya",
      price: "12,999",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["Pind Daan Rituals", "Vishnupad Temple", "Mangla Gauri", "Bodhi Tree Visit"]
    },
    {
      title: "Luxury Spiritual Retreat",
      duration: "4N/5D",
      location: "Varanasi + Ayodhya",
      price: "24,999",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      highlights: ["5-Star Accommodation", "Private Boat Ride", "Personal Guide", "Gourmet Satvik Food"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-spiritual-white">
      <SEO 
        title="Tour Packages" 
        description="Browse our curated spiritual tour packages for Varanasi, Ayodhya, and Prayagraj. VIP Darshan and comfortable stays included."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-deep-blue mb-4 font-heading">Our Sacred Packages</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from our handpicked itineraries designed to provide a seamless and divine pilgrimage experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="mt-20 bg-deep-blue rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-saffron rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Need a Customized Itinerary?</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              We can tailor your spiritual journey according to your preferences, group size, and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">Request Custom Package</button>
              <a 
                href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
                className="flex items-center gap-2 text-gold font-bold hover:text-white transition-colors"
              >
                <MessageCircle />
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
