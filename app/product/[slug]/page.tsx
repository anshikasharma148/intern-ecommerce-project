import React from 'react';
import Image from 'next/image';
import jacket from 'E:/intern-ecommerce-project/public/jacket.jpg';

// const sharedClasses = {
//   button: 'px-3 py-2 border rounded-md text-sm mx-1', // Adjusted padding and font size
//   colorButton: 'w-6 h-6 rounded-full border mx-1 transition duration-200', // Adjusted size and added transition
//   checkIcon: 'w-4 h-4 mr-1', // Adjusted icon size
// };

const ProductDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-4"> {/* Container width and padding */}
      <div className="pt-16"> {/* Added top padding to compensate for the nav bar */}
        <nav className="text-sm mb-2"> {/* Reduced font size */}
          <a href="#" className="text-zinc-500">CARTZIO</a> &gt;
          <a href="#" className="text-zinc-500">STORE</a> &gt;
          <span className="text-orange-500">MENS BROWN JACKET</span>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Mens Brown Jacket</h1> {/* Product Title */}
        <div className="flex flex-col lg:flex-row gap-4"> {/* Layout adjustment */}
          <div className="flex-1">
            <Image src={jacket} alt='jacket img' width={400} height={533} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Mens Brown Jacket</h2> {/* Product Subtitle */}
            <div className="text-lg mb-3"> {/* Price Section */}
              <span className=" text-red-600 me-1 mr-4 font-semibold">$16USD</span>
              <span className=" line-through text-slate-400">$21USD</span>
            </div>

            <h3 className="text-xl font-bold mb-2">Overview :</h3> {/* Overview */}
            <p className="text-slate-400 max-w-xl mx-auto pb-2"> {/* Overview Description */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde
              molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea
              omnis. Modi laborum soluta tempore unde accusantium.
            </p>

            <ul className="text-slate-400 max-w-xl mx-auto pb-2"> {/* Features List */}
              <li className="flex items-center mb-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff8d0a">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                Digital Marketing Solutions for Tomorrow
              </li>
              <li className="flex items-center mb-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff8d0a">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                Our Talented & Experienced Marketing Agency
              </li>
              <li className="flex items-center mb-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff8d0a">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#ff8d0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                Create your own skin to match your brand
              </li>
            </ul>

            {/* Align size, colors, and quantity sections below each other */}
            <div className="space-y-6 mt-4"> {/* Stack items vertically with space between */}
              <div className="flex items-center">
                <h5 className="text-lg font-semibold me-2">Size:</h5>
                <div className="space-x-1">
                  <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">S</a>
                  <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">M</a>
                  <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">L</a>
                  <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">XL</a>
                </div>
              </div>

              <div className="flex items-center space-x-2"> {/* Adjusted space between color buttons */}
                <h5 className="text-lg font-semibold me-2">Colors:</h5>
                <div className="flex space-x-4"> {/* Adjusted space between color buttons */}
                  <a href="#" className="size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle" title="Red"></a>
                  <a href="#" className="size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-orange-600 inline-flex align-middle" title="Orange"></a>
                  <a href="#" className="size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-slate-900 inline-flex align-middle" title="Black"></a>
                  <a href="#" className="size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-300 inline-flex align-middle" title="Gray"></a>
                </div>
              </div>

              <div className="flex items-center space-x-2"> {/* Moved the quantity section below the colors */}
                <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                <div className="flex items-center space-x-1">
                  <button className="inline-flex items-center justify-center h-9 w-9 text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">-</button>
                  <input min="0" name="quantity" defaultValue="0" type="number" className="h-9 w-12 pl-4 text-center rounded-md bg-orange-500/5 text-orange-500 pointer-events-none" readOnly />
                  <button className="inline-flex items-center justify-center h-9 w-9 text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white">+</button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-4"> {/* Adjusted space between buttons */}
              <a href="#" className="relative py-3 px-8 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-black text-white mt-1 h-12 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
