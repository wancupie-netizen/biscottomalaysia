import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product, Variant } from "./products";

export type CartItem = {
  key: string; // productId + variant label
  product: Product;
  variant: Variant;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  add: (product: Product, variant: Variant, quantity?: number) => void;
  setQty: (key: string, qty: number) => void;
  setVariant: (key: string, variant: Variant) => void;
  remove: (key: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add: CartCtx["add"] = (product, variant, quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}__${variant.label}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, { key, product, variant, quantity }];
    });
  };

  const setQty: CartCtx["setQty"] = (key, qty) => {
    if (qty <= 0) return setItems((prev) => prev.filter((i) => i.key !== key));
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity: qty } : i)));
  };

  const setVariant: CartCtx["setVariant"] = (key, variant) => {
    setItems((prev) => {
      const item = prev.find((i) => i.key === key);
      if (!item) return prev;
      const newKey = `${item.product.id}__${variant.label}`;
      // merge if a row with the new variant already exists
      const merged = prev.find((i) => i.key === newKey && i.key !== key);
      if (merged) {
        return prev
          .filter((i) => i.key !== key)
          .map((i) => (i.key === newKey ? { ...i, quantity: i.quantity + item.quantity } : i));
      }
      return prev.map((i) => (i.key === key ? { ...i, key: newKey, variant } : i));
    });
  };

  const remove: CartCtx["remove"] = (key) =>
    setItems((prev) => prev.filter((i) => i.key !== key));

  const clear = () => setItems([]);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.quantity * i.variant.price, 0);

  return (
    <Ctx.Provider
      value={{ items, add, setQty, setVariant, remove, clear, open, setOpen, count, subtotal }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be inside CartProvider");
  return v;
}
