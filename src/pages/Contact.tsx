import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/config/siteConfig";
import { sedes } from "@/data/sedes";

export default function Contact() {
  usePageMeta("Contacto", "Datos de contacto y formulario de consultas.");

  return (
    <>
      <PageHeader title="Contacto" intro="Estamos para ayudarte. Escribinos o acercate a alguna de nuestras sedes." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Envianos un mensaje</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Datos de contacto</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-teal-700" size={20} aria-hidden="true" />
                <span className="text-ink/80">
                  Sedes en {sedes.map((s) => s.name).join(" y ")} —{" "}
                  <Link to="/sedes" className="font-semibold text-teal-700 hover:text-teal-900">
                    ver direcciones
                  </Link>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-teal-700" size={20} aria-hidden="true" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-ink/80 hover:text-teal-900">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-teal-700" size={20} aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-ink/80 hover:text-teal-900">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 shrink-0 text-teal-700" size={20} aria-hidden="true" />
                <span className="text-ink/80">{siteConfig.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
