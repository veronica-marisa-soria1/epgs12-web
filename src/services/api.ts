// ──────────────────────────────────────────────────────────────────
// CAPA DE DATOS
//
// Si existe la variable de entorno VITE_API_URL (ver .env.local),
// esta capa llama al backend real en Django REST Framework. Si no
// existe, usa los arrays de ejemplo de src/data/*.ts, para poder
// seguir trabajando en el frontend sin tener el backend corriendo.
//
// Los nombres de campo ya coinciden entre frontend y backend
// (durationYears, careerSlug, isExample, etc.) porque la API
// responde en camelCase — no hace falta traducir nada acá.
// ──────────────────────────────────────────────────────────────────

import type {
  Career,
  StudyPlan,
  NewsItem,
  Authority,
  GalleryImage,
  EnrollmentFormData,
  ContactFormData,
} from "@/types";
import { careers } from "@/data/careers";
import { studyPlans } from "@/data/studyPlans";
import { news } from "@/data/news";
import { authorities } from "@/data/authorities";
import { gallery } from "@/data/gallery";

const API_URL = import.meta.env.VITE_API_URL as string | undefined;
const USE_MOCK_DATA = !API_URL;

function delay<T>(value: T, ms = 150): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function getJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Error ${res.status} al pedir ${path}`);
  return res.json();
}

async function postJSON<TResponse, TBody>(path: string, body: TBody): Promise<TResponse> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new Error(detail ? JSON.stringify(detail) : `Error ${res.status} al enviar a ${path}`);
  }
  return res.json();
}

export async function fetchCareers(): Promise<Career[]> {
  if (USE_MOCK_DATA) return delay(careers);
  return getJSON<Career[]>("/api/careers/");
}

export async function fetchStudyPlans(): Promise<StudyPlan[]> {
  if (USE_MOCK_DATA) return delay(studyPlans);
  return getJSON<StudyPlan[]>("/api/study-plans/");
}

export async function fetchNews(): Promise<NewsItem[]> {
  if (USE_MOCK_DATA) return delay(news);
  return getJSON<NewsItem[]>("/api/news/");
}

export async function fetchAuthorities(): Promise<Authority[]> {
  if (USE_MOCK_DATA) return delay(authorities);
  return getJSON<Authority[]>("/api/authorities/");
}

export async function fetchGallery(): Promise<GalleryImage[]> {
  if (USE_MOCK_DATA) return delay(gallery);
  return getJSON<GalleryImage[]>("/api/gallery/");
}

export async function submitEnrollment(data: EnrollmentFormData): Promise<{ ok: true }> {
  if (USE_MOCK_DATA) {
    console.info("[inscripciones] Formulario recibido (modo demo):", data);
    return delay({ ok: true }, 400);
  }
  await postJSON("/api/enrollments/", data);
  return { ok: true };
}

export async function submitContact(data: ContactFormData): Promise<{ ok: true }> {
  if (USE_MOCK_DATA) {
    console.info("[contacto] Formulario recibido (modo demo):", data);
    return delay({ ok: true }, 400);
  }
  await postJSON("/api/contact-messages/", data);
  return { ok: true };
}
