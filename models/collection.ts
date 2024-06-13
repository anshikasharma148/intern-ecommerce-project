
export interface Product {
    title: string;         
    stockStatus: 'IN_STOCK' | 'OUT_OF_STOCK';  
    slug: string;           
    salesPrice: number;     
    price: number;         
    id: string;             
    featureImage: string;   
  }
  
  
  export interface HomePageData {
    featuredProducts: Product[];  
  }
  