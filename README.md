# Sitio institucional — E.P.G.S. N°12 "Juan Domingo Perón"

Frontend del sitio institucional, construido con **React + TypeScript + Vite + Tailwind CSS**.
La institución tiene dos ofertas educativas — **Nivel Superior** (tecnicaturas de 3 años)
y **Cursos** (formación corta) — cada una con su propio logo, y dos sedes (Resistencia y
Quitilipi). El sitio arranca en un portal (`/`) donde se elige a cuál de las dos entrar.
Estructura lista para conectar un backend en **Django REST Framework + PostgreSQL**.

## Cómo correrlo

```bash
npm install
npm run dev        # entorno de desarrollo, http://localhost:5173
npm run build       # build de producción en /dist
npm run preview     # sirve el build de producción localmente
```

Requiere Node.js 18 o superior.

## Estructura del proyecto

```
src/
  components/   Componentes reutilizables (layout, ui, careers, courses, gallery...)
  config/       siteConfig.ts — textos, contacto, redes y rutas de los dos logos
  data/         Contenido de ejemplo (carreras, cursos, sedes, noticias, autoridades...)
  hooks/        usePageMeta — título y descripción SEO por página
  pages/        Una página por sección. Home = portal; NivelSuperiorHome = landing
                de esa oferta; Cursos/CourseEnrollment = la otra oferta; Sedes,
                About, News, Authorities, Gallery, Contact = institucionales
  services/     api.ts — capa de datos, hoy en memoria, lista para el backend
  types/        Modelos de datos compartidos (TypeScript)
```

**Rutas:** `/` (portal) · `/nivel-superior`, `/carreras`, `/planes-de-estudio`,
`/inscripciones` (Nivel Superior) · `/cursos`, `/cursos/inscripcion` (Cursos) ·
`/nosotros`, `/sedes`, `/noticias`, `/autoridades`, `/galeria`, `/contacto` (compartidas).

## Qué es contenido de ejemplo

Todo lo que no pude confirmar con datos reales está marcado con `isExample: true`
en `src/data/*.ts` y se muestra en el sitio con una insignia **"Ejemplo"** visible,
para que sea imposible publicarlo por error sin notarlo. Antes de publicar el sitio:

- **`src/config/siteConfig.ts`** — completar teléfono, email y redes (marcados `// EJEMPLO`).
- **`src/data/sedes.ts`** — completar la dirección real de Resistencia y Quitilipi.
- **`src/data/careers.ts`** — reemplazar o quitar las 2 carreras de ejemplo; la
  Tecnicatura Superior en Desarrollo de Software ya tiene datos reales. El array
  `sedes` de cada carrera es un supuesto (confirmar en qué sede se dicta cada una).
- **`src/data/courses.ts`** — no hay cursos reales cargados todavía; los 3 son de ejemplo.
- **`src/data/studyPlans.ts`** — la carga horaria y materias son ilustrativas.
- **`src/data/news.ts`**, **`authorities.ts`** — reemplazar por contenido real
  (las autoridades, sobre todo, conviene confirmarlas con la dirección antes de publicar).
- **`src/data/gallery.ts`** — hoy son bloques de color con leyenda. Para usar fotos
  reales: colocarlas en `public/galeria/` y cambiar `GalleryGrid.tsx` para que
  renderice `<img src="..." />` en lugar del bloque de color.
- **`src/pages/About.tsx`** — historia, misión, visión y valores institucionales.

## Personalización

- **Colores de marca**: un solo lugar, `tailwind.config.js` → `theme.colors`
  (`teal`, `gold`, `clay`). Estos tres tonos se extrajeron del isologo institucional.
- **Logos**: reemplazar `public/logo.webp` (Nivel Superior) y `public/logo-cursos.webp`
  (Cursos), mismos nombres, o cambiar las rutas en `siteConfig.logos`.
- **Tipografías**: `Space Grotesk` (títulos) + `IBM Plex Sans` (texto), cargadas
  desde Google Fonts en `index.html`.
- **Secciones del menú**: `nivelSuperiorNavLinks`, `cursosNavLinks` y `sharedNavLinks`
  en `src/config/siteConfig.ts` (el Navbar los agrupa en tres bloques).

## Conectar el backend (Django REST Framework)

Ya está conectado — solo falta activarlo. Toda la obtención de datos pasa por
`src/services/api.ts`, que decide solo si usar los datos de ejemplo o la API
real según exista o no la variable de entorno `VITE_API_URL`.

1. Levantar el backend (ver `epgs12-backend/README.md`).
2. En esta carpeta, `cp .env.local.example .env.local` (con el backend
   corriendo en local, el valor por defecto ya sirve).
3. Reiniciar `npm run dev`.

A partir de ahí, todo el sitio (carreras, noticias, autoridades, galería,
formularios de Inscripciones y Contacto) usa el backend real en vez de
`src/data/*.ts`. Sin ese archivo, sigue funcionando con datos de ejemplo,
así que se puede seguir trabajando en el frontend sin tener el backend
corriendo.

| Función                  | Endpoint                       |
| ------------------------- | -------------------------------- |
| `fetchSedes`              | `GET /api/sedes/`                |
| `fetchCareers`            | `GET /api/careers/`              |
| `fetchStudyPlans`         | `GET /api/study-plans/`          |
| `fetchCourses`            | `GET /api/courses/`              |
| `fetchNews`               | `GET /api/news/`                 |
| `fetchAuthorities`        | `GET /api/authorities/`          |
| `fetchGallery`            | `GET /api/gallery/`              |
| `submitEnrollment`        | `POST /api/enrollments/`         |
| `submitCourseEnrollment`  | `POST /api/course-enrollments/`  |
| `submitContact`           | `POST /api/contact-messages/`    |

Para un panel administrativo, el Django admin ya cubre la necesidad (altas/bajas
de carreras, noticias, autoridades, subir fotos a la galería) sin desarrollo
adicional — ver `epgs12-backend/README.md`.

## Accesibilidad y SEO

- Enlace "Saltar al contenido principal", foco de teclado visible, landmarks
  semánticos (`header`, `nav`, `main`, `footer`), formularios con `<label>` asociado.
- Título y meta description por página vía `usePageMeta`.
- `robots.txt` incluido en `public/`. Falta generar `sitemap.xml` cuando las
  rutas estén definitivas.
- Diseño mobile-first, responsive en todos los breakpoints de Tailwind.
