import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { hotels } from '../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!hotel) return <div className="min-h-screen flex items-center justify-center pt-32"><p>Hotel no encontrado.</p></div>;

  return (
    <>
      <Helmet>
        <title>{hotel.name} – {hotel.location} | Tours Caribe Colombiano | Vaniexpress</title>
        <meta name="description" content={`${hotel.shortDesc} Reserva con transporte privado incluido. Vaniexpress tours Caribe colombiano.`} />
      </Helmet>
      <div className="bg-[#f8fafa] min-h-screen font-sans text-slate-800">
        {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {hotel.videos && hotel.videos.length > 0 ? (
           <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
             <source src={hotel.videos[0]} type="video/mp4" />
           </video>
        ) : (
           <img src={hotel.mainImage} alt={hotel.name} className="absolute inset-0 w-full h-full object-cover z-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00201c] via-[#00201c]/40 to-transparent z-10"></div>
        <div className="absolute bottom-0 w-full p-8 md:p-16 z-20 max-w-7xl mx-auto">
           <Link to="/destinos" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 uppercase text-xs tracking-widest font-bold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
              Volver a Destinos
           </Link>
           <span className="block text-[#59dbc7] font-bold tracking-[0.2em] uppercase text-sm mb-4 drop-shadow-md">{hotel.tag} • {hotel.location}</span>
           <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">{hotel.name}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
             <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] mb-12 border border-slate-100 relative overflow-hidden">
                <h2 className="text-3xl font-bold mb-6 text-slate-800 tracking-tight">Sobre este paraíso</h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">{hotel.description}</p>
                <h3 className="text-xl font-bold mb-6 text-slate-800 tracking-tight">Servicios Destacados</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hotel.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#eef1f1] px-5 py-3 rounded-xl border border-white">
                      <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                      <span className="text-sm font-semibold text-[#3c4946]">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             </div>

             {/* Gallery */}
             {hotel.gallery && hotel.gallery.length > 0 && (
                <div className="mb-12">
                   <h2 className="text-3xl font-bold mb-8 text-slate-800 tracking-tight px-4">Galería de Imágenes</h2>
                   <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }} spaceBetween={20} slidesPerView={1} className="rounded-[2.5rem] shadow-xl overflow-hidden aspect-[16/10]">
                      {hotel.gallery.map((img, i) => (
                        <SwiperSlide key={i}>
                           <img src={img} alt={`Galería ${i}`} className="w-full h-full object-cover" />
                        </SwiperSlide>
                      ))}
                   </Swiper>
                </div>
             )}
          </div>
          
          <div className="lg:col-span-1">
             <div className="sticky top-32 bg-white rounded-[2rem] p-8 shadow-2xl shadow-primary/10 border border-primary/20">
                <h3 className="text-2xl font-black text-slate-800 mb-6 drop-shadow-sm">Reserva tu Estadía</h3>
                <p className="text-slate-500 font-light mb-8 text-sm">Organiza tu transporte VIP y alojamiento de lujo con nosotros directamente por WhatsApp.</p>
                
                <a href={`https://wa.me/573000000000?text=Hola,%20quisiera%20reservar%20en%20${hotel.name}`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#00A896] hover:from-[#00A896] hover:to-primary text-white py-5 px-6 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,168,150,0.3)] hover:shadow-[0_15px_40px_rgba(0,168,150,0.5)] transform hover:-translate-y-1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                   Reservar vía WhatsApp
                </a>

                {hotel.food && hotel.food.length > 0 && (
                   <div className="mt-12">
                      <h4 className="font-bold text-sm tracking-widest uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2">Gastronomía</h4>
                      <div className="space-y-4">
                         {hotel.food.map((img, i) => (
                            <img key={i} src={img} alt="Comida local" className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform cursor-pointer shadow-md" />
                         ))}
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="mx-0 px-4 md:px-16 py-20">
        <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tighter">
              ¿Te enamoraste de {hotel.name}?
            </h2>
            <p className="text-teal-100 text-base mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Reserva tu estadía con transporte privado Vaniexpress incluido desde tu ciudad. Atención personalizada y precio especial garantizado.
            </p>
            <a
              href={`https://wa.me/573000000000?text=Hola%20Vaniexpress,%20quiero%20reservar%20en%20${encodeURIComponent(hotel.name)}%20en%20${encodeURIComponent(hotel.location)}%20con%20transporte%20incluido`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold text-base hover:scale-105 hover:shadow-xl transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar con Transporte Incluido
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HotelDetail;
