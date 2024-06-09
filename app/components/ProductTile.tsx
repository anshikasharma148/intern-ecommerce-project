import React from 'react';

interface ProductCardProps {
  isRectangle: boolean;
}

const productCardClasses =
  'bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 relative';
const productNameClasses = 'text-lg font-semibold mb-2';
const productPriceClasses = 'text-xl font-bold';
const productOldPriceClasses = 'text-zinc-500 line-through ml-2';
const productRatingClasses = 'text-yellow-500';

const ProductCard: React.FC<ProductCardProps> = ({ isRectangle }) => {
  const cardClassNames = isRectangle
    ? `${productCardClasses} w-229 h-298`
    : productCardClasses;

  return (
    <div className={cardClassNames}>
      <div className="relative group">
        <img
          src="https://placehold.co/600x400"
          alt="Product Image"
          className="w-full h-48 sm:h-56 object-cover transition-transform transform group-hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
        </span>
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
          <img aria-hidden="true" alt="wishlist" src="/icons/wishlist.svg" />
        </button>
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-bold">
          Add to cart
        </button>
      </div>
      <div className="p-4">
        <h3 className={productNameClasses}>Product Name</h3>
        <div className="flex items-center mb-2">
          <span className={productPriceClasses}>$16.00</span>
          <span className={productOldPriceClasses}>$21.00</span>
        </div>
        <div className="flex items-center">
          <span className={productRatingClasses}>★★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
