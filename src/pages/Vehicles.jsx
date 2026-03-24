import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { vehicles, specialVan } from '../data/content';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Vehicles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Transporte Privado Caribe Colombiano | Vans y SUVs de Lujo | Vaniexpress</title>
        <meta name="description" content="Transporte privado con vans, SUVs y minivanes para tours en Isla Fuerte, Moñitos, Coveñas e Isla Palma. Conductores locales expertos. Vaniexpress." />
        <meta name="keywords" content="transporte privado caribe colombiano, van turistica colombia, SUV lujo caribe, traslados isla fuerte, vaniexpress flota" />
      </Helmet>

      <main className="bg-surface text-on-background font-body pb-32">

        {/* ─── Hero — Full Viewport ─── */}
        <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img
              src={vehicles[0]?.img}
              alt="Flota Vaniexpress transporte caribe colombiano"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
          </div>
          <div className="relative z-10 max-w-[1920px] mx-auto w-full px-8 md:px-16 pt-28">
            <span className="inline-block text-white/60 font-bold tracking-widest uppercase text-xs mb-5">Exclusividad en Movimiento</span>
            <h1 className="font-headline text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-5 max-w-2xl">
              Flota Privada<br/>de Alta Gama
            </h1>
            <p className="text-white/75 text-base max-w-xl leading-relaxed font-light mb-8">
              Vehículos de última generación con conductores locales expertos. De tu puerta a Isla Fuerte, Moñitos, Coveñas e Isla Palma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-all"
              >
                Ver Vehículos <ArrowRight />
              </a>
              <a
                href="#van-especial"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all uppercase tracking-widest"
              >
                Van 12 Pasajeros ⭐
              </a>
            </div>
          </div>
        </section>

        {/* ─── Beneficios ─── */}
        <section className="py-20 max-w-[1920px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🕐', title: 'Puntualidad Garantizada', desc: 'Seguimiento GPS en tiempo real. Llegamos puntual a cada destino del Caribe.' },
              { icon: '👨‍✈️', title: 'Conductores Certificados', desc: 'Expertos en las rutas de Isla Fuerte, Moñitos, Coveñas e Isla Palma.' },
              { icon: '🛡️', title: 'Seguridad Integral', desc: 'Mantenimiento certificado y pólizas de seguro de cobertura total.' },
            ].map((b) => (
              <div key={b.title} className="flex flex-col gap-4 p-7 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-colors">
                <span className="text-4xl">{b.icon}</span>
                <h3 className="font-headline text-lg font-bold text-on-surface">{b.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Van Especial (Categoría Única) ─── */}
        <section id="van-especial" className="py-20 px-8 md:px-16 max-w-[1920px] mx-auto">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative grid lg:grid-cols-2 items-center">
            {/* Video Background/Content */}
            <div className="relative h-[400px] lg:h-[700px] overflow-hidden order-1 lg:order-2">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              >
                <source src={specialVan.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/40 via-transparent to-slate-900/90 lg:to-transparent"></div>
              <div className="absolute bottom-10 left-10 z-10">
                <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-lg">
                  Video Real del Vehículo
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-10 lg:p-20 text-white z-10 order-2 lg:order-1">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Categoría Especial</span>
              <h2 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
                {specialVan.name}
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                {specialVan.description}
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">👥</div>
                  <div>
                    <h5 className="font-bold text-white text-lg">{specialVan.capacity}</h5>
                    <p className="text-slate-400 text-sm">Capacidad máxima garantizada</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">❄️</div>
                  <div>
                    <h5 className="font-bold text-white text-lg">Clima Controlado</h5>
                    <p className="text-slate-400 text-sm">Aire acondicionado de alto flujo</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/573000000000?text=Hola%20Vaniexpress,%20quiero%20cotizar%20la%20Van%20Especial%20de%2012%20pasajeros`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-teal-700 hover:scale-105 transition-all shadow-xl"
              >
                <WaIcon /> Cotizar Van de 12
              </a>
            </div>
          </div>
        </section>

        {/* ─── Catálogo de Carros ─── */}
        <section id="catalogo" className="py-20 px-8 md:px-16 max-w-[1920px] mx-auto">
          <div className="mb-14 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-background mb-4">Vehículos de 4 Pasajeros</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-light max-w-2xl">
              Nuestra flota de vehículos compactos y SUVs para traslados ejecutivos y familiares con la mayor comodidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {vehicles.map((v) => (
              <article
                key={v.id}
                className="group flex flex-col sm:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-slate-100">
                  <img src={v.img} alt={`${v.name} – Transporte Caribe | Vaniexpress`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 text-teal-700 font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest shadow-lg">CONFORT</span>
                  </div>
                </div>

                <div className="w-full sm:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline text-2xl font-extrabold text-on-surface mb-2 tracking-tight">{v.name}</h4>
                    <p className="text-sm text-on-surface-variant font-light mb-8 leading-relaxed">{v.shortDesc}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {v.specs.map(spec => (
                        <span key={spec} className="px-4 py-2 bg-slate-50 rounded-xl text-[11px] font-bold text-slate-600 border border-slate-100">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/573000000000?text=Hola%20Vaniexpress,%20quiero%20cotizar%20el%20${encodeURIComponent(v.name)}%20para%20un%20tour%20por%20el%20Caribe`}
                    target="_blank" rel="noreferrer"
                    className="flex justify-center items-center gap-3 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-primary transition-all text-sm group-hover:shadow-lg"
                  >
                    <WaIcon /> Cotizar Traslado
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        {/* ... (Keeping existing CTA section but updating references if needed) */}


        {/* ─── CTA Section ─── */}
        <section className="px-8 md:px-16 pt-20 max-w-[1920px] mx-auto">
          <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-white rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tighter">
                  ¿Necesitas un vehículo para tu próximo tour?
                </h2>
                <p className="text-teal-100 text-base mb-8 font-light leading-relaxed">
                  Grupos pequeños o grandes —  tenemos el vehículo perfecto para llevarte a Isla Fuerte, Moñitos, Coveñas e Isla Palma con total comodidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/573000000000?text=Hola,%20necesito%20un%20vehículo%20para%20un%20tour%20por%20el%20Caribe%20con%20Vaniexpress"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-teal-800 px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 hover:shadow-xl transition-all"
                  >
                    <WaIcon /> Hablar con un Asesor
                  </a>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img src={vehicles[0]?.img} alt={vehicles[0]?.name} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl mt-8">
                  <img src={vehicles[1]?.img} alt={vehicles[1]?.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Vehicles;
