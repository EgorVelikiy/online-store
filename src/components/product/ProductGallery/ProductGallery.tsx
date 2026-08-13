'use client';

import { getAssetPath } from '@/lib/getAssetPath';
import Image from 'next/image';
import { useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface p-10">
        <Image
          src={getAssetPath(images[selectedImage])}
          alt={title}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                selectedImage === index
                  ? 'border-brand-red'
                  : 'border-border hover:border-brand-red/40'
              }`}
            >
              <Image
                src={getAssetPath(image)}
                alt={`${title} ${index + 1}`}
                fill
                sizes="96px"
                className="cursor-pointer rounded-lg object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
