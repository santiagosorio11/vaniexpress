import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { hotels, vehicles, specialVan, boats } from '../data/content';
import DestinationsCarousel from '../components/Destinations';

const boatData = boats[0];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const activities = [
  {
    emoji: '⛵',
    title: 'Paseo en lancha privada',
    desc: 'Navega hacia Isla Fuerte e Isla Palma con tripulación experta.',
    img: '/assets/ACTIVIDADES1.webp',
    color: 'from-sky-900/80 to-sky-700/60',
  },
  {
    emoji: '🤿',
    title: 'Buceo y Snorkel',
    desc: 'Descubre los arrecifes de coral únicos del Caribe colombiano.',
    img: '/assets/ACTIVIDADES2.webp',
    color: 'from-teal-900/80 to-teal-700/60',
  },
  {
    emoji: '🏖️',
    title: 'Playas Vírgenes',
    desc: 'Escóndete en las playas de Moñitos y San Bernardo del Viento sin aglomeraciones.',
    img: '/assets/HOTELISLABONITAACTIVIDADES1.webp',
    color: 'from-amber-900/80 to-orange-700/60',
  },
  {
    emoji: '🌿',
    title: 'Ecoturismo & Manglares',
    desc: 'Explora ecosistemas de manglares únicos en la costa de Caribe.',
    img: '/assets/HOTELISLABONITAACTIVIDADES.webp',
    color: 'from-green-900/80 to-emerald-700/60',
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Vaniexpress | Tours, Hoteles y Transporte Privado – Caribe Colombiano</title>
        <meta name="description" content="Vaniexpress: tours VIP, hoteles y transporte privado seguro por Isla Fuerte, Moñitos, Coveñas, Tolú, San Bernardo del Viento y más destinos del Caribe colombiano." />
        <meta name="keywords" content="tours caribe colombiano, hoteles exclusivos caribe, transporte privado colombia, isla fuerte, moñitos cordoba, coveñas, tolu, san bernardo del viento, playas del frances, turismo necocli, arboletes, agencia de viajes caribe, vaniexpress" />
      </Helmet>

      {/* ─── HERO ─── */}
      <header className="relative w-full h-screen overflow-hidden flex items-end pb-24 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/VIDEOHERO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
        </div>

        <div className="relative z-10 w-full px-8 md:px-16 max-w-[1920px] mx-auto pt-24">
          <h1 className="font-headline text-white text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
            Visita Colombia
          </h1>
          <p className="text-white/80 text-lg md:text-2xl max-w-2xl leading-relaxed mb-10 font-light">
            Conoce el Caribe colombiano y sus maravillosas playas e islas con <span className="font-bold text-white">Vaniexpress</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="https://wa.me/573128869088?text=Hola,%20quiero%20planear%20un%20tour%20por%20el%20Caribe%20colombiano%20con%20Vaniexpress"
              target="_blank" rel="noreferrer"
              className="w-fit inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Planear mi Viaje <ArrowRight />
            </a>
            <Link to="/destinos" className="w-fit inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all whitespace-nowrap">
              Ver Destinos
            </Link>
          </div>
        </div>
      </header>

      {/* ─── DESTINOS (Componente Reutilizable) ─── */}
      <DestinationsCarousel />

      {/* ─── ACTIVIDADES ─── */}
      <section className="pt-10 md:pt-20 pb-0">
        <div className="mb-8 px-4 md:px-16 max-w-[1920px] mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3">Experiencias Únicas</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-background mb-4">
            Vive el Caribe como nunca
          </h2>
          <p className="text-on-surface-variant text-base font-light max-w-2xl">
            Cada tour diseñado a medida — yates, buceo, playas escondidas y naturaleza pura. Transportamos tu grupo desde la puerta de tu hotel.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {activities.map((act, i) => (
            <div
              key={act.title}
              className="group relative overflow-hidden shadow-inner hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ height: '380px' }}
            >
              <img src={act.img} alt={`Experiencia y Tour: ${act.title} en el Caribe Colombiano con Vaniexpress`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-r ${act.color}`}></div>
              {/* Decorative number */}
              <div className="absolute top-6 right-6 text-white/20 font-black text-7xl leading-none select-none">0{i + 1}</div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl drop-shadow-lg">{act.emoji}</span>
                  <h3 className="font-headline text-2xl font-extrabold text-white leading-tight">{act.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-light mb-6 max-w-sm">{act.desc}</p>
                <a
                  href="https://wa.me/573128869088?text=Hola,%20quiero%20reservar%20una%20actividad%20en%20el%20Caribe%20con%20Vaniexpress"
                  target="_blank" rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full backdrop-blur hover:bg-white hover:text-teal-800 transition-all w-fit"
                >
                  Reservar <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FLOTA ─── */}
      <section className="py-10 md:py-20 bg-surface-container-low overflow-hidden mx-4 md:mx-16 rounded-3xl mb-8 md:mb-16">
        <div className="max-w-[1920px] mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Info Texto — primero en mobile, primero en desktop por defecto */}
          <div className="order-1 md:order-1 relative flex justify-center flex-col">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">Movilidad Premium</span>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-background mb-6 leading-tight">
              Flota Ampliada: <br />de 4 a 40 Pasajeros
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 font-light">
              Nuestra flota se fortalece desde la base. Conoce nuestro exclusivo <span className="font-bold text-slate-700">Sedán Ejecutivo</span> para viajes premium de 4 puestos. Para tus traslados grupales contamos con un único servicio integral que incluye <span className="font-bold text-slate-700">Minivanes de 10 pasajeros, Vans VIP de 14 pasajeros y amplios Buses de 40 pasajeros</span>. Sea cual sea el tamaño de tu viaje, te llevamos con la misma calidad.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center font-bold text-primary">🚘</div>
                <span className="font-semibold text-on-surface text-sm">Sedán Ejecutivo Premium y SUV (4 Pax)</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center font-bold text-primary">🚐</div>
                <span className="font-semibold text-on-surface text-sm">Transporte Grupal VIP (10 Pax, 14 Pax y 40 Pax)</span>
              </li>
            </ul>
            <Link to="/vehiculos" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all inline-flex items-center gap-3 text-sm w-fit">
              Explorar Catálogo de Flota <ArrowRight />
            </Link>
          </div>

          {/* Visual Showcase — Grid of top vehicles */}
          <div className="order-2 md:order-2 flex flex-col gap-4">

            {/* Sedan (Top) */}
            <Link to="/vehiculos" className="relative z-10 bg-white p-3 rounded-3xl shadow-xl transition-all hover:shadow-2xl group block cursor-pointer">
              <div className="overflow-hidden rounded-2xl w-full h-[250px] md:h-[300px] relative bg-slate-900 flex items-center justify-center">
                <img src="/assets/VEHICULO3.webp" alt="Sedán Ejecutivo Premium" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
                <div className="absolute top-3 right-3 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm z-20">
                  Sedán Premium
                </div>
              </div>
              <div className="p-3 pb-1">
                <p className="font-headline font-extrabold text-lg text-slate-800">Sedán Ejecutivo</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Premium Selection · 4 Pasajeros</p>
              </div>
            </Link>

            {/* Transporte Grupal (Minivan Video used for all) */}
            <Link to="/vehiculos" className="relative z-10 bg-white p-3 rounded-3xl shadow-xl transition-all hover:shadow-2xl group block cursor-pointer">
              <div className="overflow-hidden rounded-2xl w-full h-[250px] md:h-[300px] relative bg-slate-900">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90">
                  <source src="/assets/VEHICULOSMINIVANVIDEO.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-3 right-3 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm z-20">
                  Transporte Grupal
                </div>
              </div>
              <div className="p-3 pb-1">
                <p className="font-headline font-extrabold text-lg text-slate-800">Minivanes, Vans y Buses</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">10 Pax · 14 Pax · 40 Pax</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ALQUILER DE BOTE PRIVADO ─── */}
      <section className="py-16 md:py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-[1920px] mx-auto px-6 md:px-16">
            {/* Contenido Texto e Imagen Integrados */}
            <div className="w-full lg:w-3/4 mx-auto">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4 px-3 py-1 bg-primary/10 w-fit rounded-full">Experiencia Exclusiva</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[0.9]">
                Bote Privado <span className="text-primary">en Coveñas</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-3xl">
                {boatData.description}
              </p>

              {/* VIDEO INTEGRADO - CENTRADO */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white group mb-12 max-w-4xl mx-auto">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
                  <source src={boatData.videoHorizontal} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 mb-12">
                {boatData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[8px]">★</div>
                    <span className="text-slate-800 font-bold text-sm tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-12">
                {boatData.activities.map((act, idx) => (
                  <span key={idx} className="bg-white text-slate-400 border border-slate-100 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                    {act}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/573128869088?text=Hola,%20me%20interesa%20alquilar%20el%20bote%20privado%20en%20Coveñas`}
                target="_blank" rel="noreferrer"
                className="group bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-primary transition-all inline-flex items-center gap-4 text-base hover:scale-105"
              >
                Reservar Mi Bote <ArrowRight />
              </a>
            </div>
        </div>
        
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="px-4 md:px-16 pb-12 md:pb-24 max-w-[1920px] mx-auto">
        <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-300 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="relative z-10">
            <span className="inline-block text-teal-200 font-bold tracking-widest uppercase text-xs mb-6">Vaniexpress Tours</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 tracking-tighter">
              ¿Listo para tu próximo viaje al Caribe?
            </h2>
            <p className="text-teal-100 text-base lg:text-lg mb-10 max-w-2xl mx-auto font-light">
              Isla Fuerte, Moñitos, Coveñas, Isla Palma — diseñamos el itinerario perfecto con transporte VIP incluido.
            </p>
            <a
              href="https://wa.me/573128869088?text=Hola,%20quiero%20información%20sobre%20tours%20de%20Vaniexpress"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablar con un Asesor
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
