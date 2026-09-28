import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ExampleBadge } from "@/components/ui/ExampleBadge";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchCareers, fetchStudyPlans } from "@/services/api";
import type { Career, StudyPlan } from "@/types";

const ordinal: Record<number, string> = { 1: "1er año", 2: "2do año", 3: "3er año", 4: "4to año" };

export default function StudyPlans() {
  usePageMeta("Planes de estudio", "Materias y carga horaria de cada tecnicatura, organizadas por año.");
  const [careers, setCareers] = useState<Career[]>([]);
  const [plans, setPlans] = useState<StudyPlan[]>([]);

  useEffect(() => {
    fetchCareers().then(setCareers);
    fetchStudyPlans().then(setPlans);
  }, []);

  return (
    <>
      <PageHeader
        title="Planes de estudio"
        intro="Organización de materias por año para cada tecnicatura. Desplegá cada año para ver el detalle."
      />
      <Section>
        {careers.map((career) => {
          const plan = plans.find((p) => p.careerSlug === career.slug);
          return (
            <div key={career.slug} id={career.slug} className="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl text-teal-900">{career.name}</h2>
                {plan?.isExample && <ExampleBadge />}
              </div>
              <p className="mt-2 text-sm text-ink/60">
                {career.durationYears} años · Título: {career.degreeTitle}
              </p>

              {!plan ? (
                <p className="mt-6 text-sm text-ink/70">
                  El plan de estudio de esta carrera todavía no fue cargado.
                </p>
              ) : (
                <div className="mt-6 space-y-3">
                  {plan.years.map((yearBlock) => (
                    <details
                      key={yearBlock.year}
                      className="group border border-line bg-white open:border-teal-700"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-display font-semibold text-teal-900">
                        {ordinal[yearBlock.year] ?? `Año ${yearBlock.year}`}
                        <span className="text-ink/40 transition-transform group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <ul className="space-y-1 border-t border-line px-5 py-4">
                        {yearBlock.subjects.map((subject) => (
                          <li
                            key={subject.name}
                            className="flex items-center justify-between gap-4 py-1.5 text-sm text-ink/80"
                          >
                            <span>{subject.name}</span>
                            {subject.hoursPerWeek && (
                              <span className="whitespace-nowrap text-xs text-ink/50">
                                {subject.hoursPerWeek} hs/sem.
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </Section>
    </>
  );
}
