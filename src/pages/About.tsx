import { motion } from 'motion/react';
import { CheckCircle, Star, ShieldCheck, Clock, Users, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-spiritual-white">
      <SEO 
        title="About Us" 
        description="Learn about the mission and devotion behind Divine Kashi Darshan, your trusted spiritual travel partner."
      />

      {/* Hero Section */}
      <section className="relative py-24 saffron-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading"
          >
            Our Sacred Mission
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Connecting souls to sacred destinations with devotion, trust, and excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590050752117-23a9d7fc0b57?auto=format&fit=crop&q=80&w=1000" 
                alt="Spiritual Journey" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-saffron mb-1">15+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years of Devotion</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-deep-blue font-heading">A Legacy of Faith and Service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Divine Kashi Darshan was founded with a single vision: to make the spiritual journey to India's holiest cities accessible, comfortable, and deeply meaningful for every devotee.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We understand that a pilgrimage is not just a trip; it's a soul-stirring experience. That's why we combine traditional values with modern travel standards to ensure you can focus entirely on your devotion while we handle the rest.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-saffron" />
                  <span className="font-bold text-deep-blue">100% Authentic</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-saffron" />
                  <span className="font-bold text-deep-blue">Safety First</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-saffron" />
                  <span className="font-bold text-deep-blue">Senior Friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-saffron" />
                  <span className="font-bold text-deep-blue">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 font-heading">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Devotion",
                desc: "We treat every guest like a fellow devotee, ensuring the spiritual sanctity of your journey.",
                icon: <Star className="text-gold" size={40} />
              },
              {
                title: "Trust",
                desc: "Transparent pricing and verified services. No hidden costs, only pure experiences.",
                icon: <ShieldCheck className="text-gold" size={40} />
              },
              {
                title: "Excellence",
                desc: "From AC transport to VIP darshan, we provide the highest standard of service.",
                icon: <CheckCircle className="text-gold" size={40} />
              }
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
