// pages/page.tsx
import React from 'react';
import { homePageData } from '@/data/homepage'; 
import Category from '../../components/Category'; 
import { CollectionData } from '../../models/collection'; 

const Page = () => {
  // Extract the collections data from the imported homePageData
  const collections: CollectionData[] = homePageData.storePublic.collection;

  return (
    <div>
      <Category collections={collections} />
    </div>
  );
};

export default Page;
