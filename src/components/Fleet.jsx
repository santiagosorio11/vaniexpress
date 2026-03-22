import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { vehicles } from '../data/content';

const Fleet = () => {
  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Transporte VIP</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">Flota <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00A896]">Premium</span></h2>
          </div>
          <div className="max-w-md text-slate-500 font-light">
            <p>Confort total en vehículos climatizados y último modelo. Tu travesía en la costa merece lo mejor.</p>
          </div>
        </div>
        
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-12">
          {vehicles.map((v) => (
            <SwiperSlide key={v.id}>
              <div className="h-full bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-slate-100 group flex flex-col shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.3)]">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 transition-opacity duration-300"></div>
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">{v.capacity}</span>
                  </div>
                  <h3 className="absolute bottom-4 left-4 z-20 text-2xl font-bold text-white leading-tight">{v.name}</h3>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between relative bg-white">
                  <div>
                    <p className="text-slate-500 mb-6 font-light leading-relaxed">{v.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                       {v.specs.slice(0, 3).map((spec, i) => (
                          <span key={i} className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">✓ {spec}</span>
                       ))}
                    </div>
                  </div>
                  <a href={`https://wa.me/573000000000?text=Hola,%20busco%20información%20del%20vehículo%20${v.name}`} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-800 hover:text-white hover:bg-primary px-6 py-4 rounded-xl font-bold transition-all group-hover:bg-primary group-hover:text-white">
                    Reservar Ahora
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fleet;
