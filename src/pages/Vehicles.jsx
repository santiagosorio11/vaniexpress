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

  const minivan = fleetGroups[0].vehicles.find(v => v.id === 'minivan-10-pasajeros');
  const van = fleetGroups[0].vehicles.find(v => v.id === 'van-19-pasajeros');
  const bus = fleetGroups[1].vehicles[0];

  return (
    <>
      <Helmet>
        <title>Flota Vaniexpress | Transporte Privado VIP Caribe Colombiano</title>
        <meta name="description" content="Nuestra flota desde sedanes ejecutivos hasta buses de 40 pasajeros. Confort, seguridad y puntualidad en todo el Caribe." />
      </Helmet>

      <main className="bg-[#f8fafa] text-slate-900 font-sans pb-32">

        {/* ─── Hero — Matching Destinations Layout ─── */}
        <header className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/VEHICULOS1.jpeg"
              alt="Flota Vaniexpress"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 max-w-[1920px] mx-auto w-full pt-28">
            <span className="inline-block text-white/60 font-bold tracking-[0.25em] uppercase text-xs mb-5">
              Experiencias en Movimiento · VIP
            </span>
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
          
          {/* FASE 1: Carros 4 Pax */}
          <section>
            <div className="flex items-center gap-4 mb-16 px-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">Línea Ejecutiva 4 Pasajeros</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((v) => (
                <div key={v.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col group">
                  <div className="aspect-[16/10] relative rounded-3xl overflow-hidden mb-8 bg-slate-100">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur text-slate-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-slate-100 shadow-xl">{v.capacity}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                     <h3 className="font-headline text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors">{v.name}</h3>
                     <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">{v.shortDesc}</p>
                     
                     <div className="flex flex-wrap gap-2 mb-10">
                        {v.specs.map((spec, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 italic">
                            {spec}
                          </span>
                        ))}
                     </div>
                  </div>
                  <a href={`https://wa.me/573000000000?text=Hola,%20quiero%20reservar%20el%20vehículo%20${encodeURIComponent(v.name)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-bold text-sm hover:bg-primary transition-all shadow-lg">
                    Reservar Ahora <ArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FASE 2: Minivan y Van (Corrección de Videos recortados) */}
          <section>
            <div className="flex items-center gap-4 mb-16 px-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary whitespace-nowrap">Transporte Grupal VIP</h2>
              <div className="h-px bg-primary/20 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {[minivan, van].map((v) => (
                 <div key={v.id} className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full transform hover:-translate-y-2 duration-500">
                    <div className="aspect-square md:aspect-[16/10] relative bg-slate-900 overflow-hidden group">
                      {v.video ? (
                        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
                          <source src={v.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={v.img} alt={v.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      )}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="bg-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl text-white border border-primary/20">{v.capacity}</span>
                      </div>
                    </div>
                    <div className="p-12 flex flex-col flex-grow justify-between bg-gradient-to-b from-white to-[#fdfdfd]">
                      <div>
                        <h3 className="font-headline text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{v.name}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-light mb-8 italic">"{v.shortDesc}"</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-10">
                          {v.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-xl">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/573000000000?text=Hola,%20solicito%20presupuesto%20para%20${encodeURIComponent(v.name)}`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-primary transition-all shadow-xl group/btn"
                      >
                        <WaIcon /> Cotizar Ahora <span className="group-hover/btn:translate-x-1 transition-transform"><ArrowRight /></span>
                      </a>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* FASE 3: Bus (Special Section) */}
          <section>
            <div className="flex items-center gap-4 mb-16 px-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">Logística a Gran Escala</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row group">
               <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                  <img src={bus.img} alt={bus.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[3000ms]" />
               </div>
               <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center items-start text-left bg-gradient-to-br from-slate-900 to-[#101918]">
                  <span className="bg-primary/20 text-primary text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block shadow-[0_0_20px_rgba(45,212,191,0.25)]">{bus.capacity}</span>
                  <h2 className="text-white font-headline text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85]">
                    {bus.name}
                  </h2>
                  <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                    {bus.shortDesc} Ideal para convenciones internacionales, congresos y logística corporativa masiva.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-16 w-full">
                     {bus.specs.map((s, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                           {s}
                        </div>
                     ))}
                  </div>

                  <a 
                    href={`https://wa.me/573000000000?text=Solicitar%20Logística%20Masiva%20Bus%20Vaniexpress%2040%20Pasajeros`}
                    target="_blank" rel="noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-4 bg-primary text-white px-12 py-6 rounded-3xl font-black text-lg hover:bg-teal-700 transition-all shadow-[0_15px_40px_rgba(45,212,191,0.3)]"
                  >
                    <WaIcon /> Consultar Logística <ArrowRight />
                  </a>
               </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default Vehicles;
