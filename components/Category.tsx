// components/Category.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import {CollectionData} from '../models/category';

type CategoryProps = {
  collections: CollectionData[];
};

const Category: React.FC<CategoryProps> = ({collections}) => {
  return (
    <div className="text-center py-16 relative">
      <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 text-[var(--primary-color)]">
          Shop All Categories
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[var(--subtext-hover)] max-w-xl mx-auto text-center pb-6 mb-4">
          Shop the latest products from the most popular collections
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="flex flex-col items-center group mb-4"
            >
              <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${collection.featureImage}`}
                  alt={collection.title}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-lg font-medium transition-colors duration-300 group-hover:text-[var(--hover-color)] cursor-pointer">
                {collection.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
