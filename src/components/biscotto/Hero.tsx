import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
            <Sparkles className="size-3.5" /> Premium Desserts
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Freshly Made <br />
            <span className="text-primary">Desserts & Cakes</span>
          </h1>
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            Made fresh daily with premium ingredients for your sweetest moments.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#bestseller"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-105"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-6 text-sm font-semibold text-primary backdrop-blur transition hover:bg-white"
            >
              View Menu
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-white/40 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85"
            alt="Premium tiramisu dessert"
            className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-soft"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
