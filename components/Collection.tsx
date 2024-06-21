'use client';
import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination, Autoplay} from 'swiper/modules';
import {CollectionData} from '../models/collection';

type CollectionProps = {
  collections: CollectionData[];
};

const Collection: React.FC<CollectionProps> = ({collections}) => {
  // Adjust the number of circles per row based on the screen size
  const circlesPerRow = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  // Split collections into groups based on circles per row
  const groupedCollections = [];
  let index = 0;
  while (index < collections.length) {
    groupedCollections.push(collections.slice(index, index + circlesPerRow.xl));
    index += circlesPerRow.xl;
  }

  return (
    <div className="text-center py-16 relative">
      <h2 className="text-4xl font-bold py-4">Shop The Collections</h2>
      <p className="text-slate-400 max-w-xl mx-auto text-center pb-6 mb-4">
        Shop the latest products from the most popular collections
      </p>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        className="mt-8 mx-auto max-w-screen-lg h-auto"
      >
        {groupedCollections.map((group, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {group.map((collection, index) => (
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
                  <p className="mt-4 text-lg font-medium transition-colors duration-300 group-hover:text-orange-500 cursor-pointer">
                    {collection.title}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style
        jsx
        global
      >{`
        .swiper-pagination {
          @apply bottom-5 left-0 right-0 flex justify-center items-center;
        }

        .swiper-pagination-bullet {
          background-color: black !important;
          opacity: 1 !important;
          width: 12px;
          height: 12px;
          margin: 0 4px;
        }

        .swiper-pagination-bullet-active {
          background-color: #ff6600 !important;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </div>
  );
};

export default Collection;
