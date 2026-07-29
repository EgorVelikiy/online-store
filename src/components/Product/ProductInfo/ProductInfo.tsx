import { QuantitySelector } from "../QuantitySelector/QuantitySelector";

export function ProductInfo() {
  return (
    <section className="flex flex-col">
      <div className="h-10 w-2/3 rounded bg-surface-muted" />

      <div className="mt-6 h-8 w-40 rounded bg-surface-muted" />

      <div className="mt-8 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-6 rounded bg-surface-muted"
          />
        ))}
      </div>

      <div className="mt-10">
        <QuantitySelector />
      </div>

      <button
        className="mt-8 h-12 rounded-xl bg-brand-red font-semibold text-white transition hover:opacity-90"
      >
        Добавить в корзину
      </button>
    </section>
  );
}