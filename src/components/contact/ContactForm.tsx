import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, TextAreaField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { submitContact } from "@/services/api";
import type { ContactFormData } from "@/types";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    setStatus("sending");
    await submitContact(data);
    setStatus("sent");
    e.currentTarget.reset();
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex items-start gap-3 border border-teal-700 bg-teal-100 p-5 text-teal-900">
        <CheckCircle2 className="mt-0.5 shrink-0" size={22} aria-hidden="true" />
        <div>
          <p className="font-semibold">Mensaje enviado</p>
          <p className="mt-1 text-sm">
            Gracias por escribirnos. Te vamos a responder a la brevedad.
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
      <TextField id="name" label="Nombre y apellido" required autoComplete="name" />
      <TextField id="email" label="Correo electrónico" type="email" required autoComplete="email" />
      <TextField id="subject" label="Asunto" required />
      <TextAreaField id="message" label="Mensaje" rows={5} required />
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
