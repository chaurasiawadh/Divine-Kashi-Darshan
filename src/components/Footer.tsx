import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-bold font-heading leading-none">Divine Kashi</span>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold">Darshan</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Connecting souls to sacred destinations. We specialize in providing authentic and comfortable spiritual journeys across India's holiest cities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Packages', 'Destinations', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-heading">Popular Tours</h4>
            <ul className="space-y-4">
              {['Varanasi Darshan', 'Ayodhya Ram Mandir', 'Prayagraj Sangam', 'Spiritual Triangle', 'Kashi Vishwanath VIP'].map((item) => (
                <li key={item}>
                  <Link to="/packages" className="text-white/60 hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-heading">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0" />
                <span className="text-white/60">D-58/12, Sigra, Varanasi, Uttar Pradesh 221010</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" />
                <a href="tel:+919559557776" className="text-white/60 hover:text-gold transition-colors">+91 95595 57776</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" />
                <a href="mailto:aakanksha@gmail.com" className="text-white/60 hover:text-gold transition-colors">aakanksha@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Divine Kashi Darshan. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
