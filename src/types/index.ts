// Modelos de datos del sitio. Estos tipos son el "contrato" que en el
// futuro también deberían respetar los endpoints de Django REST
// Framework (ver src/services/api.ts), para que cambiar de datos de
// ejemplo a datos reales del backend no requiera tocar los componentes.

export interface Sede {
  slug: string;
  name: string;
  address: string;
  phone?: string;
  email?: string;
  mapQuery: string;
}

export interface Career {
  slug: string;
  name: string;
  degreeTitle: string;
  durationYears: number;
  modality: string;
  shortDescription: string;
  profile: string[];
  sedes: string[];
  isExample?: boolean;
}

export interface Course {
  slug: string;
  name: string;
  durationValue: number;
  durationUnit: "semanas" | "meses";
  modality: string;
  shortDescription: string;
  sedes: string[];
  isExample?: boolean;
}

export interface Subject {
  name: string;
  hoursPerWeek?: number;
}

export interface StudyPlanYear {
  year: number;
  subjects: Subject[];
}

export interface StudyPlan {
  careerSlug: string;
  resolution?: string;
  years: StudyPlanYear[];
  isExample?: boolean;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string; // ISO 8601
  summary: string;
  body: string;
  isExample?: boolean;
}

export interface Authority {
  name: string;
  role: string;
  area?: string;
  isExample?: boolean;
}

export interface GalleryImage {
  id: string;
  caption: string;
  accent: "teal" | "gold" | "clay";
  /** URL de una foto real subida desde el admin. Si no hay, se usa el bloque de color (accent). */
  imageUrl?: string | null;
  isExample?: boolean;
}

export interface EnrollmentFormData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  careerSlug: string;
  message: string;
}

export interface CourseEnrollmentFormData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  courseSlug: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
