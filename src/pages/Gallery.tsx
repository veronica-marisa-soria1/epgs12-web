import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fetchGallery } from "@/services/api";
import type { GalleryImage } from "@/types";

export default function Gallery() {
  usePageMeta("Galería", "Fotografías de la institución, actividades y eventos académicos.");
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchGallery().then(setImages);
  }, []);

  return (
    <>
      <PageHeader
        title="Galería"
        intro="Un recorrido visual por la institución. Las imágenes de esta versión son de ejemplo: se reemplazan por fotos reales en /public/galeria/."
      />
      <Section>
        <GalleryGrid images={images} />
      </Section>
    </>
  );
}
