import { mainCategories } from '@/constants/categories';
import Image from 'next/image';
import Link from 'next/link';

export function CategoryGrid() {
  return (
    <section
      className="animate-fade-up [animation-delay:80ms]"
      aria-labelledby="categories-heading"
    >
      <div className="mb-6">
        <h2
          id="categories-heading"
          className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Основные категории
        </h2>
        <p className="mt-1 text-sm text-muted">
          Упаковка для бизнеса и подарков
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {mainCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={category.href}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md hover:shadow-brand-green/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[center_35%] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
