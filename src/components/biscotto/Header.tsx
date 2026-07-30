import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";
import { categories } from "@/lib/products";

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center">
          <img
            src="https://res.cloudinary.com/drder1b6v/image/upload/v1781513201/logo-main.webp.webp"
            alt="Biscotto Malaysia"
            className="h-[45px] w-auto sm:h-[55px]"
            loading="eager"
          />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 lg:flex">
          <a href="#top" className="hover:text-primary">Home</a>
          {categories.map((c) => (
            <a key={c} href={`#cat-${c}`} className="hover:text-primary">{c}</a>
          ))}
          <a href="#about" className="hover:text-primary">About Us</a>
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-105 sm:h-11 sm:px-5"
        >
          <ShoppingCart className="size-4" />
          Cart ({count})
        </button>
      </div>
    </header>
  );
}
