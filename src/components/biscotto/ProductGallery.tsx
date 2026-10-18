import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductGallery({ product }: { product: Product }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const images = product.images?.length ? product.images : [product.image];

  function goTo(index: number) {
    const element = track.current;
    if (!element) return;
    element.scrollTo({
      left: element.clientWidth * index,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <div
      role="region"
      aria-label={product.name + " image gallery"}
      aria-roledescription="carousel"
      className="relative shrink-0 overflow-hidden bg-soft-pink"
    >
      <div
        ref={track}
        tabIndex={0}
        aria-label="Swipe or use arrow keys to browse images"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const element = event.currentTarget;
          if (element.clientWidth) {
            setActive(Math.max(0, Math.min(
              images.length - 1,
              Math.round(element.scrollLeft / element.clientWidth),
            )));
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(Math.min(images.length - 1, active + 1));
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(Math.max(0, active - 1));
          }
        }}
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={product.name + " - image " + (index + 1) + " of " + images.length}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            className="h-40 w-full shrink-0 snap-center object-contain sm:h-72"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
            className="absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-card disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            disabled={active === images.length - 1}
            onClick={() => goTo(active + 1)}
            className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-card disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="flex items-center justify-center gap-1 py-1">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={"View image " + (index + 1)}
                aria-current={active === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className="grid size-6 place-items-center rounded-full"
              >
                <span className={active === index
                  ? "size-2 rounded-full bg-primary"
                  : "size-2 rounded-full bg-primary/30"} />
              </button>
            ))}
            <span className="ml-2 text-xs text-muted-foreground" aria-live="polite">
              {active + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
