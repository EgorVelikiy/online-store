export function ProductDescription() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-6 h-8 w-60 rounded bg-surface-muted" />

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-5 rounded bg-surface-muted"
          />
        ))}
      </div>
    </section>
  );
}