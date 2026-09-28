import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

const inputClass =
  "mt-1.5 block w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-teal-700";

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}

function FieldWrapper({ id, label, required, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label} {required && <span aria-hidden="true" className="text-clay-600">*</span>}
      </label>
      {children}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function TextField({ id, label, required, ...rest }: TextFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <input id={id} name={id} required={required} className={inputClass} {...rest} />
    </FieldWrapper>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export function TextAreaField({ id, label, required, ...rest }: TextAreaFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <textarea id={id} name={id} required={required} className={inputClass} {...rest} />
    </FieldWrapper>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  children: ReactNode;
}

export function SelectField({ id, label, required, children, ...rest }: SelectFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <select id={id} name={id} required={required} className={inputClass} {...rest}>
        {children}
      </select>
    </FieldWrapper>
  );
}
