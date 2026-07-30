import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/biscotto/Header";
import { Hero } from "@/components/biscotto/Hero";
import { ProductCard } from "@/components/biscotto/ProductCard";
import { ProductModal } from "@/components/biscotto/ProductModal";
import { CartDrawer } from "@/components/biscotto/CartDrawer";
import { products, categories, type Product } from "@/lib/products";
import {
  ShieldCheck,
  Sparkles,
  Cake,
  Gift,
  Cookie,
  HeartHandshake,
  Star,
  Users,
  PackageCheck,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biscotto Malaysia · Premium Dessert Boutique" },
      {
        name: "description",
        content:
          "Freshly made desserts & cakes, baked fresh daily with premium ingredients. Order easily via WhatsApp.",
      },
      { property: "og:title", content: "Biscotto Malaysia · Premium Dessert Boutique" },
      {
        property: "og:description",
        content: "Premium dessert boutique — tiramisu, mini choux, cakes & event cakes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}

const categoryIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Desserts: Cookie,
  Cakes: Cake,
  "Mini Dessert": Sparkles,
  "Event Cakes": Gift,
};

function Page() {
  const [active, setActive] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const bestsellers = products.filter((p) => p.bestseller);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filterByName = (p: Product) =>
    p.name.toLowerCase().includes(normalizedQuery);

  const filteredBestsellers = isSearching
    ? bestsellers.filter(filterByName)
    : bestsellers;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:px-6 md:grid-cols-4">
          {[
            { icon: Cookie, t: "Freshly Made", s: "Every day" },
            { icon: Sparkles, t: "Premium Ingredients", s: "High-quality ingredients" },
            { icon: PackageCheck, t: "Safe Packaging", s: "Secure packaging" },
            { icon: Gift, t: "Perfect for Any Occasion", s: "Your special day" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft-pink text-primary">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{t}</div>
                <div className="truncate text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="relative mx-auto max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="h-12 w-full rounded-2xl border border-border bg-card py-3 pl-12 pr-4 text-sm text-foreground shadow-card outline-none transition focus:border-primary focus:ring-[3px] focus:ring-primary/20"
          />
        </div>
      </section>

      {/* Categories */}
      <section id="menu" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Categories</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Made for Every Sweet Moment</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {categories.map((c) => {
            const Icon = categoryIcon[c] ?? Cookie;
            return (
              <a
                key={c}
                href={`#cat-${c}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-card transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="grid size-12 place-items-center rounded-full bg-soft-pink text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold">{c}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Best Seller */}
      <section id="bestseller" className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Featured</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Best Seller</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {filteredBestsellers.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setActive} />
          ))}
        </div>
      </section>

      {/* Category sections */}
      {categories.map((c) => {
        const items = products.filter((p) => p.category === c && filterByName(p));
        if (!items.length) return null;
        return (
          <section
            key={c}
            id={`cat-${c}`}
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14"
          >
            <div className="mb-6">
              <SectionEyebrow>{c}</SectionEyebrow>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{c}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={setActive} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Badges */}
      <section className="bg-soft-pink/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-5">
          {[
            { icon: ShieldCheck, t: "Halal", s: "Halal Certified" },
            { icon: Sparkles, t: "Premium Quality", s: "Quality Ingredients" },
            { icon: Cookie, t: "Freshly Made", s: "Every Day" },
            { icon: Users, t: "Trusted by", s: "1000+ Customers" },
            { icon: Star, t: "5 Star Rating", s: "Guaranteed Satisfaction" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className="size-6 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{t}</div>
                <div className="truncate text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Dessert Boutique Concept</SectionEyebrow>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Sweetness, made with love
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A feminine, soft, and premium concept — perfect for customers seeking
              quality desserts for everyday treats and special occasions.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: HeartHandshake, t: "Premium Quality" },
                { icon: Cake, t: "Made with Love" },
                { icon: Gift, t: "Every Occasion" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <Icon className="mx-auto size-6 text-primary" />
                  <div className="mt-2 text-xs font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85"
              alt="Strawberry dessert"
              className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
          <img
            src="https://res.cloudinary.com/drder1b6v/image/upload/v1781513201/logo-main.webp.webp"
            alt="Biscotto Malaysia"
            className="h-8 w-auto sm:h-10"
          />
          <p>Premium Dessert Boutique · Made with love · Just for you</p>
          <p className="text-xs">© {new Date().getFullYear()} Biscotto Malaysia</p>
        </div>
      </footer>

      <ProductModal product={active} onClose={() => setActive(null)} />
      <CartDrawer />
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}
