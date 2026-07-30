import { useEffect, useState } from "react";
import { X, Minus, Plus, Check, ShoppingCart } from "lucide-react";
import type { Product, Variant } from "@/lib/products";
import { formatRM } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add, setOpen } = useCart();
  const [variant, setVariant] = useState<Variant | null>(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) {
      setVariant(product.variants[0]);
      setQty(1);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [product]);

  if (!product || !variant) return null;

  const total = variant.price * qty;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[95vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-card shadow-soft sm:max-h-[90vh] sm:rounded-3xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white/90 text-foreground shadow-card transition hover:bg-white"
        >
          <X className="size-4" />
        </button>

        {/* IMAGE: shorter on mobile so variants are visible above the fold */}
        <div className="shrink-0 overflow-hidden bg-soft-pink">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover sm:h-72"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">{product.name}</h2>
            <span className="shrink-0 text-lg font-bold text-primary sm:text-xl">
              {product.customQuote ? "Custom Quote" : formatRM(variant.price)}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>

          <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-foreground">Select Option</div>
            <div className="space-y-2">
              {product.variants.map((v) => {
                const active = v.label === variant.label;
                return (
                  <button
                    key={v.label}
                    onClick={() => setVariant(v)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      active
                        ? "border-primary bg-soft-pink"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`grid size-5 place-items-center rounded-full border ${
                          active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                        }`}
                      >
                        {active && <Check className="size-3" />}
                      </span>
                      {v.label}
                    </span>
                    <span className="font-semibold text-primary">
                      {product.customQuote ? "Custom Quote" : formatRM(v.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Quantity</span>
            <div className="flex items-center gap-1 rounded-full border border-border bg-card">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid size-9 place-items-center rounded-full text-foreground hover:bg-soft-pink"
                aria-label="Decrease"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid size-9 place-items-center rounded-full text-foreground hover:bg-soft-pink"
                aria-label="Increase"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-border bg-card p-4 sm:p-5">
          <button
            onClick={() => {
              add(product, variant, qty);
              onClose();
              setOpen(true);
            }}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-105"
          >
            <ShoppingCart className="size-4" />
            Add to Cart · {product.customQuote ? "Custom Quote" : formatRM(total)}
          </button>
        </div>
      </div>
    </div>
  );
}
