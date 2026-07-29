export function CustomSizeFormField({
    id,
    label,
    value,
    onChange,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <label htmlFor={id} className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
            <input
                id={id}
                name={id}
                type="number"
                inputMode="decimal"
                min="0"
                step="0.1"
                placeholder="мм"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-[box-shadow,border-color] placeholder:text-muted/70 focus:border-brand-green focus:shadow-[0_0_0_3px_var(--ring)]"
            />
        </label>
    );
}