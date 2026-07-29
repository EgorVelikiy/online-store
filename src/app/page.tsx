import { Bestsellers } from '@/components/home/Bestsellers';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { CustomSizeSection } from '@/components/home/CustomSizeSection';
import { PromoCarousel } from '@/components/home/PromoCarousel/PromoCarousel';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14 px-4 py-10 sm:px-6 sm:py-14 lg:gap-16">
      <PromoCarousel />
      <CategoryGrid />
      <Bestsellers />
      <CustomSizeSection />
    </div>
  );
}
