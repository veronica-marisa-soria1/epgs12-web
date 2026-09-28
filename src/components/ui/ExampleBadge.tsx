/** Insignia visible para marcar contenido de ejemplo/placeholder,
 * tal como pide el brief ("datos de ejemplo claramente marcados").
 * Se usa en tarjetas cuyo contenido todavía no es real. */
export function ExampleBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-clay-100 px-2.5 py-1 text-xs font-semibold text-clay-600">
      Ejemplo
    </span>
  );
}
