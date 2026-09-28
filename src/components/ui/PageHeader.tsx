import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  intro?: ReactNode;
}

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-teal-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        {intro && <p className="mt-4 max-w-prose text-teal-100/90 leading-relaxed">{intro}</p>}
      </div>
    </div>
  );
}
