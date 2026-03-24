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
    ? 'bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl'
    : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg';

  const textColor = scrolled || menuOpen ? 'text-slate-900' : 'text-white drop-shadow-md';
  const accentColor = scrolled || menuOpen ? 'text-teal-600' : 'text-teal-300';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-8">
      <div className={`rounded-full transition-all duration-300 w-full max-w-4xl ${pillBase} ${menuOpen ? 'rounded-3xl' : 'rounded-full'}`}>

        {/* ── Fila principal ── */}
        <div className="flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link to="/" className={`font-black text-lg tracking-tighter whitespace-nowrap transition-colors ${textColor}`}>
            VANI<span className={accentColor}>EXPRESS</span>
          </Link>

          {/* Links — solo desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLink('/', 'Inicio')}
            {navLink('/vehiculos', 'Nuestra Flota')}
            {navLink('/destinos', 'Hoteles y Destinos')}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA — desktop */}
            <a
              href="https://wa.me/573000000000?text=Hola,%20deseo%20planear%20un%20viaje%20por%20el%20Caribe%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 whitespace-nowrap ${
                scrolled || menuOpen
                  ? 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-teal-700'
                  : 'bg-white text-teal-800 shadow-md hover:bg-teal-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Planear Viaje
            </a>

            {/* Hamburger — solo mobile */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menú"
              className={`md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full transition-all gap-[5px] ${
                menuOpen ? 'bg-slate-100' : 'bg-white/20'
              }`}
            >
              <span className={`block w-4 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'bg-slate-800 rotate-45 translate-y-[6.5px]' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
              <span className={`block w-4 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
              <span className={`block w-4 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'bg-slate-800 -rotate-45 -translate-y-[6.5px]' : scrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>

        {/* ── Menú expandido mobile ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 px-5 pb-5 pt-4 flex flex-col gap-4">
            {/* Links */}
            <div className="flex flex-col gap-4">
              {[
                { path: '/', label: 'Inicio' },
                { path: '/vehiculos', label: 'Nuestra Flota' },
                { path: '/destinos', label: 'Hoteles y Destinos' },
              ].map(({ path, label }) => {
                const active = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-sm transition-all ${
                      active ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                );
              })}
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/573000000000?text=Hola,%20deseo%20planear%20un%20viaje%20por%20el%20Caribe%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-bold text-sm rounded-2xl hover:bg-teal-700 transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Planear Viaje por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
