// src/types.ts
export type Product = {
  title: string;
  stockStatus: string;
  slug: string;
  type: string;
  salesPrice: number;
  price: number;
  id: string;
  featureImage: string;
};

export type CollectionData = {
  id: string;
  slug: string;
  title: string;
  featureImage: string;
  Product: Product[];
};
