import React, { useState } from 'react';
import { Star, X, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const ReviewForm = ({ isOpen, onClose, onReviewAdded }) => {
  const [formData, setFormData] = useState({ name: '', comment: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const { data, error: sbError } = await supabase
        .from('reviews')
        .insert([
          {
            name: formData.name,
            comment: formData.comment,
            rating: formData.rating,
            // Las reseñas nuevas no son destacadas por defecto, a menos que quieras
            // que ingresen directamente a recientes.
          }
        ])
        .select();

      if (sbError) throw sbError;
      
      onReviewAdded(data[0]);
      setFormData({ name: '', comment: '', rating: 5 });
      onClose();
    } catch (err) {
      console.error(err);
      setError('Hubo un error al enviar tu reseña. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-headline text-2xl font-bold text-white mb-2">Cuéntanos tu experiencia</h3>
        <p className="text-white/60 text-sm mb-6">Tu opinión nos ayuda a mejorar y a que otros viajeros se animen a conocer el Caribe con Vaniexpress.</p>

        {error && <div className="bg-red-500/20 text-red-200 p-3 rounded-lg text-sm mb-4 border border-red-500/30">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Calificación</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-700 text-slate-700'} transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Tu Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Comentario</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm min-h-[120px] resize-none"
              placeholder="¿Qué tal fue tu viaje con nosotros?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
            ) : (
              'Publicar Reseña'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
