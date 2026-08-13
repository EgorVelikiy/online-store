'use client'
import CustomSizeForm, { SizeFields } from '@/components/forms/CustomSizeForm/CustomSizeForm';
import { useState } from 'react';
import { OrderModal } from '../shared/OrderModal';
import { ProductCategory, ProductMaterial, ProductType } from '@/types/product';
import { CustomBoxData } from '@/types/order';

export function CustomSizeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customBox, setCustomBox] =
    useState<CustomBoxData | null>(null);

  const product: ProductType = {
    id: 'custom-size-box',
    slug: 'korobka-s-custom-razmerami',
    title: 'Коробка с пользовательскими размерами',
    images: [],
    imagePreview: '',
    price: 0,
    currency: '₽',
    category: 'boxes',
    materialType: 'micro',
    material: '',
    colorId: '',
    color: ''
  }
  return (
    <section
      className="animate-fade-up [animation-delay:200ms] overflow-hidden rounded-3xl border border-border bg-surface"
      aria-labelledby="custom-size-heading"
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(47,93,50,0.1), transparent 45%), radial-gradient(circle at 100% 100%, rgba(198,40,40,0.08), transparent 40%)',
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-brown uppercase">
              Индивидуальный размер
            </p>
            <h2
              id="custom-size-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Подбор коробки под ваши размеры
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              У нас более 100 различных размеров, которые пока не находятся в нашем каталоге.
              Укажите длину, ширину и высоту интересующей Вас коробки — подберём подходящий вариант.
            </p>
          </div>
        </div>

        <CustomSizeForm
          onSubmit={(values) => {
            setCustomBox(values);
            setIsModalOpen(true);
          }}
        />

        {customBox && (
          <OrderModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            product={product}
            customBox={customBox}
          />
        )}
      </div>
    </section>
  );
}

