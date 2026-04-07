import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { vehicles, fleetGroups } from '../data/content';

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

  const ownerVehicle = vehicles.find(v => v.id === 'auto-sedan-2');
  const otherVehicles = vehicles.filter(v => v.id !== 'auto-sedan-2');
  const minivan = fleetGroups[0].vehicles.find(v => v.id === 'minivan-10-pasajeros');
  const van = fleetGroups[0].vehicles.find(v => v.id === 'van-19-pasajeros');
  const bus = fleetGroups[1].vehicles[0];

  return (
    <>
      <Helmet>
        <title>Flota Vaniexpress | Transporte Privado VIP Transporte Caribe Colombiano</title>
        <meta name="description" content="Nuestra flota de alquiler: sedanes corporativos, vans ejecutivas, y autobuses de gran turismo para transporte desde Bogotá a playas del Caribe: Tolú, Coveñas, Moñitos, Necoclí." />
        <meta name="keywords" content="alquiler vans caribe, transporte privado coveñas, transporte tolu, alquiler bus medellin tolu, vans monitos, vaniexpress flota" />
      </Helmet>

      <main className="bg-[#f8fafa] text-slate-900 font-sans pb-32">

        {/* ─── Hero — Matching Destinations Layout ─── */}
        <header className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/VEHICULO3.webp"
              alt="Vehículos de Flota Exclusiva de Transporte Turístico Vaniexpress"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 max-w-[1920px] mx-auto w-full pt-28">
            <h1 className="text-white font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[0.95] max-w-2xl">
              Nuestra Flota <br/><span className="text-primary drop-shadow-[0_0_20px_rgba(45,212,191,0.2)]">de Alta Gama</span>
            </h1>
            <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed font-light mb-8">
               Soluciones de movilidad privada desde 4 hasta 40 pasajeros. Vehículos de última generación con todas las pólizas y conductores profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-all w-fit"
              >
                Explorar Catálogo <ArrowRight />
              </a>
            </div>
          </div>
        </header>

        {/* ─── Contenedor de Catálogo ─── */}
        <div id="catalogo" className="max-w-[1920px] mx-auto px-4 md:px-16 py-12 md:py-24 space-y-32">
          
          {/* VEHÍCULO DESTACADO (SELECCIÓN EJECUTIVA) */}
          {ownerVehicle && (
            <section>
              <div className="flex items-center gap-4 mb-10 px-4">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary whitespace-nowrap">Selección Ejecutiva</h2>
                <div className="h-px bg-primary/20 flex-grow"></div>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row border border-slate-800/50">
               <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[550px] relative overflow-hidden">
                  <img src={ownerVehicle.img} alt={`Alquiler de ${ownerVehicle.name} - Transporte VIP Vaniexpress`} className="absolute inset-0 w-full h-full object-cover opacity-90" />
               </div>
               <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start text-left bg-gradient-to-br from-slate-900 to-[#101918]">
                  <span className="bg-primary/20 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/30 mb-4 inline-block shadow-[0_0_20px_rgba(45,212,191,0.25)]">Premium Selection</span>
                  <h2 className="text-white font-headline text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.85]">
                    {ownerVehicle.name}
                  </h2>
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6 max-w-lg">
                    {ownerVehicle.shortDesc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 w-full">
                     {ownerVehicle.specs.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                           {s}
                        </div>
                     ))}
                  </div>

                  <a 
                    href={`https://wa.me/573128869088?text=Hola,%20quiero%20reservar%20el%20vehículo%20${encodeURIComponent(ownerVehicle.name)}`}
                    target="_blank" rel="noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-teal-700 transition-all shadow-[0_15px_40px_rgba(45,212,191,0.3)]"
                  >
                    <WaIcon /> Reservar Ahora <ArrowRight />
                  </a>
               </div>
              </div>
            </section>
          )}

          {/* OTROS VEHÍCULOS 4 PAX */}
          <section>
            <div className="flex items-center gap-4 mb-10 px-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">Línea Ejecutiva 4 Pasajeros</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {otherVehicles.map((v) => (
                <div key={v.id} className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col group transform hover:-translate-y-1 transition-all duration-500 border border-slate-800/50">
                  <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <img src={v.img} alt={`Transporte y Alquiler de ${v.name} en Colombia - Vaniexpress`} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3000ms]" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/30 shadow-[0_0_20px_rgba(45,212,191,0.25)]">{v.capacity}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left bg-gradient-to-br from-slate-900 to-[#101918]">
                     <h3 className="font-headline text-2xl font-black text-white mb-2 tracking-tight leading-tight">{v.name}</h3>
                     <p className="text-slate-400 text-[13px] md:text-sm font-light leading-relaxed mb-5">{v.shortDesc}</p>
                     
                     <div className="grid grid-cols-2 gap-2 mb-6 w-full flex-grow">
                        {v.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300 font-bold text-[10px]">
                           <div className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0"></div>
                           {spec}
                          </div>
                        ))}
                     </div>
                     
                     <a 
                       href={`https://wa.me/573128869088?text=Hola,%20quiero%20reservar%20el%20vehículo%20${encodeURIComponent(v.name)}`} 
                       target="_blank" rel="noreferrer" 
                       className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-black text-sm hover:bg-teal-700 transition-all shadow-[0_15px_40px_rgba(45,212,191,0.3)]"
                     >
                       <WaIcon /> Reservar Ahora <ArrowRight />
                     </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TRANSPORTE GRUPAL VIP (Minivanes, Vans, Buses) */}
          <section>
            <div className="flex items-center gap-4 mb-10 px-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary whitespace-nowrap">Transporte Grupal VIP</h2>
              <div className="h-px bg-primary/20 flex-grow"></div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row group border border-slate-800/50">
               <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] relative overflow-hidden">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3000ms]">
                    <source src="/assets/VEHICULOSMINIVANVIDEO.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/30 shadow-[0_0_20px_rgba(45,212,191,0.25)]">10, 14 y 40 Pasajeros</span>
                  </div>
               </div>
               <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start text-left bg-gradient-to-br from-slate-900 to-[#101918]">
                  <h2 className="text-white font-headline text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.85]">
                    Minivanes, Vans y Buses
                  </h2>
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6 max-w-lg">
                    Conoce nuestros cómodos vehículos grupales con capacidad para 10, 14 y 40 pasajeros. Ideales tanto para excursiones corporativas como para viajes en familia por el Caribe colombiano. 
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 w-full">
                         <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                            Minivan Executive (10 Pax)
                         </div>
                         <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                            Van VIP (14 Pax)
                         </div>
                         <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                            Bus de Gran Turismo (40 Pax)
                         </div>
                         <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                            Asientos Reclinables
                         </div>
                  </div>

                  <a 
                    href={`https://wa.me/573128869088?text=Hola,%20solicito%20presupuesto%20para%20transporte%20grupal`}
                    target="_blank" rel="noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-teal-700 transition-all shadow-[0_15px_40px_rgba(45,212,191,0.3)]"
                  >
                    <WaIcon /> Cotizar Transporte Grupal <ArrowRight />
                  </a>
               </div>
            </div>
          </section>

        </div>

        {/* ─── CTA FINAL ─── */}
        <section className="px-4 md:px-16 pb-12 md:pb-24 max-w-[1920px] mx-auto mt-20">
          <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-300 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
            </div>
            <div className="relative z-10">
              <span className="inline-block text-teal-200 font-bold tracking-widest uppercase text-xs mb-6">Transporte Vaniexpress</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 tracking-tighter">
                ¿Necesitas un traslado personalizado?
              </h2>
              <p className="text-teal-100 text-base lg:text-lg mb-10 max-w-2xl mx-auto font-light">
                Cotiza tu ruta específica por el Caribe colombiano. Estamos listos para llevarte con seguridad y estilo.
              </p>
              <a
                href="https://wa.me/573128869088?text=Hola,%20quiero%20cotizar%20un%20traslado%20personalizado%20con%20Vaniexpress"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl transition-all"
              >
                <WaIcon /> Hablar con un Asesor de Flota
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Vehicles;
