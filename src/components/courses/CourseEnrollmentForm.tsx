import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, TextAreaField, SelectField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { submitCourseEnrollment } from "@/services/api";
import { courses } from "@/data/courses";
import type { CourseEnrollmentFormData } from "@/types";

export function CourseEnrollmentForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: CourseEnrollmentFormData = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      dni: String(formData.get("dni") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      courseSlug: String(formData.get("courseSlug") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    setStatus("sending");
    await submitCourseEnrollment(data);
    setStatus("sent");
    e.currentTarget.reset();
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex items-start gap-3 border border-teal-700 bg-teal-100 p-5 text-teal-900">
        <CheckCircle2 className="mt-0.5 shrink-0" size={22} aria-hidden="true" />
        <div>
          <p className="font-semibold">Preinscripción recibida</p>
          <p className="mt-1 text-sm">
            Nos vamos a poner en contacto para confirmar cupo y horario.
            <br />
            <span className="text-xs text-teal-900/70">
              (Envío de demostración: falta conectar el backend real.)
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="firstName" label="Nombre" required autoComplete="given-name" />
        <TextField id="lastName" label="Apellido" required autoComplete="family-name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="dni" label="DNI" required inputMode="numeric" />
        <TextField id="phone" label="Teléfono" required autoComplete="tel" />
      </div>
      <TextField id="email" label="Correo electrónico" type="email" required autoComplete="email" />
      <SelectField id="courseSlug" label="Curso de interés" required defaultValue="">
        <option value="" disabled>
          Elegí un curso
        </option>
        {courses.map((course) => (
          <option key={course.slug} value={course.slug}>
            {course.name}
          </option>
        ))}
      </SelectField>
      <TextAreaField id="message" label="Consulta (opcional)" rows={4} />
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar preinscripción"}
      </Button>
    </form>
  );
}
