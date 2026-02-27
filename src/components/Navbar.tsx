import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isSolid = scrolled || !isHomePage;

  return (
    <>
      {isHomePage && (
        <div className="bg-deep-blue text-white py-2 px-4 text-center text-xs md:text-sm font-bold tracking-wide fixed top-0 w-full z-[60]">
          <span className="text-gold">🔥 Limited Seats:</span> Only 4 slots left for the April Spiritual Triangle Tour. <button className="underline ml-2 hover:text-gold">Book Now</button>
        </div>
      )}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} ${isHomePage ? 'mt-8 md:mt-9' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={`text-2xl font-bold font-heading leading-none ${isSolid ? 'text-deep-blue' : 'text-white'}`}>
              Divine Kashi
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${isSolid ? 'text-saffron' : 'text-gold'}`}>
              Darshan
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-saffron' 
                    : isSolid ? 'text-deep-blue hover:text-saffron' : 'text-white hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
              className="bg-saffron text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isSolid ? 'text-deep-blue' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-deep-blue hover:bg-spiritual-white hover:text-saffron rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="https://wa.me/919559557776?text=Namaste%20%F0%9F%99%8F%20Thank%20you%20for%20contacting%20Divine%20Kashi%20Darshan.%20Please%20share%20your%20travel%20date%20and%20number%20of%20people.%20Our%20team%20will%20assist%20you%20shortly." 
                  className="w-full btn-primary flex justify-center items-center gap-2"
                >
                  <Phone size={18} />
                  Book Your Journey
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
