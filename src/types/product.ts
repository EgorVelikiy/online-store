export type BoxSizesType = {
  l: number;
  w: number;
  h?: number;
}

export type ProductCategory = 'boxes' | 'packages' | 'filler' | 'tissue' | 'ribbons';

export type ProductMaterial = 
  | 'paperboard'
  | 'micro'
  | 'paperAndPlastic'
  | 'paper'
  | 'polypropylene'
  | 'satin'
  | 'textile'
  | 'organza'
  | 'jute';

export type ProductType = {
  id: string;

  slug: string

  title: string;

  images: string[];

  imagePreview: string;

  price: number;

  currency: string;

  category: ProductCategory;

  materialType: ProductMaterial;

  material: string;

  colorId: string;

  color: string;

  cover?: 'hinged' | 'separate' | 'window'

  sizes?: BoxSizesType;

  isPopular?: boolean;

  description?: string;

};
