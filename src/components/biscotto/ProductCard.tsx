import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatRM } from "@/lib/products";

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (p: Product) => void;
}) {
  const startPrice = Math.min(...product.variants.map((v) => v.price));
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block aspect-square overflow-hidden bg-soft-pink"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Best Seller
          </span>
        )}
      </button>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground sm:text-lg">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-1 flex items-baseline gap-1">
          {product.customQuote ? (
            <span className="text-lg font-bold text-primary">Custom Quote</span>
          ) : (
            <>
              <span className="text-xs text-muted-foreground">from</span>
              <span className="text-lg font-bold text-primary">{formatRM(startPrice)}</span>
            </>
          )}
        </div>
        <button
          onClick={() => onOpen(product)}
          className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-105"
        >
          <ShoppingCart className="size-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
