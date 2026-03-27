import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full bg-[#080d15] border-t border-white/5 relative z-30">
    <div className="max-w-[1920px] mx-auto px-5 md:px-16 pt-16 pb-8">

      {/* Top grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-8 gap-y-12 mb-14 border-b border-white/10 pb-14">

        {/* Agrupamos Col 1 y Col 2 para que en mobile queden en la misma columna izquierda, pero se expandan a 2 columnas en desktop */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-12">
          
          {/* Columna 1: Brand & Contacto */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-white font-headline tracking-tighter mb-4">
              <img src="/favicon.png" alt="Vaniexpress Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow" />
              <span>VANI<span className="text-teal-400">EXPRESS</span></span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
              Agencia de tours y transporte privado por el Caribe colombiano. Isla Fuerte, Moñitos, Coveñas e Isla Palma.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573128869088?text=Hola,%20quiero%20planear%20un%20tour%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-xl font-bold text-xs md:text-sm hover:bg-teal-400 transition-colors w-max"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ¡Escríbenos YA!
            </a>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 md:mt-0">Navegación</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 text-xs md:text-sm hover:text-teal-400 transition-colors inline-block">Inicio</Link></li>
              <li><Link to="/destinos" className="text-slate-400 text-xs md:text-sm hover:text-teal-400 transition-colors inline-block">Destinos</Link></li>
              <li><Link to="/vehiculos" className="text-slate-400 text-xs md:text-sm hover:text-teal-400 transition-colors inline-block">Flota</Link></li>
            </ul>
          </div>
        </div>

        {/* Columna 3: Destinos */}
        <div className="col-span-1">
          <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6">Destinos Populares</h4>
          <ul className="columns-1 xl:columns-2 space-y-3">
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🏝 Isla Fuerte</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🌊 Moñitos</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🏖 Coveñas</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">⛵ Isla Palma</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🍃 San Bernardo</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🌅 Tolú</span></li>
            <li><span className="text-slate-400 text-xs md:text-sm w-full inline-block">🚤 Necoclí</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
        <p className="text-slate-500 text-[10px] md:text-xs text-center md:text-left">
          © 2026 Vaniexpress. Agencia de tours Caribe colombiano.
        </p>
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a href="#" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors" aria-label="Instagram Vaniexpress">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/573128869088" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors" aria-label="WhatsApp Vaniexpress">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
