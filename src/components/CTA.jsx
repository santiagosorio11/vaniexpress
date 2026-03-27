import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/assets/HOTELCOVEMARVIDEO.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-md">Tu Experiencia Espera</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">
          ¿Listo para empacar las maletas rumbo al Caribe?
        </h2>
        <p className="text-lg text-slate-300 font-light mb-10 max-w-2xl mx-auto">
          Nosotros nos encargamos del transporte de lujo y la mejor estadía. Tú solo preocúpate por disfrutar.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://wa.me/573128869088?text=¡Hola!%20Quiero%20planear%20un%20viaje%20con%20Vaniexpress" target="_blank" rel="noreferrer" className="bg-primary hover:bg-secondary text-white w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            Planear Viaje por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
