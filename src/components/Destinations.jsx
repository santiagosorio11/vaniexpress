import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import { Link } from 'react-router-dom';
import { hotels } from '../data/content';

const Destinations = () => {
  return (
    <section className="pt-24 pb-8 px-4 md:px-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Experiencias Exclusivas</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">Hoteles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00A896]">Destinos</span></h2>
            <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">
              Explora nuestra cuidada selección de hoteles asociados a lo largo de la costa, donde lujo y naturaleza se encuentran.
            </p>
          </div>
          <Link to="/destinos" className="bg-white text-slate-800 border-2 border-slate-100 hover:border-primary hover:text-primary hover:shadow-xl px-10 py-4 rounded-full font-bold transition-all shadow-sm flex-shrink-0">
            Ver Todo el Catálogo
          </Link>
        </div>
        
        <Swiper 
          modules={[Autoplay]}
          spaceBetween={40} 
          slidesPerView={1} 
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{ 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 },
            1536: { slidesPerView: 4 }
          }} 
          className="overflow-visible pb-4"
        >
          {hotels.map((h) => (
            <SwiperSlide key={h.id}>
              <Link to={`/hotel/${h.id}`} className="block relative rounded-[2rem] aspect-[4/5.5] group overflow-hidden border border-slate-200/60 bg-slate-200 mb-4 transition-all duration-500">
                <div className="absolute inset-0 w-full h-full">
                  {h.mainImage ? (
                    <img src={h.mainImage} alt={`Hotel ${h.name} ubicado en ${h.location} - Reserva tu transporte y tour con Vaniexpress`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  ) : (
                    <video src={h.videos?.[0]} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  )}
                </div>
                
                {/* Overlay Lighter for better contrast and visibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0 text-left">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 self-start mb-3 border border-white/20">
                    <span className="text-white text-[9px] font-black tracking-widest uppercase">{h.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight drop-shadow-lg">{h.name}</h3>
                  <p className="text-[#59dbc7] font-bold flex items-center gap-1.5 drop-shadow-md mb-4 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {h.location}
                  </p>
                  
                  {/* Hover Button - Reduced width and increased contrast */}
                  <div className="hidden md:block w-fit bg-primary text-white px-5 py-2.5 rounded-full border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                     <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        Ver Detalles <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swipe Indicator */}
        <div className="flex flex-col items-center justify-center mt-6 animate-pulse select-none">
          <div className="flex gap-2 mb-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
            <div className="w-12 h-1 rounded-full bg-slate-200 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
          </div>
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400">Desliza para explorar más destinos</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Destinations;
