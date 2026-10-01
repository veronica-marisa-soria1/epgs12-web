import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig, sharedNavLinks } from "@/config/siteConfig";
import { sedes } from "@/data/sedes";

const tracks = [
  {
    to: "/nivel-superior",
    logo: siteConfig.logos.nivelSuperior,
    title: "Nivel Superior",
    text: "Tecnicaturas superiores de 3 años, con título oficial y prácticas profesionalizantes.",
  },
  {
    to: "/cursos",
    logo: siteConfig.logos.cursos,
    title: "Cursos",
    text: "Formación corta, de semanas o meses, para sumar una habilidad puntual sin el compromiso de una carrera.",
  },
];

export default function Home() {
  usePageMeta(
    "Inicio",
    `${siteConfig.fullName}: Nivel Superior y Cursos, con sedes en ${sedes.map((s) => s.name).join(" y ")}, ${siteConfig.location.province}.`
  );

  return (
    <>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <p className="text-sm font-medium text-teal-700">
            {siteConfig.location.province}, {siteConfig.location.country} · Sedes en{" "}
            {sedes.map((s) => s.name).join(" y ")}
          </p>
          <h1 className="mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">{siteConfig.fullName}</h1>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-ink/75">
            Una institución, dos formas de formarte. Elegí por dónde empezar.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.to}
              to={track.to}
              className="group flex flex-col items-start border border-line bg-white p-8 text-left transition-colors hover:border-teal-700"
            >
              <img src={track.logo.src} alt={track.logo.alt} className="h-20 w-auto" />
              <h2 className="mt-6 text-2xl text-teal-900">{track.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{track.text}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:text-teal-900">
                Ingresar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {sharedNavLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-medium text-teal-700 hover:text-teal-900">
              {link.label}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
