import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { variableproduct } from '../data/variableproductdata'; // Adjust the path as necessary

interface ImageItem {
  location: string;
}

const ProductSwiper: React.FC = () => {
  const gallery: ImageItem[] = variableproduct.gallery.split(';').map((item: string) => JSON.parse(item));

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
    >
      {gallery.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image.location} alt={`Product image ${index + 1}`} width={400} height={533} />
        </SwiperSlide>
      ))}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: black;
        }
        .swiper-pagination-bullet-active {
          background-color: orange;
        }
      `}</style>
    </Swiper>
  );
};

export default ProductSwiper;
