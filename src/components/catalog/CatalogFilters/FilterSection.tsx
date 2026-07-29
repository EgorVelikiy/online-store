'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import {
  CatalogFiltersState,
  FilterGroup,
  SetFilters,
} from '@/types/catalogFilters';
import { FilterCheckbox } from './CheckBoxFilter';
import { DimensionsFilter } from './DimensionsFilter';

type Props = {
  group: FilterGroup;
  filters: CatalogFiltersState;
  setFilters: SetFilters;
};

export function FilterSection({ group, filters, setFilters }: Props) {
  const [opened, setOpened] = useState(group.defaultOpen ?? true);

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpened((prev) => !prev)}
        className="flex w-full items-center justify-between p-5"
      >
        <span className="font-semibold text-ink">{group.title}</span>

        <ChevronDown
          className={cn(
            'transition-transform duration-200',
            opened && 'rotate-180',
          )}
        />
      </button>

      <div
        className={cn(
          'grid transition-all duration-300',
          opened ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border p-5">
            {group.type === 'dimensions' ? (
              <DimensionsFilter filters={filters} setFilters={setFilters} />
            ) : (
              <div className="space-y-3">
                {group.options?.map((option) => (
                  <FilterCheckbox
                    key={option.id}
                    option={option}
                    group={group}
                    filters={filters}
                    setFilters={setFilters}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
