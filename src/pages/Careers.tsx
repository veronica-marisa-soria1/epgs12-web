import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CareerCard } from "@/components/careers/CareerCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchCareers } from "@/services/api";
import type { Career } from "@/types";

export default function Careers() {
  usePageMeta("Carreras", "Tecnicaturas superiores que se dictan en la institución.");
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    fetchCareers().then(setCareers);
  }, []);

  return (
    <>
      <PageHeader
        title="Carreras"
        intro="Tecnicaturas superiores orientadas a una inserción laboral concreta, con prácticas profesionalizantes desde el primer año."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard key={career.slug} career={career} />
          ))}
        </div>
      </Section>
    </>
  );
}
