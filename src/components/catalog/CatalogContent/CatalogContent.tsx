'use client';

import { CatalogConfigType } from '@/data/filters';
import { initialFilters } from '@/data/filters/initialFilterState';
import { filterProducts } from '@/hooks/filterProducts';
import { useMemo, useState } from 'react';
import { CatalogFilters } from '../CatalogFilters/CatalogFilters';
import { ProductGrid } from '../ProductGrid/ProductGrid';

export function CatalogContent({ config }: { config: CatalogConfigType }) {
  const [filters, setFilters] = useState(initialFilters);

  const filteredProducts = useMemo(() => {
    return filterProducts(config.products, filters);
  }, [config.products, filters]);

  return (
    <div className="mx-auto w-full max-w-screen-2xl x-4 py-5 overflow-x-hidden">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <CatalogFilters
          groups={config.filters}
          filters={filters}
          setFilters={setFilters}
        />

        <div aria-labelledby="catalog-boxes-heading">
          <div className="mb-6">
            <h2
              id="bestsellers-heading"
              className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              {config.title}
            </h2>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
