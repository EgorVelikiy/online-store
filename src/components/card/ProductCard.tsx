import { getAssetPath } from '@/lib/getAssetPath';
import { ProductType } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <li key={product.id}>
      <Link
        href={`/catalog/${product.category}/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={getAssetPath(product.imagePreview)}
            alt={product.title}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover p-4 object-[center_65%] transition-transform duration-300 group-hover:scale-101"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-lg font-semibold text-ink">
            {product.title}
          </h3>

          <div className="mt-auto pt-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-brand-red">
                От {product.price} {product.currency}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white transition hover:bg-brand-red/90 active:scale-[0.98]"
          >
            Заказать
          </button>
        </div>
      </Link>
    </li>
  );
}
