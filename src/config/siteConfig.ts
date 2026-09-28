// ──────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL SITIO
// Este es el lugar centralizado para editar los datos institucionales
// que se repiten en varias páginas (header, footer, contacto, SEO).
// Los valores marcados con "// EJEMPLO" son placeholders: hay que
// reemplazarlos por los datos reales antes de publicar el sitio.
// Para cambiar los colores de marca, ver tailwind.config.js.
// Para cambiar el logo, reemplazar /public/logo.webp (mismo nombre)
// o actualizar la ruta acá abajo.
// ──────────────────────────────────────────────────────────────────

export const siteConfig = {
  shortName: "E.P.G.S. N°12",
  fullName: 'E.P.G.S. N°12 "Juan Domingo Perón"',
  level: "Nivel Superior",
  logoSrc: "/logo.webp",

  location: {
    city: "Presidencia Roque Sáenz Peña",
    province: "Chaco",
    country: "Argentina",
    // EJEMPLO — completar con la dirección real de la sede.
    address: "Dirección a confirmar, Presidencia Roque Sáenz Peña, Chaco",
    mapQuery: 'E.P.G.S. N°12 "Juan Domingo Perón" Presidencia Roque Sáenz Peña Chaco',
  },

  contact: {
    // EJEMPLO — completar con los datos reales.
    email: "contacto@epgs12.edu.ar",
    phone: "+54 3732 000-000",
    whatsapp: "https://wa.me/5493732000000",
  },

  social: {
    // EJEMPLO — completar o quitar los que no correspondan.
    facebook: "https://facebook.com/epgs12",
    instagram: "https://instagram.com/epgs12",
  },

  hours: {
    // EJEMPLO
    weekdays: "Lunes a viernes, 8:00 a 21:00",
  },
} as const;

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/carreras", label: "Carreras" },
  { to: "/planes-de-estudio", label: "Planes de estudio" },
  { to: "/inscripciones", label: "Inscripciones" },
  { to: "/noticias", label: "Noticias" },
  { to: "/autoridades", label: "Autoridades" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;
