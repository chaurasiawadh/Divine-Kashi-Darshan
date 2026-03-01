import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-48 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800"
                alt="Special Offer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-saffron/20 mix-blend-multiply" />
            </div>

            <div className="md:w-1/2 p-8 md:p-10">
              <div className="flex items-center gap-2 text-saffron font-bold mb-4">
                <Gift size={20} />
                <span>Special Early Bird Offer</span>
              </div>
              <h3 className="text-3xl font-bold text-deep-blue mb-4 font-heading">Wait! Don't Miss Out</h3>
              <p className="text-slate-600 mb-8">
                Book your spiritual journey in the next 24 hours and get a <span className="font-bold text-saffron">FREE VIP Darshan Upgrade</span> for your entire group.
              </p>

              <div className="space-y-4">
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-full text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
