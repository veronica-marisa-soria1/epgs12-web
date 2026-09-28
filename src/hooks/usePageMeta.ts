import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

/**
 * Actualiza <title> y la meta description de la página actual.
 * SEO básico sin dependencias extra (sin react-helmet).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} · ${siteConfig.shortName}`;

    let metaDescription: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        previousDescription = metaDescription.content;
        metaDescription.content = description;
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) {
        metaDescription.content = previousDescription;
      }
    };
  }, [title, description]);
}
