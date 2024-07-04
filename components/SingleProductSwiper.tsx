import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

interface ProductSwiperProps {
  gallery: { location: string }[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ gallery }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.location} alt={`Product image ${index + 1}`} width={400} height={533} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: black;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: orange;
        }
      `}</style>
    </>
  );
};

export default ProductSwiper;
