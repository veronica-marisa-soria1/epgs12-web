interface BrandMotifProps {
  className?: string;
  /** Franja fina de 3 colores — se usa bajo el header y en divisores */
  variant?: "stripe" | "stack";
}

/**
 * Los tres bloques de color del isologo institucional (teal / dorado /
 * naranja) traducidos a un elemento gráfico reutilizable. Es la firma
 * visual del sitio: aparece como franja fina (variant="stripe") bajo
 * el header y en el footer, o como composición apilada (variant="stack")
 * en el hero.
 */
export function BrandMotif({ className = "", variant = "stripe" }: BrandMotifProps) {
  if (variant === "stripe") {
    return (
      <div className={`flex h-[6px] w-full ${className}`} aria-hidden="true">
        <span className="flex-1 bg-teal-700" />
        <span className="flex-1 bg-gold-500" />
        <span className="flex-1 bg-clay-500" />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 360 320"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="40" y="40" width="90" height="240" rx="10" className="fill-teal-700" />
      <rect x="140" y="10" width="90" height="240" rx="10" className="fill-gold-500" />
      <rect x="240" y="70" width="90" height="240" rx="10" className="fill-clay-500" />
    </svg>
  );
}
