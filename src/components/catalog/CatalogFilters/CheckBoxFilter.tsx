import {
  CatalogFiltersState,
  FilterGroup,
  FilterOption,
  SetFilters,
} from '@/types/catalogFilters';


type FilterCheckboxProps = {
  option: FilterOption;
  group: FilterGroup;
  filters: CatalogFiltersState;
  setFilters: SetFilters;
};

export function FilterCheckbox({
  option,
  group,
  setFilters,
}: FilterCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          onChange={(e) => {
            const key = group.id as 'material' | 'color' | 'cover';

            setFilters((prev) => ({
              ...prev,
              [key]: e.target.checked
                ? [...prev[key], option.id]
                : prev[key].filter((id) => id !== option.id),
            }));
          }}
          disabled={option.disabled}
          className="size-4 rounded border-border text-brand-green focus:ring-brand-green"
        />

        <span className={option.disabled ? 'text-muted' : 'text-ink'}>
          {option.label}
        </span>
      </div>

      {option.count !== undefined && (
        <span className="text-sm text-muted">{option.count}</span>
      )}
    </label>
  );
}
