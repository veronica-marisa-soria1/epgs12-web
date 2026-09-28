import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Página no encontrada");

  return (
    <Section className="text-center">
      <p className="font-display text-6xl font-semibold text-teal-700">404</p>
      <h1 className="mt-4 text-2xl">No encontramos esta página</h1>
      <p className="mt-3 text-ink/70">La página que buscás no existe o fue movida.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink to="/">Volver al inicio</ButtonLink>
      </div>
    </Section>
  );
}
