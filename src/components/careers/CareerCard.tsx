import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Career } from "@/types";
import { ExampleBadge } from "@/components/ui/ExampleBadge";

export function CareerCard({ career }: { career: Career }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg leading-snug text-teal-900">{career.name}</h3>
        {career.isExample && <ExampleBadge />}
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
        <Clock size={15} aria-hidden="true" />
        {career.durationYears} años · {career.modality}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-ink/80">{career.shortDescription}</p>

      <Link
        to={`/planes-de-estudio#${career.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
      >
        Ver plan de estudios
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
