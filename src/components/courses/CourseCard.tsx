import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { Course } from "@/types";
import { ExampleBadge } from "@/components/ui/ExampleBadge";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg leading-snug text-teal-900">{course.name}</h3>
        {course.isExample && <ExampleBadge />}
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
        <Clock size={15} aria-hidden="true" />
        {course.durationValue} {course.durationUnit} · {course.modality}
      </p>
      {course.sedes.length > 0 && (
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
          <MapPin size={15} aria-hidden="true" />
          {course.sedes.join(" · ")}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-ink/80">{course.shortDescription}</p>

      <Link
        to="/cursos/inscripcion"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
      >
        Inscribirme
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
