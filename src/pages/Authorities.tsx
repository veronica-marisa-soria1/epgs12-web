import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { AuthorityCard } from "@/components/authorities/AuthorityCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchAuthorities } from "@/services/api";
import type { Authority } from "@/types";

export default function Authorities() {
  usePageMeta("Autoridades", "Equipo de conducción y gestión de la institución.");
  const [authorities, setAuthorities] = useState<Authority[]>([]);

  useEffect(() => {
    fetchAuthorities().then(setAuthorities);
  }, []);

  return (
    <>
      <PageHeader title="Autoridades" intro="Equipo de conducción y gestión de la institución." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {authorities.map((authority) => (
            <AuthorityCard key={authority.name + authority.role} authority={authority} />
          ))}
        </div>
      </Section>
    </>
  );
}
