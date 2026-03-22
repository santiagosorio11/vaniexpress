import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { hotels } from '../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const LocationPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hoteles y Tours Caribe Colombiano | Isla Fuerte, Coveñas, Moñitos | Vaniexpress</title>
        <meta name="description" content="Descubre los mejores hoteles en Isla Fuerte, Coveñas, Moñitos y San Antero con Vaniexpress. Tours personalizados y transporte privado incluido." />
        <meta name="keywords" content="hoteles isla fuerte, hoteles coveñas, hoteles moñitos, tours caribe colombia, vaniexpress destinos" />
      </Helmet>

      <main className="bg-surface text-on-surface font-body pb-32">

        {/* ─── Hero con Video — Full Viewport ─── */}
        <header className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/assets/HOTELCOVEMARVIDEO.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>

          <div className="relative z-10 px-8 md:px-16 max-w-[1920px] mx-auto w-full pt-28">
            <span className="inline-block text-white/60 font-bold tracking-[0.25em] uppercase text-xs mb-5">
              Coveñas · Moñitos · Isla Fuerte · Isla Palma
            </span>
            <h1 className="text-white font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5 leading-[0.95] max-w-3xl">
              Hoteles y Actividades<br/>en el Caribe Colombiano
            </h1>
            <p className="text-white/75 text-base max-w-xl leading-relaxed font-light mb-8">
              Propiedades boutique frente al mar. Reserva con Vaniexpress e incluye transporte privado en todos los paquetes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20reservar%20en%20un%20hotel%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-all"
              >
                Reservar Ahora <ArrowRight />
              </a>
              <a href="#hoteles" className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all">
                Ver Hoteles
              </a>
            </div>
          </div>
        </header>

        {/* ─── Carrusel de Hoteles ─── */}
        <section id="hoteles" className="px-4 md:px-16 py-24 max-w-[1920px] mx-auto" style={{ overflow: 'visible' }}>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface leading-tight">Estancias de Ensueño</h2>
              <p className="text-on-surface-variant text-base font-light mt-3 max-w-xl">
                Cada propiedad ha sido verificada por nuestro equipo. Reserva con Vaniexpress e incluye el traslado privado.
              </p>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            spaceBetween={28}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            loop={true}
            style={{ overflow: 'visible', paddingBottom: '4rem', paddingTop: '0.5rem' }}
          >
            {hotels.map((h, index) => (
              <SwiperSlide key={h.id} style={{ marginTop: index % 2 !== 0 ? '3.5rem' : '0' }}>
                <article className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative bg-slate-200">
                    <img
                      src={h.mainImage}
                      alt={`${h.name} – ${h.location} | Vaniexpress`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur text-teal-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                        {h.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-primary mb-2">
                      <LocationPin />
                      <span className="text-xs font-bold uppercase tracking-widest">{h.location}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-on-surface mb-2 tracking-tight">{h.name}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 font-light">{h.shortDesc}</p>
                    <div className="mt-5 pt-5 border-t border-slate-100 flex justify-between items-center">
                      <Link to={`/hotel/${h.id}`} className="text-primary font-bold text-sm tracking-widest uppercase hover:underline underline-offset-4">
                        Explorar
                      </Link>
                      <Link to={`/hotel/${h.id}`} className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ─── Actividades ─── */}
        <section className="bg-surface-container py-24 px-4 md:px-16 rounded-3xl mx-4 md:mx-16 shadow-inner mb-24">
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
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">Explora los arrecifes de coral únicos del Caribe colombiano con guía certificado.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20reservar%20una%20actividad%20en%20el%20Caribe"
                target="_blank" rel="noreferrer"
                className="mt-10 bg-primary text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-teal-700 hover:shadow-lg transition-all text-sm"
              >
                Personalizar Experiencia <ArrowRight />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src="/assets/ACTIVIDADES1.jpeg" alt="Snorkel en Isla Fuerte – Vaniexpress" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl mt-10">
                <img src="/assets/ACTIVIDADES2.jpeg" alt="Yate Caribe colombiano – Vaniexpress" className="w-full h-full object-cover" />
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
                href="https://wa.me/573000000000?text=Hola,%20quiero%20un%20paquete%20hotel%20+%20transporte%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
