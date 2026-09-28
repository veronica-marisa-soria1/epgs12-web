import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { siteConfig, navLinks } from "@/config/siteConfig";
import { BrandMotif } from "@/components/ui/BrandMotif";

export function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.logoSrc}
              alt=""
              aria-hidden="true"
              className="h-10 w-auto rounded bg-white/95 p-1"
            />
            <div>
              <p className="font-display font-semibold">{siteConfig.shortName}</p>
              <p className="text-sm text-teal-100/80">{siteConfig.level}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-teal-100/80">
            {siteConfig.location.city}, {siteConfig.location.province}, {siteConfig.location.country}.
          </p>
        </div>

        <nav aria-label="Mapa del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-100/70">
            Secciones
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-teal-50 hover:text-gold-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-100/70">
            Contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" aria-hidden="true" />
              <span>{siteConfig.location.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-gold-500" aria-hidden="true" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold-500">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-gold-500" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-500">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook de la institución"
              className="rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-ink"
            >
              <Facebook size={18} />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram de la institución"
              className="rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-ink"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <BrandMotif />
      <div className="bg-teal-900 px-6 py-4 text-center text-xs text-teal-100/60">
        © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
