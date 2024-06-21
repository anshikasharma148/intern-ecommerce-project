import React from 'react';
import Image from 'next/image';
import { Product } from '../models/product';

interface ProductProps {
  product: Product;
}

const cardClasses =
  'overflow-hidden rounded-lg shadow transition-transform transform group-hover relative';
const priceClasses = 'text-red-800 md:text-sm text-xs';
const discountPriceClasses = 'line-through text-zinc-500';
const discountBadgeClasses =
  'bg-orange-500 text-white text-xs  px-2 py-1 rounded';

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { title, featureImage, salesPrice, price } = product;

  return (
    <div
      className={`${cardClasses} group w-full max-w-xs md:max-w-sm h-[300px] md:h-[350px] mx-auto `}
    >
      <div className="relative overflow-hidden h-[70%] md:h-[70%]">
        <Image
          src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${featureImage}`}
          alt={title}
          layout="fill"
          className="object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md transition-colors duration-300 hover:bg-black group">
          {/* SVG or icon can be added here */}
        </button>

        <button
          className="
            absolute bottom-0 left-1/2 
            transform -translate-x-1/2 
            w-[calc(100%-30px)] bg-black text-white 
            py-2 px-4 rounded opacity-0 group-hover:opacity-100 
            transition-opacity transform translate-y-4 group-hover:translate-y-0 
            duration-300 ease-in-out mb-2 
            text-xs sm:text-sm md:text-base"
        >
          Add to Cart
        </button>
      </div>
      <div className="p-4 h-[30%]">
        <h3
          className="md:text-sm text-xs cursor-pointer hover:text-orange-500 whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ maxWidth: '100%' }}
        >
          {title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex">
            <span className={`${priceClasses} mr-2`}>₹{salesPrice}</span>
            {price && (
              <span className={`${discountPriceClasses} md:text-sm text-xs`}>
                ₹{price}
              </span>
            )}
          </div>
        </div>
        {price && (
          <div className="flex items-center justify-start mt-2">
            <span className={discountBadgeClasses}>
              {Math.round(((price - salesPrice) / price) * 100)}% Off
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
