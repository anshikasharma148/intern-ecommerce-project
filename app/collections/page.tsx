'use client'
import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';


// Define CollectionItem interface
interface CollectionItem {
  title: string;
  imgSrc: string;
}

// Define SectionProps interface
interface SectionProps {
  title: string;
  collections: CollectionItem[];
}

export default function Collection() {
  const mensCollections: CollectionItem[] = [
    {title: "Men's Fashion", imgSrc: '/Men/man.jpg'},
    {title: "Men's Clothing", imgSrc: '/Men/man.jpg'},
    {title: "Men's Accessories", imgSrc: '/Men/maccess.png'},
    {title: "Men's Shoes", imgSrc: '/Men/shoes.jpg' },
    {title: "Men's Formal Wear", imgSrc: '/Men/formal.webp'},
  ];

  const womensCollections: CollectionItem[] = [
    {title: "Women's Fashion", imgSrc: "/women/ladies.jpg"},
    {title: "Women's Clothing", imgSrc: '/women/cloth.png'},
    {title: "Women's Accessories", imgSrc: '/women/waccess.png'},
    {title: "Women's Shoes", imgSrc: '/women/wshoes.jpg'},
    {title: "Women's Dresses", imgSrc:'/women/dress.jpg'},
  ];

  const kidsCollections: CollectionItem[] = [
    {title: "Kids' Fashion", imgSrc: "/kids/kids.jpg"},
    {title: "Boys' Wear", imgSrc: "/kids/boys.jpg"},
    {title: "Girls' Wear", imgSrc: "/kids/kcloth.jpg"},
    {title: "Kids' Accessories", imgSrc:"/kids/kaccess.jpg"},
    {title: "Kids' Shoes", imgSrc: "/kids/kshoes.jpg"},
  ];

  const beautyCollections: CollectionItem[] = [
    {title: 'Beauty Products', imgSrc: '/beauty/beauty.jpg'},
    {title: 'Makeup', imgSrc:'/beauty/makeup.jpg' },
    {title: 'Skincare', imgSrc: "/beauty/skincare.jpg"},
    {title: 'Haircare', imgSrc: "/beauty/haircare.webp"},
    {title: 'Fragrances', imgSrc: "/beauty/frag.webp"},
  ];

  const appliancesCollections: CollectionItem[] = [
    {title: 'Electrical Appliances', imgSrc: '/electrical/elec.jpg'},
    {title: 'Kitchen Appliances', imgSrc: '/electrical/kitchen.jpg'},
    {title: 'Home Appliances', imgSrc: '/electrical/home.jpg'},
    {title: 'Personal Care Appliances', imgSrc: '/electrical/personal.jpg'},
    {title: 'Gadgets & Accessories', imgSrc: '/electrical/gadgets.jpg'},
  ];

  const technologyCollections: CollectionItem[] = [
    {title: 'Technology', imgSrc: '/technology/tech.jpg'},
    {title: 'Mobile Phones', imgSrc: '/technology/mobile.jpg'},
    {title: 'Computers & Laptops', imgSrc: '/technology/laptop.webp'},
    {title: 'Tablets & E-Readers', imgSrc: '/technology/tablets.webp'},
    {title: 'Gaming', imgSrc: '/technology/gaming.jpg'},
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
