import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users2, Laptop2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CareerCard } from "@/components/careers/CareerCard";
import { NewsCard } from "@/components/news/NewsCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/config/siteConfig";
import { fetchCareers, fetchNews } from "@/services/api";
import type { Career, NewsItem } from "@/types";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación técnica de calidad",
    text: "Carreras de nivel superior orientadas a una salida laboral concreta en la región.",
  },
  {
    icon: Laptop2,
    title: "Contenidos actualizados",
    text: "Planes de estudio pensados junto con el sector productivo y tecnológico.",
  },
  {
    icon: Users2,
    title: "Acompañamiento cercano",
    text: "Docentes y equipo de gestión disponibles durante todo el trayecto formativo.",
  },
];

export default function NivelSuperiorHome() {
  usePageMeta(
    "Nivel Superior",
    "Tecnicaturas superiores de 3 años con título oficial. Carreras, planes de estudio e inscripciones."
  );

  const [careers, setCareers] = useState<Career[]>([]);
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchCareers().then(setCareers);
    fetchNews().then((items) => setLatestNews(items.slice(0, 2)));
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-medium text-teal-700">Nivel Superior</p>
            <h1 className="mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">
              Formación superior con salida laboral real
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/75">
              Tecnicaturas superiores de {siteConfig.fullName}. Formamos técnicos y técnicas
              preparados para incorporarse al mundo del trabajo desde el primer día.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/carreras">Ver carreras</ButtonLink>
              <ButtonLink to="/inscripciones" variant="secondary">
                Inscribirme
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink/60">
              ¿Buscás algo más corto?{" "}
              <Link to="/cursos" className="font-semibold text-teal-700 hover:text-teal-900">
                Mirá los Cursos
              </Link>
              .
            </p>
          </div>

          <img
            src={siteConfig.logos.nivelSuperior.src}
            alt={siteConfig.logos.nivelSuperior.alt}
            className="mx-auto w-full max-w-xs motion-safe:animate-rise-in md:max-w-sm"
          />
        </div>
      </div>

      {/* Qué encontrás acá */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="text-teal-700" size={28} aria-hidden="true" />
              <h2 className="mt-3 text-lg">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Carreras destacadas */}
      <Section alt>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl">Nuestras carreras</h2>
          <ButtonLink to="/carreras" variant="ghost">
            Ver todas
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard key={career.slug} career={career} />
          ))}
        </div>
      </Section>

      {/* Últimas noticias */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl">Últimas noticias</h2>
          <ButtonLink to="/noticias" variant="ghost">
            Ver todas
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      {/* CTA inscripciones */}
      <div className="bg-teal-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl text-white">¿Querés empezar a estudiar con nosotros?</h2>
            <p className="mt-2 max-w-prose text-teal-100/85">
              Conocé los requisitos y completá tu preinscripción en pocos minutos.
            </p>
          </div>
          <ButtonLink to="/inscripciones">Empezar inscripción</ButtonLink>
        </div>
      </div>
    </>
  );
}
