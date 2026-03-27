import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { supabase } from '../../lib/supabaseClient';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('destacados'); // 'destacados' | 'ultimos'
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar reseñas según filtro
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        let query = supabase.from('reviews').select('*');

        if (filter === 'destacados') {
          // Obtener 5 destacados
          query = query.eq('is_featured', true).limit(5);
        } else {
          // Obtener últimos
          query = query.order('created_at', { ascending: false }).limit(10);
        }

        const { data, error } = await query;
        if (error) throw error;
        setReviews(data || []);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [filter]);

  const handleReviewAdded = (newReview) => {
    // Si el filtro está en 'ultimos', agregamos la reseña al principio
    if (filter === 'ultimos') {
      setReviews((prev) => [newReview, ...prev].slice(0, 10)); // Mantener top 10 temporalmente
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3">La voz de nuestros clientes</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-4 leading-tight">
              Aventuras inolvidables
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light">
              Lee lo que nuestros viajeros opinan sobre sus experiencias navegando, descubriendo playas vírgenes y viajando seguro con nosotros.
            </p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-white/20 whitespace-nowrap text-sm"
          >
            Dejar una Reseña
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 bg-white/5 p-1 rounded-2xl w-fit border border-white/10">
          <button
            onClick={() => setFilter('destacados')}
            className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wide transition-all ${
              filter === 'destacados' 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Destacados
          </button>
          <button
            onClick={() => setFilter('ultimos')}
            className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wide transition-all ${
              filter === 'ultimos' 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Últimos
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {isLoading ? (
            <div className="flex justify-center items-center h-[250px]">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center flex flex-col items-center">
              <span className="text-4xl mb-4">🌴</span>
              <p className="text-white/80 font-semibold mb-2">Aún no hay reseñas aquí.</p>
              <p className="text-white/50 text-sm">¡Sé el primero en compartir tu experiencia!</p>
            </div>
          ) : (
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              grabCursor={true}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="w-full !pb-14"
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      <ReviewForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onReviewAdded={handleReviewAdded} 
      />
    </section>
  );
};

export default ReviewsSection;
