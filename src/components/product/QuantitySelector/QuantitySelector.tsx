export function QuantitySelector() {
  return (
    <div className="flex items-center gap-3">
      <button className="size-10 rounded-lg border border-border">
        −
      </button>

      <div className="flex h-10 w-16 items-center justify-center rounded-lg border border-border">
        1
      </div>

      <button className="size-10 rounded-lg border border-border">
        +
      </button>
    </div>
  );
}