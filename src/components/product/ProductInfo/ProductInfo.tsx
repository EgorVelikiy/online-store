'use client'
import { useState } from 'react';

import { Modal } from '@/components/shared/OrderModal/OrderModal';
import { coverNames } from '@/constants/categories';
import { ProductType } from '@/types/product';
import { OrderModal } from '@/components/shared/OrderModal';

type ProductInfoProps = {
  product: ProductType;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>

      <section className="flex flex-col">
        <h1 className="text-3xl font-bold leading-tight text-ink">
          {product.title}
        </h1>

        <div className="mt-6">
          <span className="text-4xl font-bold text-brand-red">
            От {product.price} {product.currency}
          </span>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-semibold">
            Характеристики
          </h2>

          <dl className="space-y-3 text-sm">
            <Row
              label="Материал"
              value={product.material}
            />

            <Row
              label="Цвет"
              value={product.color}
            />

            {product.sizes && (
              <Row
                label="Размер"
                value={`${product.sizes.l} × ${product.sizes.w} × ${product.sizes.h} мм`}
              />
            )}

            {product.cover && (
              <Row
                label="Крышка"
                value={coverNames[product.cover]}
              />
            )}
          </dl>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => setIsOrderModalOpen(true)}
            className="
            mt-6
            h-13
            w-full
            rounded-xl
            bg-brand-red
            font-semibold
            text-white
            transition
            hover:opacity-90
            active:scale-[0.99]
          "
          >
            Сделать заказ
          </button>
          <OrderModal
            open={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            product={product}
          />
        </div>
      </section>
    </>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border pb-3 last:border-none">
      <dt className="text-muted">{label}</dt>

      <dd className="text-right font-medium text-ink">
        {value}
      </dd>
    </div>
  );
}