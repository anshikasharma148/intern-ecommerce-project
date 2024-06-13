'use client';

import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import kids from 'E:/intern-ecommerce-project/public/kids.jpg';
import ladies from 'E:/intern-ecommerce-project/public/ladies.jpg';
import mens from 'E:/intern-ecommerce-project/public/mens.jpg';
import smartwatch from 'E:/intern-ecommerce-project/public/smartwatch.jpg';
import sunglass from 'E:/intern-ecommerce-project/public/sunglass.jpg';

export default function Collection() {
  const collections = [
    {title: "Men's Wear", imgSrc: mens},
    {title: 'Ladies Wear', imgSrc: ladies},
    {title: 'Kids Wear', imgSrc: kids},
    {title: 'Smart Watch', imgSrc: smartwatch},
    {title: 'Sunglasses', imgSrc: sunglass},
  ];

  // Adjust the number of circles per row based on the screen size
  const circlesPerRow = {
    xl: 5,
    md: 2,
    sm: 1,
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
      <div className="absolute top-4 right-4 mt-16">
        {/* <Link href="/collections" className="text-gray-600 hover:text-gray-800 transition-colors">
          See more Collections →
        </Link> */}
      </div>
      <h2 className="text-4xl font-bold py-4">Shop The Collections</h2>
      <p className="text-slate-400 max-w-xl mx-auto text-center pb-2">
        Shop the latest products from the most popular collections
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        className="mt-8"
      >
        {groupedCollections.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center space-x-8 md:flex-row flex-col md:flex-wrap">
              {group.map((collection, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center ${idx === 1 && index !== 0 ? 'md:mt-8' : ''} group`}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={collection.imgSrc}
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
      <style jsx>{`
        @media (max-width: 1024px) {
          .md:flex-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
