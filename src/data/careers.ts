import type { Career } from "@/types";

// Dato confirmado: la Tecnicatura Superior en Desarrollo de Software.
// Las demás carreras son EJEMPLO para mostrar cómo luce la grilla con
// varias tarjetas — reemplazar o quitar antes de publicar.
export const careers: Career[] = [
  {
    slug: "desarrollo-de-software",
    name: "Tecnicatura Superior en Desarrollo de Software",
    degreeTitle: "Técnico/a Superior en Desarrollo de Software",
    durationYears: 3,
    modality: "Presencial",
    shortDescription:
      "Formación en análisis, diseño y desarrollo de aplicaciones web y de escritorio, bases de datos y metodologías de trabajo en equipo.",
    profile: [
      "Diseña y desarrolla aplicaciones y sistemas de software",
      "Administra bases de datos relacionales",
      "Trabaja con metodologías ágiles en equipos de desarrollo",
    ],
    sedes: ["Resistencia", "Quitilipi"],
  },
  {
    slug: "administracion-ejemplo",
    name: "Tecnicatura Superior en Administración (ejemplo)",
    degreeTitle: "Técnico/a Superior en Administración",
    durationYears: 3,
    modality: "Presencial",
    shortDescription:
      "Contenido de ejemplo para mostrar una segunda carrera en la grilla. Reemplazar por una oferta real de la institución.",
    profile: [
      "Gestiona procesos administrativos y contables",
      "Participa en la planificación de organizaciones",
    ],
    sedes: ["Resistencia"],
    isExample: true,
  },
  {
    slug: "enfermeria-ejemplo",
    name: "Tecnicatura Superior en Enfermería (ejemplo)",
    degreeTitle: "Técnico/a Superior en Enfermería",
    durationYears: 3,
    modality: "Presencial",
    shortDescription:
      "Contenido de ejemplo para mostrar una tercera carrera en la grilla. Reemplazar por una oferta real de la institución.",
    profile: ["Brinda cuidados de enfermería en distintos niveles de atención"],
    sedes: ["Quitilipi"],
    isExample: true,
  },
];

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}
