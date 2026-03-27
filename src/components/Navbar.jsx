import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLink = (path, label) => {
    const active = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return (
      <Link
        to={path}
        onClick={() => setMenuOpen(false)}
        className={`font-semibold text-sm tracking-wide transition-all hover:opacity-70 pb-0.5 ${
          active ? 'border-b-2' : ''
        } ${scrolled || menuOpen ? 'text-slate-800 border-slate-800' : 'text-white border-white'}`}
      >
        {label}
      </Link>
    );
  };

  const pillBase = scrolled || menuOpen
    ? 'bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl'
    : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg';

  const textColor = scrolled || menuOpen ? 'text-slate-900' : 'text-white drop-shadow-md';
  const accentColor = scrolled || menuOpen ? 'text-teal-600' : 'text-teal-300';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-8">
      {/* Contenedor Único que se expande */}
      <div 
        className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] w-full max-w-4xl overflow-hidden ${pillBase} 
          ${menuOpen ? 'rounded-2xl max-h-[500px]' : 'rounded-[32px] max-h-[64px]'}
        `}
      >
        {/* ── Fila principal (Siempre visible) ── */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 font-black text-xl tracking-tighter whitespace-nowrap transition-colors ${textColor}`}>
            <img src="/favicon.png" alt="Vaniexpress Logo" className="w-9 h-9 object-contain drop-shadow" />
            <span>VANI<span className={accentColor}>EXPRESS</span></span>
          </Link>

          {/* Links — solo desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLink('/', 'Inicio')}
            {navLink('/vehiculos', 'Nuestra Flota')}
            {navLink('/destinos', 'Hoteles y Destinos')}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA — desktop */}
            <a
              href="https://wa.me/573128869088?text=Hola,%20deseo%20planear%20un%20viaje%20por%20el%20Caribe%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 whitespace-nowrap ${
                scrolled || menuOpen
                  ? 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-teal-700'
                  : 'bg-white text-teal-800 shadow-md hover:bg-teal-50'
              }`}
            >
              Planear Viaje
            </a>

            {/* Hamburger — solo mobile */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menú"
              className={`md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg transition-all gap-[5px] ${
                menuOpen ? 'bg-slate-100/50' : 'bg-transparent'
              }`}
            >
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'bg-slate-800 rotate-45 translate-y-[6px]' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'bg-slate-800 -rotate-45 -translate-y-[6px]' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>

        {/* ── Contenido Expandido (Mobile) ── */}
        <div 
          className={`md:hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border-t border-slate-100/20 px-8 
            ${menuOpen ? 'opacity-100 pb-10 pt-6' : 'opacity-0 h-0 overflow-hidden'}
          `}
        >
          {/* Links */}
          <div className="flex flex-col gap-2.5 max-w-xs mx-auto">
            { [
              { path: '/', label: 'Inicio', icon: '🏠' },
              { path: '/vehiculos', label: 'Nuestra Flota', icon: '🚐' },
              { path: '/destinos', label: 'Hoteles y Destinos', icon: '🏖️' },
            ].map(({ path, label, icon }) => {
              const active = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    active 
                      ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-[1.01]' 
                      : 'bg-slate-500/5 text-slate-700 hover:bg-slate-500/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{icon}</span>
                    {label}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              );
            })}
          </div>

          {/* Separador */}
          <div className="h-px bg-slate-200/50 my-6 max-w-xs mx-auto"></div>

          {/* CTA WhatsApp Mobile */}
          <div className="max-w-xs mx-auto">
            <a
              href="https://wa.me/573128869088?text=Hola,%20deseo%20planear%20un%20viaje%20por%20el%20Caribe%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-gradient-to-r from-primary to-teal-500 text-white font-black text-sm rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Planear mi Viaje VIP
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
