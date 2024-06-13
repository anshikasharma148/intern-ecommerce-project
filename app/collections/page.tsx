'use client';
import React from 'react';
import Image, {StaticImageData} from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';

// Import images
import mens from 'E:/intern-ecommerce-project/public/Men/mens.jpg';
import clothing from 'E:/intern-ecommerce-project/public/Men/man.jpg';
import formal from 'E:/intern-ecommerce-project/public/Men/formal.webp';
import access from 'E:/intern-ecommerce-project/public/Men/maccess.png';
import shoes from 'E:/intern-ecommerce-project/public/Men/shoes.jpg';
import ladies from 'E:/intern-ecommerce-project/public/women/ladies.jpg';
import waccess from 'E:/intern-ecommerce-project/public/women/waccess.png';
import cloth from 'E:/intern-ecommerce-project/public/women/cloth.png';
import dress from 'E:/intern-ecommerce-project/public/women/dress.jpg';
import wshoes from 'E:/intern-ecommerce-project/public/women/wshoes.jpg';
import boys from 'E:/intern-ecommerce-project/public/kids/boys.jpg';
import kaccess from 'E:/intern-ecommerce-project/public/kids/kaccess.jpg';
import kcloth from 'E:/intern-ecommerce-project/public/kids/kcloth.jpg';
import kids from 'E:/intern-ecommerce-project/public/kids/kids.jpg';
import kshoes from 'E:/intern-ecommerce-project/public/kids/kshoes.jpg';
import beauty from 'E:/intern-ecommerce-project/public/beauty/beauty.jpg';
import frag from 'E:/intern-ecommerce-project/public/beauty/frag.webp';
import hair from 'E:/intern-ecommerce-project/public/beauty/haircare.webp';
import makeup from 'E:/intern-ecommerce-project/public/beauty/makeup.jpg';
import skin from 'E:/intern-ecommerce-project/public/beauty/skincare.jpg';
import elec from 'E:/intern-ecommerce-project/public/electrical/elec.jpg';
import gadgets from 'E:/intern-ecommerce-project/public/electrical/gadgets.jpg';
import home from 'E:/intern-ecommerce-project/public/electrical/home.jpg';
import kitchen from 'E:/intern-ecommerce-project/public/electrical/kitchen.jpg';
import personal from 'E:/intern-ecommerce-project/public/electrical/personal.jpg';
import gaming from 'E:/intern-ecommerce-project/public/technology/gaming.jpg';
import laptop from 'E:/intern-ecommerce-project/public/technology/laptop.webp';
import mobile from 'E:/intern-ecommerce-project/public/technology/mobile.jpg';
import tablet from 'E:/intern-ecommerce-project/public/technology/tablets.webp';
import tech from 'E:/intern-ecommerce-project/public/technology/tech.jpg';

// Define CollectionItem interface
interface CollectionItem {
  title: string;
  imgSrc: StaticImageData;
}

// Define SectionProps interface
interface SectionProps {
  title: string;
  collections: CollectionItem[];
}

export default function Collection() {
  const mensCollections: CollectionItem[] = [
    {title: "Men's Fashion", imgSrc: mens},
    {title: "Men's Clothing", imgSrc: clothing},
    {title: "Men's Accessories", imgSrc: access},
    {title: "Men's Shoes", imgSrc: shoes},
    {title: "Men's Formal Wear", imgSrc: formal},
  ];

  const womensCollections: CollectionItem[] = [
    {title: "Women's Fashion", imgSrc: ladies},
    {title: "Women's Clothing", imgSrc: cloth},
    {title: "Women's Accessories", imgSrc: waccess},
    {title: "Women's Shoes", imgSrc: wshoes},
    {title: "Women's Dresses", imgSrc: dress},
  ];

  const kidsCollections: CollectionItem[] = [
    {title: "Kids' Fashion", imgSrc: kids},
    {title: "Boys' Wear", imgSrc: boys},
    {title: "Girls' Wear", imgSrc: kcloth},
    {title: "Kids' Accessories", imgSrc: kaccess},
    {title: "Kids' Shoes", imgSrc: kshoes},
  ];

  const beautyCollections: CollectionItem[] = [
    {title: 'Beauty Products', imgSrc: beauty},
    {title: 'Makeup', imgSrc: makeup},
    {title: 'Skincare', imgSrc: skin},
    {title: 'Haircare', imgSrc: hair},
    {title: 'Fragrances', imgSrc: frag},
  ];

  const appliancesCollections: CollectionItem[] = [
    {title: 'Electrical Appliances', imgSrc: elec},
    {title: 'Kitchen Appliances', imgSrc: kitchen},
    {title: 'Home Appliances', imgSrc: home},
    {title: 'Personal Care Appliances', imgSrc: personal},
    {title: 'Gadgets & Accessories', imgSrc: gadgets},
  ];

  const technologyCollections: CollectionItem[] = [
    {title: 'Technology', imgSrc: tech},
    {title: 'Mobile Phones', imgSrc: mobile},
    {title: 'Computers & Laptops', imgSrc: laptop},
    {title: 'Tablets & E-Readers', imgSrc: tablet},
    {title: 'Gaming', imgSrc: gaming},
  ];

  return (
    <div className="text-center py-16 max-w-[1200px] 2xl:max-w-[1440px]">
      <h2 className="text-4xl font-bold py-4 ml-[4rem]">Shop by Collections</h2>
      <p className="text-slate-400 max-w-xl text-center pb-2 ml-[29rem]">
        Explore our wide range of collections
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 3000}}
        effect="fade"
        className="swiper-container mb-16"
      >
        {mensCollections
          .concat(
            womensCollections,
            kidsCollections,
            beautyCollections,
            appliancesCollections,
            technologyCollections
          )
          .map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={collection.imgSrc}
                  alt={collection.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-semibold">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Men's Wear Section */}
      <Section
        title="Men's Wear"
        collections={mensCollections}
      />

      {/* Women's Wear Section */}
      <Section
        title="Women's Wear"
        collections={womensCollections}
      />

      {/* Kids' Wear Section */}
      <Section
        title="Kids' Wear"
        collections={kidsCollections}
      />

      {/* Beauty Products Section */}
      <Section
        title="Beauty Products"
        collections={beautyCollections}
      />

      {/* Electrical Appliances Section */}
      <Section
        title="Electrical Appliances"
        collections={appliancesCollections}
      />

      {/* Technology Section */}
      <Section
        title="Technology"
        collections={technologyCollections}
      />
    </div>
  );
}

// Section component to render subcollections
function Section({title, collections}: SectionProps) {
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
    <div className="mb-16 max-w-[1200px] 2xl:max-w-[1440px] ml-[5rem]">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
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
                  className={`flex flex-col items-center ${idx === 1 && index !== 0 ? 'md:mt-8' : ''} group cursor-pointer`}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden transition-transform duration-300 transform group-hover:scale-110">
                    <Image
                      src={collection.imgSrc}
                      alt={collection.title}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium group-hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                    {collection.title}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .swiper-container {
          margin-bottom: 2rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 1024px) {
          .md:flex-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
