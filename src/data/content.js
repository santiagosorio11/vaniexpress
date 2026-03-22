export const hotels = [
  {
    id: "coral-de-fuego",
    name: "Hotel Coral de Fuego",
    location: "Coveñas, Sucre",
    tag: "Resort Premium",
    shortDesc: "Un paraíso exclusivo frente al mar con todas las comodidades de lujo.",
    description: "Sumérgete en el lujo absoluto en el Hotel Coral de Fuego. Ubicado en las hermosas playas de Coveñas, este resort premium ofrece una experiencia inigualable con sus amplias piscinas, atención personalizada y atardeceres de ensueño. Perfecto para familias y parejas buscando desconexión real.",
    mainImage: "/assets/HOTELCORALDEFUEGO.jpeg",
    gallery: [
      "/assets/HOTELCORALDEFUEGO1.jpeg",
      "/assets/HOTELCORALDEFUEGO2.jpeg",
      "/assets/HOTELCORALDEFUEGO3.jpeg",
      "/assets/HOTELCORALDEFUEGO4.jpeg",
      "/assets/HOTELCORALDEFUEGO5.jpeg"
    ],
    features: ["Piscina Infinita", "Playa Privada", "Spa", "Restaurante Gourmet"],
    food: [],
    activities: ["Snorkel", "Paseo en yate", "Masajes relajantes"]
  },
  {
    id: "covemar",
    name: "Hotel Covemar",
    location: "Tolú, Sucre",
    tag: "Aventura y Descanso",
    shortDesc: "Vistas espectaculares y una conexión directa con la naturaleza caribeña.",
    description: "Covemar es el equilibrio perfecto entre confort moderno y la vibrante energía del Caribe. Cuenta con instalaciones de primera clase, actividades acuáticas y espacios diseñados para tu total relajación frente a las aguas mansas de Tolú.",
    mainImage: "/assets/HOTELCOVEMAR.jpeg",
    gallery: [
      "/assets/HOTELCOVEMAR1.jpeg",
      "/assets/HOTELCOVEMAR2.jpeg",
      "/assets/HOTELCOVEMAR3.jpeg"
    ],
    videos: [
      "/assets/HOTELCOVEMARVIDEO.mp4",
      "/assets/HOTELCOVEMARVIDEO1.mp4"
    ],
    features: ["Deportes Acuáticos", "Bar en la playa", "Tours Guiados", "Vistas al Mar"],
    food: [],
    activities: ["Kayak", "Buceo", "Voleibol de playa"]
  },
  {
    id: "vista-al-mar",
    name: "Hotel Vista al Mar",
    location: "San Antero, Córdoba",
    tag: "Boutique Exclusivo",
    shortDesc: "Experiencia boutique íntima con la mejor gastronomía de la región.",
    description: "Un refugio boutique donde cada detalle está cuidadosamente pensado. En Vista al Mar disfrutarás de atardeceres ininterrumpidos, una arquitectura que respira la brisa caribeña y delicias culinarias preparadas con pesca del día.",
    mainImage: "/assets/HOTELVISTAALMAR.jpeg",
    gallery: [
      "/assets/HOTELVISTAALMAR1.jpeg",
      "/assets/HOTELVISTAALMAR2.jpeg"
    ],
    videos: [
      "/assets/HOTELVISTAALMARVIDEO.mp4"
    ],
    features: ["Diseño Boutique", "Cenas Románticas", "Atención 24/7", "Pet Friendly"],
    food: [
      "/assets/HOTELVISTAALMARCOMIDA.jpeg"
    ],
    activities: ["Cata de vinos", "Yoga al amanecer", "Tour Manglares"]
  },
  {
    id: "bahia-la-rada",
    name: "Bahía La Rada",
    location: "Moñitos, Córdoba",
    tag: "Eco-Lodge Natural",
    shortDesc: "Conexión total con la belleza virgen de Moñitos.",
    description: "Para quienes buscan un escape del ruido del mundo moderno. Bahía La Rada ofrece cabañas ecológicas de lujo en medio de la naturaleza más pura, donde el sonido de las olas será tu única alarma.",
    mainImage: "/assets/HOTELBAHIALARADAMOÑITOS.jpeg",
    gallery: [
      "/assets/HOTELBAHIALARADAMOÑITOS1.jpeg"
    ],
    features: ["Ecológico", "Playas Vírgenes", "Senderismo", "Comida Orgánica"],
    food: [
      "/assets/HOTELBAHIALARADAMOÑITOSCOMIDA.jpeg"
    ],
    activities: ["Avistamiento de aves", "Caminatas ecológicas", "Fogatas"]
  }
];

export const vehicles = [
  { 
    id: "van-ejecutiva",
    name: "Van Ejecutiva VIP", 
    capacity: "12 Pasajeros", 
    img: "/assets/VEHICULOS1.jpeg", 
    shortDesc: "Máximo confort para grupos grandes.",
    specs: ["A/C Dual", "Asientos de Cuero Reclinables", "Wi-Fi a bordo", "Pantallas TV", "Amplio Maletero"] 
  },
  { 
    id: "suv-premium",
    name: "SUV Toyota Premium", 
    capacity: "5 Pasajeros", 
    img: "/assets/VEHICULOS2.jpeg", 
    shortDesc: "Elegancia 4x4 para familias VIP.",
    specs: ["Militar 4x4", "Climatizador Trizona", "Asientos Ventilados", "Sonido Bose", "Techo Panorámico"] 
  },
  { 
    id: "minivan-lujo",
    name: "Minivan Kia Sedona", 
    capacity: "8 Pasajeros", 
    img: "/assets/VEHICULOS3.jpeg", 
    shortDesc: "El balance perfecto de espacio y maniobrabilidad.",
    specs: ["Puertas Eléctricas Automáticas", "Carga Inalámbrica", "Cortinillas Solares", "Control Crucero"] 
  },
  { 
    id: "van-turistica",
    name: "Van Turística Renault", 
    capacity: "14 Pasajeros", 
    img: "/assets/VEHICULOS4.jpeg", 
    shortDesc: "Pensada para recorridos largos con ergonomía superior.",
    specs: ["Sillas Individuales", "Iluminación LED de lectura", "Micrófono para Guía", "Refrigerador a Bordo"] 
  }
];
