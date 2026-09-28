import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ExampleBadge } from "@/components/ui/ExampleBadge";
import { EnrollmentForm } from "@/components/enrollment/EnrollmentForm";
import { usePageMeta } from "@/hooks/usePageMeta";

const steps = [
  {
    title: "Completá el formulario",
    text: "Cargá tus datos personales y la carrera que te interesa cursar.",
  },
  {
    title: "Presentá la documentación",
    text: "DNI, certificado de estudios secundarios (o analítico en trámite) y fotos carnet.",
  },
  {
    title: "Confirmación de vacante",
    text: "La institución se comunica para confirmar la vacante y el turno.",
  },
  {
    title: "Inicio de clases",
    text: "Recibís la información de organización académica antes del comienzo del ciclo lectivo.",
  },
];

export default function Enrollment() {
  usePageMeta("Inscripciones", "Requisitos y pasos para inscribirte en las tecnicaturas de la institución.");

  return (
    <>
      <PageHeader
        title="Inscripciones"
        intro="Estos son los pasos generales del proceso de inscripción. Las fechas y requisitos específicos de cada ciclo lectivo se publican en Noticias."
      />

      <Section>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl">Cómo inscribirte</h2>
          <ExampleBadge />
        </div>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border border-line bg-white p-5">
              <span className="font-display text-3xl font-semibold text-teal-700">
                {index + 1}
              </span>
              <h3 className="mt-2 text-base text-teal-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl">Formulario de preinscripción</h2>
          <p className="mt-2 text-sm text-ink/70">
            Completá tus datos y nos comunicamos para coordinar los siguientes pasos.
          </p>
          <div className="mt-8">
            <EnrollmentForm />
          </div>
        </div>
      </Section>
    </>
  );
}
