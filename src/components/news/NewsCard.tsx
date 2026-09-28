import type { NewsItem } from "@/types";
import { ExampleBadge } from "@/components/ui/ExampleBadge";

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="border border-line bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-wide text-clay-600">
          {dateFormatter.format(new Date(item.date))}
        </time>
        {item.isExample && <ExampleBadge />}
      </div>
      <h3 className="mt-2 text-lg text-teal-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.summary}</p>
    </article>
  );
}
