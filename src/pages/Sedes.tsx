import { useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/config/siteConfig";
import { fetchSedes, fetchCareers, fetchCourses } from "@/services/api";
import type { Sede, Career, Course } from "@/types";

export default function Sedes() {
  usePageMeta("Sedes", "Sedes de la institución y qué carreras y cursos se dictan en cada una.");

  const [sedes, setSedes] = useState<Sede[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchSedes().then(setSedes);
    fetchCareers().then(setCareers);
    fetchCourses().then(setCourses);
  }, []);

  return (
    <>
      <PageHeader title="Sedes" intro="Dónde encontrarnos y qué se dicta en cada sede." />
      <Section className="space-y-14">
        {sedes.map((sede) => {
          const sedeCareers = careers.filter((c) => c.sedes.includes(sede.name));
          const sedeCourses = courses.filter((c) => c.sedes.includes(sede.name));
          const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(sede.mapQuery)}&output=embed`;

          return (
            <div key={sede.slug} className="grid gap-8 border-t border-line pt-10 first:border-t-0 first:pt-0 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl text-teal-900">{sede.name}</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-ink/80">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-teal-700" aria-hidden="true" />
                    {sede.address}
                  </li>
                  {sede.phone && (
                    <li className="flex items-center gap-2 text-ink/80">
                      <Phone size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                      <a href={`tel:${sede.phone}`} className="hover:text-teal-900">
                        {sede.phone}
                      </a>
                    </li>
                  )}
                  {sede.email && (
                    <li className="flex items-center gap-2 text-ink/80">
                      <Mail size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                      <a href={`mailto:${sede.email}`} className="hover:text-teal-900">
                        {sede.email}
                      </a>
                    </li>
                  )}
                  {!sede.phone && !sede.email && (
                    <li className="text-ink/60">
                      Contacto general:{" "}
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-teal-900">
                        {siteConfig.contact.email}
                      </a>
                    </li>
                  )}
                </ul>

                {sedeCareers.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                      Carreras en esta sede
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-ink/80">
                      {sedeCareers.map((c) => (
                        <li key={c.slug}>{c.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {sedeCourses.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                      Cursos en esta sede
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-ink/80">
                      {sedeCourses.map((c) => (
                        <li key={c.slug}>{c.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="aspect-video w-full overflow-hidden border border-line lg:aspect-auto">
                <iframe
                  title={`Ubicación de la sede ${sede.name}`}
                  src={mapSrc}
                  className="h-full min-h-[240px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          );
        })}
      </Section>
    </>
  );
}
