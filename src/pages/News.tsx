import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { NewsCard } from "@/components/news/NewsCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchNews } from "@/services/api";
import type { NewsItem } from "@/types";

export default function News() {
  usePageMeta("Noticias", "Novedades, comunicados y eventos de la institución.");
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <>
      <PageHeader title="Noticias" intro="Novedades, comunicados y eventos institucionales." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {news.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
