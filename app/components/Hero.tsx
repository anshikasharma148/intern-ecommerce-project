'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


import bg1 from 'E:/intern-ecommerce-project/public/bg1.jpg';
import bg2 from 'E:/intern-ecommerce-project/public/bg2.jpg';
import bg3 from 'E:/intern-ecommerce-project/public/bg3.jpg';

export default function Hero() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{ height: '100vh' }}
      >
        {[bg1, bg2, bg3].map((bg, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image src={bg} alt={`bg${index + 1}`} layout="fill" objectFit="cover" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-slide-up">
                <div className="text-center px-8 text-white">
                  {/* Content Here */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
