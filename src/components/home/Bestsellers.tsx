'use client';

import { popularProducts } from '@/data/products';
import { ProductGrid } from '../catalog/ProductGrid/ProductGrid';

export function Bestsellers() {
  return (
    <section
      aria-labelledby="bestsellers-heading"
    >
      <div className="mb-6">
        <h2
          id="bestsellers-heading"
          className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Лидеры продаж
        </h2>
        <p className="mt-1 text-sm text-muted">
          Самые популярные товары магазина
        </p>
      </div>

      <ProductGrid products={popularProducts} />
    </section>
  );
}
