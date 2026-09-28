import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

const accentClass: Record<GalleryImage["accent"], string> = {
  teal: "bg-teal-700",
  gold: "bg-gold-500",
  clay: "bg-clay-500",
};

function Tile({ image, onOpen }: { image: GalleryImage; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden p-4 text-left text-white ${image.imageUrl ? "bg-ink" : accentClass[image.accent]}`}
    >
      {image.imageUrl && (
        <img
          src={image.imageUrl}
          alt={image.caption}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25" aria-hidden="true" />
      <span className="relative font-display text-sm font-semibold drop-shadow">{image.caption}</span>
      {image.isExample && (
        <span className="relative mt-1 text-xs text-white/80">Imagen de ejemplo</span>
      )}
    </button>
  );
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex !== null) closeButtonRef.current?.focus();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, index) => (
          <Tile key={image.id} image={image} onOpen={() => setActiveIndex(index)} />
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className={`relative flex aspect-[4/3] w-full max-w-xl flex-col items-center justify-center gap-3 overflow-hidden ${active.imageUrl ? "bg-ink" : accentClass[active.accent]}`}
          >
            {active.imageUrl && (
              <img
                src={active.imageUrl}
                alt={active.caption}
                className="absolute inset-0 h-full w-full object-contain"
              />
            )}
            <p className="relative bg-ink/50 px-6 py-2 text-center font-display text-xl font-semibold text-white">
              {active.caption}
            </p>
            {active.isExample && <p className="relative text-sm text-white/80">Imagen de ejemplo</p>}
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
