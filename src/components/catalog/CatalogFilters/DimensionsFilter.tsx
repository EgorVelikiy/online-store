'use client';

import { CatalogFiltersState, SetFilters } from '@/types/catalogFilters';

type DimensionsFilterProps = {
  filters: CatalogFiltersState;
  setFilters: SetFilters;
};

export function DimensionsFilter({
  filters,
  setFilters,
}: DimensionsFilterProps) {
  function handleChange(
    key: keyof CatalogFiltersState['dimensions'],
    value: string,
  ) {
    setFilters((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [key]: value,
      },
    }));
  }

  return (
    <div className="grid gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">Длина</span>

        <input
          type="number"
          placeholder="мм"
          value={filters.dimensions.l === 0 ? '' : filters.dimensions.l}
          onChange={(e) => handleChange('l', e.target.value)}
          className="rounded-xl border border-border bg-white px-4 py-2 outline-none transition focus:border-brand-green"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">Ширина</span>

        <input
          type="number"
          placeholder="мм"
          value={filters.dimensions.w === 0 ? '' : filters.dimensions.w}
          onChange={(e) => handleChange('w', e.target.value)}
          className="rounded-xl border border-border bg-white px-4 py-2 outline-none transition focus:border-brand-green"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">Высота</span>

        <input
          type="number"
          placeholder="мм"
          value={filters.dimensions.h === 0 ? '' : filters.dimensions.h}
          onChange={(e) => handleChange('h', e.target.value)}
          className="rounded-xl border border-border bg-white px-4 py-2 outline-none transition focus:border-brand-green"
        />
      </label>
    </div>
  );
}
