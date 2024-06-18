// types.ts

import { Url } from "next/dist/shared/lib/router/router";

export interface Product {
    title: string;
    stockStatus: string;
    slug: string;
    type: string;
    salesPrice: number;
    price: number;
    id: string;
    featureImage: string;
  }
  
  export interface Collection {
    id: string;
    slug: string;
    title: string;
    featureImage: string;
    Product: Product[];
  }
  
  export interface HomePageData {
    collection: Collection[];
    storeBanners: Url; // Replace with the correct type if known
  }
  