// import { ProductType } from "@/types/product";

// type RelatedProductsProps = {
//   currentProduct: ProductType;
// };

// export function RelatedProducts() {
//   return (
//     <section>
//       <h2 className="mb-6 text-2xl font-semibold">
//         Похожие товары
//       </h2>

//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         {Array.from({ length: 4 }).map((_, index) => (
//           <div
//             key={index}
//             className="h-80 rounded-2xl border border-border bg-surface"
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import { ProductGrid } from '@/components/catalog/ProductGrid/ProductGrid';
import { getRelatedProducts, productsByCategory } from '@/data/products';
import { ProductType } from '@/types/product';

type RelatedProductsProps = {
  currentProduct: ProductType;
};

export function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const products = getRelatedProducts(currentProduct);

  if (!products.length) {
    return null;
  }

  return (
    <section aria-labelledby="related-products-heading">
      <div className="mb-6">
        <h2
          id="related-products-heading"
          className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Похожие товары
        </h2>

        <p className="mt-2 text-muted">
          Возможно, вас также заинтересуют эти товары
        </p>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}