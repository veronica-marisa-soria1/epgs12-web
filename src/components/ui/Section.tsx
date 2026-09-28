import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  as?: "section" | "div";
}

export function Section({ children, className = "", alt = false, as = "section" }: SectionProps) {
  const Tag = as;
  return (
    <Tag className={`${alt ? "bg-paper-alt" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">{children}</div>
    </Tag>
  );
}
