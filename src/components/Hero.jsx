import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/assets/ISLAPALMAVIDEO.mp4" type="video/mp4" />
      </video>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Tu Viaje al Caribe <br className="hidden md:block" />
          <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Comienza Aquí</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl font-light">
          Agencia de viajes premium con vehículos particulares y los mejores hoteles asociados en la mágica costa caribe colombiana.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
          <div className="text-left w-full md:w-auto">
            <p className="text-sm text-white/80 font-medium uppercase tracking-wider mb-1">Destino Mágico</p>
            <p className="text-2xl text-white font-semibold">Cartagena / Santa Marta</p>
          </div>
          <div className="w-full md:w-px h-px md:h-12 bg-white/20 mx-4"></div>
          
          <a
            href="https://wa.me/573000000000?text=Hola,%20me%20gustaría%20cotizar%20un%20viaje%20con%20Vaniexpress."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
