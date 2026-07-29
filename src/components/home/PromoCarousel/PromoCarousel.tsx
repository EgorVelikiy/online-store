'use client';

import { promoSlides } from '@/constants/categories';
import { toneClasses } from '@/constants/styles';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { CarouselButton } from './CarouselButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export function PromoCarousel() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 6000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelected();

    emblaApi.on('select', updateSelected);
    emblaApi.on('reInit', updateSelected);

    return () => {
      emblaApi.off('select', updateSelected);
      emblaApi.off('reInit', updateSelected);
    };
  }, [emblaApi]);

  return (
    <section className="animate-fade-up" aria-labelledby="promos-heading">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className="pl-2">
          <h2
            id="promos-heading"
            className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Акции и предложения
          </h2>

          <p className="mt-1 text-sm text-muted">
            Актуальные предложения магазина
          </p>
        </div>
        <div className="hidden gap-2 sm:flex pr-2">
          <CarouselButton label="Назад" onClick={() => emblaApi?.scrollPrev()}>
            <ChevronLeft className="size-5" />
          </CarouselButton>
          <CarouselButton label="Вперёд" onClick={() => emblaApi?.scrollNext()}>
            <ChevronRight className="size-5" />
          </CarouselButton>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {promoSlides.map((slide) => (
            <div key={slide.id} className="min-w-0 flex-[0_0_100%] pl-2 pr-2">
              <article
                className={cn(
                  'relative h-[420px] rounded-2xl bg-gradient-to-br p-6 text-white',
                  toneClasses[slide.tone],
                )}
              >
                <div className="relative flex h-full flex-col justify-end">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                    Акция
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">{slide.title}</h3>

                  <p className="mt-2 text-white/80">{slide.subtitle}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Перейти к слайду ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              selectedIndex === index
                ? 'w-8 bg-gray-900'
                : 'w-2 bg-border hover:bg-muted',
            )}
          />
        ))}
      </div>
    </section>
  );
}
