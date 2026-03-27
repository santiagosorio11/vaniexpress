import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const date = new Date(review.created_at).toLocaleDateString('es-CO', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-xl h-full min-h-[250px] flex flex-col justify-between group hover:bg-white/15 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-600/50 text-slate-600/50'} drop-shadow-sm`}
              />
            ))}
          </div>
          <span className="text-white/40 text-xs font-bold tracking-wider uppercase">{date}</span>
        </div>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-light mb-6 line-clamp-4 italic">
          "{review.comment}"
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center font-bold text-white shadow-lg uppercase">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wide">{review.name}</p>
          {review.is_featured && (
            <span className="text-teal-300 text-[10px] uppercase font-bold tracking-widest bg-teal-900/40 px-2 py-0.5 rounded-full inline-block mt-1 border border-teal-500/30">
              Viajero Destacado
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
