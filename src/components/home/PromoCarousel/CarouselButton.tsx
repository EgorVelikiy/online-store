export function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-brand-brown hover:bg-surface-muted"
    >
      {children}
    </button>
  );
}
