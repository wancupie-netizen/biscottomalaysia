import { useEffect, useState } from "react";
import { X, Minus, Plus, Trash2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useCart } from "@/lib/cart";
import { formatRM, WHATSAPP_NUMBER } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Mode = "Delivery" | "Pickup";

export function CartDrawer() {
  const { open, setOpen, items, setQty, setVariant, remove, subtotal, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    mode: "Delivery" as Mode,
    date: undefined as Date | undefined,
    address: "",
    notes: "",
  });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const hasEstimatedPrices = items.some((item) => Boolean(item.product.priceNote));
  const priceNotes = [...new Set(
    items
      .filter((item) => item.product.priceNote)
      .map((item) => item.product.name + ": " + item.product.priceNote),
  )].join("\n");

  if (!open) return null;

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date) return;
    const dateLabel = form.mode === "Delivery" ? "Delivery Date" : "Pickup Date";
    const lines = items
      .map(
        (i) =>
          `• ${i.product.name}\n  Option: ${i.variant.label}\n  Quantity: ${i.quantity}\n  Price: ${
            i.product.customQuote ? "Custom Quote" : (i.product.priceNote ? "From " : "") + formatRM(i.variant.price * i.quantity)
          }`,
      )
      .join("\n\n");
    const msg = `*NEW ORDER · BISCOTTO MALAYSIA*\n\nName: ${form.name}\nPhone: ${form.phone}\nMethod: ${form.mode}\n${dateLabel}: ${format(form.date, "d MMMM yyyy")}\nAddress: ${form.address || "-"}\nNotes: ${form.notes || "-"}\n\n====================\nORDER SUMMARY\n====================\n\n${lines}\n\n*${hasEstimatedPrices ? "Estimated total (from)" : "Total"}: ${formatRM(subtotal)}*${priceNotes ? "\n\n" + priceNotes : ""}\n\nThank you.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    clear();
    setCheckout(false);
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-card shadow-soft"
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-bold">
            {checkout ? "Checkout" : `Your Cart (${items.length})`}
          </h2>
          <button
            onClick={() => (checkout ? setCheckout(false) : setOpen(false))}
            className="grid size-9 place-items-center rounded-full hover:bg-soft-pink"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </header>

        {hasEstimatedPrices && (
          <p className="border-b border-border bg-soft-pink px-5 py-3 text-xs text-primary">
            Bento Cake prices start from RM28 per cake. Final price depends on design
            and will be confirmed via WhatsApp.
          </p>
        )}

        {checkout ? (
          <form onSubmit={sendWhatsApp} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Method">
                <div className="grid grid-cols-2 gap-2">
                  {(["Delivery", "Pickup"] as Mode[]).map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setForm({ ...form, mode: m })}
                      className={`h-11 rounded-full border text-sm font-semibold transition ${
                        form.mode === m
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </Field>
              <DateField
                mode={form.mode}
                value={form.date}
                onChange={(date: Date | undefined) => setForm({ ...form, date })}
              />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Orders are subject to availability and confirmation. Same-day orders may not be
                available. Our team will confirm the final pickup or delivery schedule via WhatsApp.
              </p>
              <Field label="Address">
                <textarea
                  rows={3}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="input min-h-[80px] resize-none"
                  placeholder={form.mode === "Pickup" ? "Pickup location (optional)" : ""}
                />
              </Field>
              <Field label="Notes">
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="input min-h-[64px] resize-none"
                />
              </Field>
            </div>
            <div className="border-t border-border p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{hasEstimatedPrices ? "Estimated subtotal (from)" : "Subtotal"}</span>
                <span className="text-lg font-bold text-primary">{formatRM(subtotal)}</span>
              </div>
              <button
                type="submit"
                disabled={!form.date}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-whatsapp-foreground shadow-soft transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Order via WhatsApp
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                  <p className="text-sm">Your cart is empty.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li
                      key={i.key}
                      className="flex gap-3 rounded-2xl border border-border bg-card p-3"
                    >
                      <img
                        src={i.product.image}
                        alt={i.product.name}
                        className="size-20 shrink-0 rounded-xl object-cover"
                      />
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold">{i.product.name}</div>
                            {i.product.priceNote && (
                              <p className="mt-1 text-xs text-primary">{i.product.priceNote}</p>
                            )}
                            <div className="text-xs text-muted-foreground">
                              {i.product.customQuote
                                ? "Custom Quote"
                                : `${formatRM(i.variant.price)} / ${i.variant.label}`}
                            </div>
                          </div>
                          <button
                            onClick={() => remove(i.key)}
                            aria-label="Remove"
                            className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-soft-pink hover:text-primary"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                        <select
                          value={i.variant.label}
                          onChange={(e) => {
                            const v = i.product.variants.find((x) => x.label === e.target.value);
                            if (v) setVariant(i.key, v);
                          }}
                          className="h-8 rounded-full border border-border bg-card px-3 text-xs font-medium focus:border-primary focus:outline-none"
                        >
                          {i.product.variants.map((v) => (
                          <option key={v.label} value={v.label}>
                            {i.product.customQuote ? v.label : `${v.label} — ${formatRM(v.price)}`}
                          </option>
                          ))}
                        </select>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-border">
                            <button
                              onClick={() => setQty(i.key, i.quantity - 1)}
                              className="grid size-7 place-items-center rounded-full hover:bg-soft-pink"
                              aria-label="Decrease"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold">
                              {i.quantity}
                            </span>
                            <button
                              onClick={() => setQty(i.key, i.quantity + 1)}
                              className="grid size-7 place-items-center rounded-full hover:bg-soft-pink"
                              aria-label="Increase"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-primary">
                            {i.product.customQuote
                              ? "Custom Quote"
                              : formatRM(i.variant.price * i.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t border-border p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{hasEstimatedPrices ? "Estimated subtotal (from)" : "Subtotal"}</span>
                  <span className="text-lg font-bold text-primary">{formatRM(subtotal)}</span>
                </div>
                <button
                  onClick={() => setCheckout(true)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-105"
                >
                  View Cart & Checkout
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-soft-pink text-sm font-semibold text-primary transition hover:brightness-95"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </>
        )}
      </aside>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function DateField({
  mode,
  value,
  onChange,
}: {
  mode: Mode;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}) {
  const label = mode === "Delivery" ? "Delivery Date" : "Pickup Date";
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Field label={label}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "input inline-flex h-11 w-full items-center justify-between text-left font-medium",
              !value && "text-muted-foreground",
            )}
          >
            <span>{value ? format(value, "d MMMM yyyy") : `Select ${label.toLowerCase()}`}</span>
            <CalendarIcon className="size-4 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="pointer-events-auto w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
            disabled={(date) => date < today}
            className="pointer-events-auto p-3"
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
