import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchCourses } from "@/services/api";
import type { Course } from "@/types";

export default function Cursos() {
  usePageMeta("Cursos", "Formación corta, de semanas o meses, en nuestras sedes.");
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  return (
    <>
      <PageHeader
        title="Cursos"
        intro="Formación corta, sin el compromiso de una carrera: ideal para sumar una habilidad puntual."
      />
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-sm text-ink/60">{courses.length} cursos disponibles</p>
          <ButtonLink to="/cursos/inscripcion" variant="ghost">
            Inscribirme a un curso
          </ButtonLink>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Section>
    </>
  );
}
