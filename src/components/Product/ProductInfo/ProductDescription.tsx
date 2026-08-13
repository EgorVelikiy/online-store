type ProductDescriptionProps = {
  description: string;
};

export function ProductDescription({description} : ProductDescriptionProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <h3 className="text-2xl font-bold leading-tight text-ink">
        Описание
      </h3>

      <div className="space-y-3">
        <p className="mt-4 leading-7 text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}