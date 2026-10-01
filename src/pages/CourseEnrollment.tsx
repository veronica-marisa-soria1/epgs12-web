import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CourseEnrollmentForm } from "@/components/courses/CourseEnrollmentForm";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function CourseEnrollment() {
  usePageMeta("Inscripción a cursos", "Completá tus datos para preinscribirte a un curso.");

  return (
    <>
      <PageHeader
        title="Inscripción a cursos"
        intro="Completá tus datos y nos comunicamos para confirmar cupo, horario y sede."
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <CourseEnrollmentForm />
        </div>
      </Section>
    </>
  );
}
