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
