import type { StudyPlan } from "@/types";

// EJEMPLO — la carga horaria y el listado de materias son ilustrativos.
// Reemplazar por el diseño curricular jurisdiccional real de cada carrera.
export const studyPlans: StudyPlan[] = [
  {
    careerSlug: "desarrollo-de-software",
    isExample: true,
    years: [
      {
        year: 1,
        subjects: [
          { name: "Introducción a la Programación", hoursPerWeek: 6 },
          { name: "Lógica y Matemática", hoursPerWeek: 4 },
          { name: "Arquitectura de Computadoras", hoursPerWeek: 3 },
          { name: "Inglés Técnico I", hoursPerWeek: 2 },
          { name: "Práctica Profesionalizante I", hoursPerWeek: 3 },
        ],
      },
      {
        year: 2,
        subjects: [
          { name: "Programación Orientada a Objetos", hoursPerWeek: 6 },
          { name: "Bases de Datos", hoursPerWeek: 5 },
          { name: "Desarrollo Web", hoursPerWeek: 5 },
          { name: "Inglés Técnico II", hoursPerWeek: 2 },
          { name: "Práctica Profesionalizante II", hoursPerWeek: 4 },
        ],
      },
      {
        year: 3,
        subjects: [
          { name: "Desarrollo de Aplicaciones Móviles", hoursPerWeek: 5 },
          { name: "Ingeniería de Software", hoursPerWeek: 4 },
          { name: "Frameworks y Arquitecturas Web", hoursPerWeek: 5 },
          { name: "Legislación y Ética Profesional", hoursPerWeek: 2 },
          { name: "Práctica Profesionalizante III", hoursPerWeek: 5 },
        ],
      },
    ],
  },
];

export function getStudyPlanByCareer(slug: string): StudyPlan | undefined {
  return studyPlans.find((p) => p.careerSlug === slug);
}
