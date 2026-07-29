export function RelatedProducts() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">
        Похожие товары
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-80 rounded-2xl border border-border bg-surface"
          />
        ))}
      </div>
    </section>
  );
}