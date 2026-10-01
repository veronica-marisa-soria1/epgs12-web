// ──────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL SITIO
// Este es el lugar centralizado para editar los datos institucionales
// que se repiten en varias páginas (header, footer, contacto, SEO).
// Los valores marcados con "// EJEMPLO" son placeholders: hay que
// reemplazarlos por los datos reales antes de publicar el sitio.
// Para cambiar los colores de marca, ver tailwind.config.js.
// Para cambiar los logos, reemplazar /public/logo.webp (Nivel Superior)
// y /public/logo-cursos.webp (Cursos), o actualizar las rutas acá abajo.
//
// La institución tiene dos ofertas educativas, cada una con su propio
// logo, y dos sedes (ver src/data/sedes.ts): Resistencia y Quitilipi.
// ──────────────────────────────────────────────────────────────────

export const siteConfig = {
  shortName: "E.P.G.S. N°12",
  fullName: 'E.P.G.S. N°12 "Juan Domingo Perón"',

  logos: {
    nivelSuperior: { src: "/logo.webp", alt: 'Logo de Nivel Superior — E.P.G.S. N°12 "Juan Domingo Perón"' },
    cursos: { src: "/logo-cursos.webp", alt: 'Logo de Cursos — E.P.G.S. N°12 "Juan Domingo Perón"' },
  },

  location: {
    province: "Chaco",
    country: "Argentina",
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

// Navegación agrupada en tres bloques: la oferta de Nivel Superior, la
// oferta de Cursos, y las páginas institucionales que son comunes a
// las dos (comparten sedes, noticias, autoridades, etc.)
export const nivelSuperiorNavLinks = [
  { to: "/nivel-superior", label: "Nivel Superior" },
  { to: "/carreras", label: "Carreras" },
  { to: "/planes-de-estudio", label: "Planes de estudio" },
  { to: "/inscripciones", label: "Inscripciones" },
] as const;

export const cursosNavLinks = [
  { to: "/cursos", label: "Cursos" },
  { to: "/cursos/inscripcion", label: "Inscripción a cursos" },
] as const;

export const sharedNavLinks = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/sedes", label: "Sedes" },
  { to: "/noticias", label: "Noticias" },
  { to: "/autoridades", label: "Autoridades" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;

// Usado por el Footer para listar todo el mapa del sitio de una vez.
export const allNavLinks = [
  { to: "/", label: "Inicio" },
  ...nivelSuperiorNavLinks,
  ...cursosNavLinks,
  ...sharedNavLinks,
] as const;
