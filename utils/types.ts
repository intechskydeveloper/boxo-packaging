export type ProductImage = {
  id: string;
  createdAt: Date;
  url: string;
  alt: string;
};

export type ProductSpecs = {
  id: number;
  productId: string;
  rowTitle: string;
  rowData: string;
};

export type FeaturedSubCategory = {
  id: string;
  name: string;
  image: string;
  altText: string | null;
  imageExplanation: string | null;
  createdAt: Date;
  featured?: boolean;
};

export type ProductDetails = {
  name: string;
  paragraph: string;
  richText?: string;
  altText: string;
  inStock: boolean;
  imageExplanation: string;
  images: ProductImage[];
  specification?: ProductSpecs[];
};

export type SubCategoryWithProducts = {
  id: string;
  name: string;
  images: any;
  altText: string | null;
  imageExplanation: string | null;
  createdAt: Date;
};
