import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { hotels, boats } from '../data/content';

const boatData = boats[0];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hoteles y Tours Caribe Colombiano | Isla Fuerte, Coveñas, Tolú, San Bernardo | Vaniexpress</title>
        <meta name="description" content="Descubre los mejores hoteles y hospedaje en Isla Fuerte, Coveñas, Moñitos, Tolú, San Bernardo del Viento y San Antero. Tours, actividades y transporte privado." />
        <meta name="keywords" content="hoteles isla fuerte, hoteles coveñas, hoteles moñitos, hospedaje san bernardo del viento, cabañas tolu, playas del frances, turismo caribe colombia, vaniexpress destinos" />
      </Helmet>

      <main className="bg-surface text-on-surface font-body pb-32">

        {/* ─── Hero con Video — Full Viewport ─── */}
        <header className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/assets/HOTELLAPLAYITAISLAFUERTE.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>

          <div className="relative z-10 px-8 md:px-16 max-w-[1920px] mx-auto w-full pt-28">
            <h1 className="text-white font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5 leading-[0.95] max-w-3xl">
              Hoteles y Actividades<br />en el Caribe Colombiano
            </h1>
            <p className="text-white/75 text-base max-w-xl leading-relaxed font-light mb-8">
              Propiedades boutique frente al mar. Reserva con Vaniexpress e incluye transporte privado en todos los paquetes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://wa.me/573128869088?text=Hola,%20quiero%20reservar%20en%20un%20hotel%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="w-fit inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-all whitespace-nowrap"
              >
                Reservar Ahora <ArrowRight />
              </a>
              <a href="#hoteles" className="w-fit inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all whitespace-nowrap">
                Ver Cuadrícula
              </a>
            </div>
          </div>
        </header>

        {/* ─── Galería de Hoteles (Cuadrícula Asimétrica) ─── */}
        <section id="hoteles" className="py-12 md:py-24 px-[25px] md:px-[80px] max-w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface leading-tight font-headline">Catálogo de Estancias</h2>
              <p className="text-on-surface-variant text-base font-light mt-3 max-w-xl">
                Propiedades verificadas con todos los servicios incluidos. Reserva hoy tu transporte privado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {hotels.map((h, i) => {
              // Lógica de span dinámico con proporciones matemáticas para alineación perfecta de fila
              const isLast = i === hotels.length - 1;
              const isEven = hotels.length % 2 === 0;

              let spanClass = "";
              let heightClass = "h-[350px] md:h-[500px]";

              if (isLast && !isEven) {
                // Último item solo: Panorámico
                spanClass = `col-span-12 ${heightClass}`;
              } else {
                const isLarge = i % 4 === 0 || i % 4 === 3;
                spanClass = isLarge
                  ? `col-span-12 md:col-span-8 ${heightClass}`
                  : `col-span-12 md:col-span-4 ${heightClass}`;
              }

              return (
                <Link
                  key={h.id}
                  to={`/hotel/${h.id}`}
                  className={`group relative overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 ${spanClass}`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    {h.mainImage ? (
                      <img src={h.mainImage} alt={`Hotel ${h.name} en ${h.location} - Reserva y Transporte con Vaniexpress`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    ) : (
                      <video src={h.videos?.[0]} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block">{h.location}</span>
                    <h3 className="font-headline text-2xl font-extrabold mb-3">{h.name}</h3>
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-primary group-hover:border-primary transition-colors">
                      Explorar <ArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ─── ALQUILER DE BOTE PRIVADO (COVEÑAS) ─── */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden mx-4 md:mx-16 rounded-[3rem] mb-12 md:mb-24 shadow-2xl relative">
          <div className="max-w-[1920px] mx-auto px-8 md:px-16 relative z-10">
            <div className="flex flex-col items-start text-left">
              
              {/* Contenido Texto */}
              <div className="w-full lg:w-3/4 mb-10">
                <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  VIP Coveñas
                </span>
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[0.85]">
                   Bote <span className="text-primary italic">Privado</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-6 font-light max-w-3xl">
                  {boatData.description}
                </p>
              </div>

              {/* VIDEO INTEGRADO - CENTRADO */}
              <div className="w-full max-w-4xl mb-12 mx-auto">
                <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl bg-black border-4 border-white/10 group">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                    <source src={boatData.videoVertical} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className="text-primary font-black text-[10px] tracking-[0.5em] uppercase">Private Sea Experience</span>
                  </div>
                </div>
              </div>

              {/* Características y CTA */}
              <div className="w-full lg:w-3/4">
                <div className="flex flex-wrap gap-x-12 gap-y-4 mb-12">
                  {boatData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-bold text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-start pt-6 border-t border-white/10">
                  <a
                    href={`https://wa.me/573128869088?text=Hola,%20me%20interesa%20el%20servicio%20de%20bote%20privado%20en%20Coveñas`}
                    target="_blank" rel="noreferrer"
                    className="group bg-primary text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-white hover:text-slate-900 transition-all inline-flex items-center justify-center gap-4 text-xs uppercase tracking-widest"
                  >
                    Cotizar Ahora <ArrowRight />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full"></div>
        </section>

        {/* ─── Actividades ─── */}
        <section className="bg-surface-container py-12 md:py-24 px-4 md:px-16 rounded-3xl mx-4 md:mx-16 shadow-inner mb-12 md:mb-24">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Experiencias Caribeñas</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-on-surface mb-8 leading-tight">
                Más allá del horizonte
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow text-2xl">⛵</div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface mb-1">Paseo en Yate &amp; Snorkel</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">Navega hacia Isla Fuerte e Isla Palma en yate privado con tripulación experta.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow text-2xl">🤿</div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface mb-1">Buceo y Snorkel VIP</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">Explora los arrecifes de coral únicos con guía certificado.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow text-2xl">🌿</div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface mb-1">Ecoturismo</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">Observa la fauna nativa y los perezosos en su hábitat natural.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow text-2xl">🏖️</div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface mb-1">Playas Vírgenes</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">Relájate en las playas más exclusivas y tranquilas del Caribe.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/573128869088?text=Hola,%20quiero%20planear%20una%20experiencia%20VIP%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="mt-10 bg-primary text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-teal-700 hover:shadow-lg transition-all text-sm"
              >
                Personalizar Experiencia <ArrowRight />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5 pointer-events-none">
              <div className="space-y-5">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img src="/assets/ACTIVIDADES1.webp" alt="Paseo en yate y snorkel VIP en Isla Fuerte con Vaniexpress" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img src="/assets/HOTELISLABONITAACTIVIDADES.webp" alt="Ecoturismo y avistamiento de perezosos en los manglares - Vaniexpress" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-5 mt-12">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img src="/assets/ACTIVIDADES2.webp" alt="Yates de lujo y transporte para turismo en Coveñas y Tolú - Vaniexpress" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img src="/assets/HOTELISLABONITAACTIVIDADES1.webp" alt="Playas vírgenes del Caribe colombiano y excursiones exclusivas" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Final ─── */}
        <section className="px-4 md:px-16 max-w-[1920px] mx-auto">
          <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 tracking-tighter">¿Ya tienes en mente tu destino?</h2>
              <p className="text-teal-100 text-base lg:text-lg mb-10 max-w-2xl mx-auto font-light">
                Escríbenos y armamos el itinerario completo — hotel + transporte privado desde cualquier ciudad de Colombia.
              </p>
              <a
                href="https://wa.me/573128869088?text=Hola,%20quiero%20un%20paquete%20hotel%20+%20transporte%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar Paquete Completo
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Destinations;
