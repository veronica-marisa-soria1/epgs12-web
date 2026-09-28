import type { NewsItem } from "@/types";

// EJEMPLO — reemplazar por noticias reales de la institución.
export const news: NewsItem[] = [
  {
    slug: "inscripciones-abiertas",
    title: "Se encuentran abiertas las inscripciones para el ciclo lectivo",
    date: "2026-11-03",
    summary:
      "La institución informa el inicio del período de inscripciones para todas las tecnicaturas. Consultá requisitos y fechas.",
    body:
      "Contenido de ejemplo. Reemplazar por el comunicado real con fechas, requisitos y modalidad de inscripción vigentes.",
    isExample: true,
  },
  {
    slug: "jornada-de-puertas-abiertas",
    title: "Jornada de puertas abiertas para futuros estudiantes",
    date: "2026-10-18",
    summary:
      "Una recorrida por la institución para conocer las carreras, hablar con docentes y estudiantes, y resolver dudas.",
    body: "Contenido de ejemplo. Reemplazar por la información real del evento.",
    isExample: true,
  },
  {
    slug: "egresados-desarrollo-de-software",
    title: "Nueva camada de egresados de la Tecnicatura en Desarrollo de Software",
    date: "2026-09-05",
    summary:
      "Estudiantes de la tecnicatura completaron sus prácticas profesionalizantes con proyectos para organizaciones de la región.",
    body: "Contenido de ejemplo. Reemplazar por la noticia real.",
    isExample: true,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
