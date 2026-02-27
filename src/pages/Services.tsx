import { motion } from 'motion/react';
import { 
  Hotel, 
  Car, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Sun, 
  Anchor, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: "Complete Tour Packages",
      desc: "All-inclusive spiritual journeys covering accommodation, transport, and guided tours.",
      icon: <MapPin className="text-saffron" size={32} />
    },
    {
      title: "Hotel Booking",
      desc: "Handpicked premium hotels near sacred sites for maximum convenience and peace.",
      icon: <Hotel className="text-saffron" size={32} />
    },
    {
      title: "VIP Darshan Assistance",
      desc: "Skip the long queues with our specialized VIP darshan assistance at major temples.",
      icon: <ShieldCheck className="text-saffron" size={32} />
    },
    {
      title: "AC Transport",
      desc: "Comfortable and sanitized AC vehicles for all your intercity and local travel.",
      icon: <Car className="text-saffron" size={32} />
    },
    {
      title: "Senior Citizen Assistance",
      desc: "Special care and facilities for elderly pilgrims, including wheelchair assistance.",
      icon: <HeartHandshake className="text-saffron" size={32} />
    },
    {
      title: "Boat Ride & Puja",
      desc: "Authentic Ganga boat rides and assistance in performing sacred rituals and pujas.",
      icon: <Anchor className="text-saffron" size={32} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-spiritual-white">
      <SEO 
        title="Our Services" 
        description="Comprehensive spiritual travel services including VIP Darshan, AC Transport, and Hotel Bookings in Varanasi."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-deep-blue mb-4 font-heading">Our Divine Services</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide a comprehensive range of services to ensure your spiritual journey is comfortable, safe, and deeply fulfilling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 group hover:border-saffron/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center mb-8 group-hover:bg-saffron group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-deep-blue mb-4 font-heading">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-saffron font-bold text-sm">
                  <CheckCircle2 size={18} />
                  Premium Quality
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlight */}
          <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-deep-blue font-heading">Why Our Services Stand Out?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "24/7 On-Ground Support",
                    desc: "Our team is available round the clock in Varanasi, Ayodhya, and Prayagraj to assist you."
                  },
                  {
                    title: "Verified Local Guides",
                    desc: "Knowledgeable guides who understand the deep history and spiritual significance of every site."
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden charges or surprise costs. What you see is what you pay for your divine journey."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-blue mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" 
                alt="3D creative composition of premium hotel and travel services for spiritual tours" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
