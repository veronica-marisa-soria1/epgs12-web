import { Link } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ExampleBadge } from "@/components/ui/ExampleBadge";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/config/siteConfig";
import { sedes } from "@/data/sedes";

const values = [
  {
    title: "Misión",
    text:
      "Contenido de ejemplo — completar con la misión institucional real: qué formación se ofrece y a quién está dirigida.",
  },
  {
    title: "Visión",
    text:
      "Contenido de ejemplo — completar con la visión institucional real: hacia dónde se proyecta la institución.",
  },
  {
    title: "Valores",
    text:
      "Contenido de ejemplo — completar con los valores que orientan la vida institucional (compromiso, inclusión, calidad educativa, etc.).",
  },
];

export default function About() {
  usePageMeta(
    "Nosotros",
    `Historia, misión y valores de ${siteConfig.fullName}, con Nivel Superior y Cursos en ${sedes.map((s) => s.name).join(" y ")}.`
  );

  return (
    <>
      <PageHeader
        title="Nosotros"
        intro={`Conocé la historia y los valores de ${siteConfig.fullName}.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl">Nuestra historia</h2>
              <ExampleBadge />
            </div>
            <p className="mt-4 max-w-prose leading-relaxed text-ink/80">
              Contenido de ejemplo. Este espacio está pensado para contar el origen de la
              institución, sus hitos más importantes y su rol en la comunidad educativa de{" "}
              {siteConfig.location.province} y la región. Reemplazar por el texto institucional
              real antes de publicar el sitio.
            </p>
          </div>

          <div className="border border-line bg-paper-alt p-6">
            <h2 className="text-lg">Datos institucionales</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-ink">Oferta educativa</dt>
                <dd className="text-ink/70">Nivel Superior y Cursos</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Sedes</dt>
                <dd className="text-ink/70">
                  <Link to="/sedes" className="text-teal-700 hover:text-teal-900">
                    {sedes.map((s) => s.name).join(" y ")}
                  </Link>
                  , {siteConfig.location.province}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Modalidad</dt>
                <dd className="text-ink/70">Presencial</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl">Misión, visión y valores</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg text-teal-900">{v.title}</h3>
                <ExampleBadge />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
