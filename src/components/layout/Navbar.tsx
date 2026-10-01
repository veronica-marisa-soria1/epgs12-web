import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig, nivelSuperiorNavLinks, cursosNavLinks, sharedNavLinks } from "@/config/siteConfig";
import { BrandMotif } from "@/components/ui/BrandMotif";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-2.5 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
    isActive ? "text-teal-900 bg-paper-alt" : "text-ink/80 hover:text-teal-900 hover:bg-paper-alt"
  }`;

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2.5 text-base font-medium ${
    isActive ? "text-teal-900 bg-paper-alt" : "text-ink/80"
  }`;

function NavGroup({ label, links, onNavigate }: { label: string; links: readonly { to: string; label: string }[]; onNavigate?: () => void }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="px-2 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</span>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} className={linkClass} onClick={onNavigate}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

function MobileNavGroup({ label, links, onNavigate }: { label: string; links: readonly { to: string; label: string }[]; onNavigate: () => void }) {
  return (
    <div className="py-2">
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={onNavigate} className={mobileLinkClass}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al cambiar de tamaño a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <BrandMotif />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        {/* Los dos logos siempre llevan al portal de inicio ("/") */}
        <Link to="/" className="flex shrink-0 items-center gap-2 py-1" onClick={() => setOpen(false)}>
          <img src={siteConfig.logos.cursos.src} alt="" aria-hidden="true" className="h-9 w-auto" />
          <span className="h-8 w-px bg-line" aria-hidden="true" />
          <img src={siteConfig.logos.nivelSuperior.src} alt="" aria-hidden="true" className="h-9 w-auto" />
          <span className="sr-only">{siteConfig.fullName} — volver al inicio</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
            <NavGroup label="Nivel Superior" links={nivelSuperiorNavLinks} />
            <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
            <NavGroup label="Cursos" links={cursosNavLinks} />
            <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
            <NavGroup label="Institución" links={sharedNavLinks} />
          </div>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-teal-900 hover:bg-paper-alt lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-line px-4 lg:hidden">
          <MobileNavGroup label="Nivel Superior" links={nivelSuperiorNavLinks} onNavigate={() => setOpen(false)} />
          <MobileNavGroup label="Cursos" links={cursosNavLinks} onNavigate={() => setOpen(false)} />
          <MobileNavGroup label="Institución" links={sharedNavLinks} onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
