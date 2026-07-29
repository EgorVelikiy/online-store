import { ProductGallery } from '@/components/Product/ProductGallery/ProductGallery';
import { ProductDescription } from '@/components/Product/ProductInfo/ProductDescription';
import { ProductInfo } from '@/components/Product/ProductInfo/ProductInfo';
import { RelatedProducts } from '@/components/Product/RelatedProducts/RelatedProducts';

import { notFound } from 'next/navigation';
import { productsByCategory } from '@/data/products';

type ProductPageProps = {
  params: Promise<{
    category: keyof typeof productsByCategory;
    slug: string;
  }>;
};


export default async function ProductPage({params}: ProductPageProps) {
  const { category, slug } = await params;

  const product = productsByCategory[category]?.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-screen-1xl px-4 py-8 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[820px_1fr]">
        <ProductGallery images={product.images} title={product.title} />

        <ProductInfo />
      </section>

      <section className="mt-14">
        <ProductDescription />
      </section>

      <section className="mt-16">
        <RelatedProducts />
      </section>
    </div>
  );
}
