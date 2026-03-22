import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { hotels } from '../data/content';

const Destinations = () => {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
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
        
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 1.5 }, 1024: { slidesPerView: 2.5 } }} className="overflow-visible">
          {hotels.map((h) => (
            <SwiperSlide key={h.id}>
              <Link to={`/hotel/${h.id}`} className="block relative rounded-[2rem] aspect-[4/5] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <img src={h.mainImage} alt={h.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00201c] via-[#00201c]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 self-start mb-4 border border-white/20">
                    <span className="text-white text-[10px] font-black tracking-widest uppercase">{h.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">{h.name}</h3>
                  <p className="text-primary font-semibold flex items-center gap-2 drop-shadow-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {h.location}
                  </p>
                  <div className="w-full bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <p className="text-white text-sm font-light mb-2">{h.shortDesc}</p>
                     <p className="text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        Ver Detalles <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
