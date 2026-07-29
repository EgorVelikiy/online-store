import { notFound } from 'next/navigation';

import { catalogConfig } from '@/data/filters';
import { CatalogContent } from '@/components/catalog/CatalogContent/CatalogContent';

export function generateStaticParams() {
  return Object.keys(catalogConfig).map((category) => ({
    category,
  }));
}

type Props = {
  params: Promise<{
    category: keyof typeof catalogConfig;
  }>;
};

export default async function CatalogPage({ params }: Props) {
  const { category } = await params;

  const config = catalogConfig[category];

  if (!config) {
    notFound();
  }

  return <CatalogContent config={config} />
}
