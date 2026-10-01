import type { Course } from "@/types";

// EJEMPLO — no hay cursos reales cargados todavía. Reemplazar antes de publicar.
export const courses: Course[] = [
  {
    slug: "curso-programacion-basica-ejemplo",
    name: "Curso de Programación Básica (ejemplo)",
    durationValue: 8,
    durationUnit: "semanas",
    modality: "Presencial",
    shortDescription:
      "Contenido de ejemplo. Introducción a la lógica de programación, sin requisitos previos.",
    sedes: ["Resistencia"],
    isExample: true,
  },
  {
    slug: "curso-office-ejemplo",
    name: "Curso de Herramientas de Oficina (ejemplo)",
    durationValue: 6,
    durationUnit: "semanas",
    modality: "Presencial",
    shortDescription: "Contenido de ejemplo. Uso de planillas de cálculo y procesador de texto.",
    sedes: ["Quitilipi"],
    isExample: true,
  },
  {
    slug: "curso-atencion-al-publico-ejemplo",
    name: "Curso de Atención al Público (ejemplo)",
    durationValue: 1,
    durationUnit: "meses",
    modality: "Presencial",
    shortDescription: "Contenido de ejemplo. Herramientas para la atención y comunicación con clientes.",
    sedes: ["Resistencia", "Quitilipi"],
    isExample: true,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
