import React from 'react';
import Image from 'next/image';
import {Product} from '../models/product';

interface ProductProps {
  product: Product;
}

const cardClasses =
  'overflow-hidden rounded-lg shadow transition-transform transform group-hover relative';
const priceClasses = 'text-[var(--sales-price-color)] md:text-sm text-xs'; // Updated to use sales-price-color
const discountPriceClasses = 'line-through text-[var(--subtext-hover)]'; // Updated to use subtext-hover
const discountBadgeClasses =
  'bg-[var(--hover-color)] text-[var(--secondary-color)] text-xs px-2 py-1 rounded'; // Updated to use hover-color and secondary-color

const ProductCard: React.FC<ProductProps> = ({product}) => {
  const {title, featureImage, salesPrice, price} = product;

  return (
    <div
      className={`${cardClasses} group w-full max-w-xs md:max-w-sm h-[300px] md:h-[350px] mx-auto `}
      style={{backgroundColor: 'var(--bg-color)', color: 'var(--text-color)'}} // Updated to use bg-color and text-color
    >
      <div className="relative overflow-hidden h-[70%] md:h-[70%]">
        <Image
          src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${featureImage}`}
          alt={title}
          layout="fill"
          className="object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
        />
        <button
          className="absolute top-2 right-2 bg-[var(--secondary-color)] p-2 rounded-full shadow-md transition-colors duration-300 hover:bg-[var(--primary-color)] group"
          style={{color: 'var(--text-color)'}} // Updated to use text-color
        >
          {/* SVG or icon can be added here */}
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300 text-[#1C274C] hover:text-[var(--secondary-color)]"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>

        <button
          className="
            absolute bottom-0 left-1/2 
            transform -translate-x-1/2 
            w-[calc(100%-30px)] bg-[var(--primary-color)] text-[var(--secondary-color)] 
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
          className="md:text-sm text-xs cursor-pointer hover:text-[var(--hover-color)] whitespace-nowrap overflow-hidden text-ellipsis"
          style={{maxWidth: '100%'}}
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
