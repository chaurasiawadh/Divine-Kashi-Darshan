import { motion } from 'motion/react';
import { Star, MapPin, Clock, CheckCircle2 } from 'lucide-react';

interface PackageProps {
  key?: string | number;
  title: string;
  duration: string;
  location: string;
  price: string;
  image: string;
  highlights: string[];
  isRecommended?: boolean;
}

export default function PackageCard({ title, duration, location, price, image, highlights, isRecommended }: PackageProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
    >
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10 bg-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          Most Recommended
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1 text-xs mb-1">
            <MapPin size={14} className="text-gold" />
            {location}
          </div>
          <h3 className="text-xl font-bold font-heading">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Clock size={16} />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-gold text-gold" />
            ))}
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-saffron shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-slate-400 block">Starting from</span>
            <span className="text-2xl font-bold text-deep-blue">₹{price}</span>
          </div>
          <button className="bg-deep-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-saffron transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
