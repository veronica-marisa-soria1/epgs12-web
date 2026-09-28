import type { GalleryImage } from "@/types";

// EJEMPLO — no hay fotos reales cargadas todavía. Cada ítem se
// renderiza hoy como un bloque de color con la leyenda (ver
// GalleryGrid.tsx). Para poner fotos reales: colocar los archivos en
// /public/galeria/ y cambiar GalleryGrid para que use <img src="..." />
// en lugar del bloque de color.
export const gallery: GalleryImage[] = [
  { id: "1", caption: "Fachada de la institución", accent: "teal", isExample: true },
  { id: "2", caption: "Laboratorio de informática", accent: "gold", isExample: true },
  { id: "3", caption: "Acto académico", accent: "clay", isExample: true },
  { id: "4", caption: "Aula de clases", accent: "teal", isExample: true },
  { id: "5", caption: "Biblioteca", accent: "gold", isExample: true },
  { id: "6", caption: "Jornada de puertas abiertas", accent: "clay", isExample: true },
];
