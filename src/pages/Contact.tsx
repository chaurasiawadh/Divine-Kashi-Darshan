import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-spiritual-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Divine Kashi Darshan for your spiritual tour bookings to Varanasi, Ayodhya, and Prayagraj."
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-deep-blue mb-4 font-heading">Get In Touch</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have questions about our packages or need a custom itinerary? Our spiritual travel experts are here to assist you 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-deep-blue mb-8 font-heading">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                      <Phone className="text-saffron" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Phone</p>
                      <a href="tel:+919559557776" className="text-lg font-semibold text-deep-blue hover:text-saffron transition-colors">+91 95595 57776</a>
                      <p className="text-sm text-slate-500">Mon-Sun, 24/7 Support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                      <Mail className="text-saffron" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Email</p>
                      <a href="mailto:aakanksha@gmail.com" className="text-lg font-semibold text-deep-blue hover:text-saffron transition-colors">aakanksha@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-saffron" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Office</p>
                      <p className="text-lg font-semibold text-deep-blue">D-58/12, Sigra, Varanasi, Uttar Pradesh 221010</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100">
                  <a 
                    href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    <MessageCircle />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-deep-blue mb-8 font-heading">Send an Inquiry</h3>
                
                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Travel Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Number of People</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all">
                      <option>1-2 People</option>
                      <option>3-5 People</option>
                      <option>6-10 People</option>
                      <option>Group (10+)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button className="w-full btn-primary flex items-center justify-center gap-3 text-lg">
                      <Send size={20} />
                      Submit Inquiry
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
