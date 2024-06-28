'use client';
import React, {useState} from 'react';
import Image from 'next/image';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('--red-color');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="pt-16">
        <nav className="text-sm mb-2">
          <a
            href="#"
            className="text-[var(--zinc-500)]"
          >
            CARTZIO
          </a>{' '}
          &gt;
          <a
            href="#"
            className="text-[var(--zinc-500)]"
          >
            STORE
          </a>{' '}
          &gt;
          <span className="text-[var(--hover-color)]">MENS BROWN JACKET</span>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Mens Brown Jacket</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Image
              src="/jacket.jpg"
              alt="jacket img"
              width={400}
              height={533}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Mens Brown Jacket</h2>
            <div className="text-lg mb-3">
              <span className="text-[var(--sales-price-color)] me-1 mr-4 font-semibold">
                $16USD
              </span>
              <span className="line-through text-[var(--subtext-hover)]">
                $21USD
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 max-w-xl mx-auto">
              Overview :
            </h3>
            <p className="text-[var(--subtext-hover)] max-w-xl mx-auto pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              exercitationem, unde molestiae sint quae inventore atque minima
              natus fugiat nihil quisquam voluptates ea omnis. Modi laborum
              soluta tempore unde accusantium.
            </p>
            <ul className="text-[var(--subtext-hover)] max-w-xl mx-auto pb-2">
              <li className="flex items-center mb-1">
                <svg
                  className="me-2"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="var(--stroke-color)"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Digital Marketing Solutions for Tomorrow
              </li>
              <li className="flex items-center mb-1">
                <svg
                  className="me-2"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="var(--stroke-color)"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Our Talented & Experienced Marketing Agency
              </li>
              <li className="flex items-center mb-1">
                <svg
                  className="me-2"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="var(--stroke-color)"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="var(--stroke-color)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Create your own skin to match your brand
              </li>
            </ul>
            <div className="space-y-6 mt-4">
              <div className="flex items-center">
                <h5 className="text-lg font-semibold me-2">Size:</h5>
                <div className="space-x-1">
                  <a
                    href="#"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)]"
                  >
                    S
                  </a>
                  <a
                    href="#"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)]"
                  >
                    M
                  </a>
                  <a
                    href="#"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)]"
                  >
                    L
                  </a>
                  <a
                    href="#"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)]"
                  >
                    XL
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <h5 className="text-lg font-semibold me-2">Colors:</h5>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    onClick={() => handleColorChange('--red-color')}
                    className={`size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-[var(--red-color)] inline-flex align-middle ${selectedColor === '--red-color' ? 'ring-4 ring-[var(--red-color)]' : ''}`}
                    title="Red"
                  ></a>
                  <a
                    href="#"
                    onClick={() => handleColorChange('--orange-color')}
                    className={`size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-[var(--orange-color)] inline-flex align-middle ${selectedColor === '--orange-color' ? 'ring-4 ring-[var(--orange-color)]' : ''}`}
                    title="Orange"
                  ></a>
                  <a
                    href="#"
                    onClick={() => handleColorChange('--blue-color')}
                    className={`size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-[var(--blue-color)] inline-flex align-middle ${selectedColor === '--blue-color' ? 'ring-4 ring-[var(--blue-color)]' : ''}`}
                    title="Black"
                  ></a>
                  <a
                    href="#"
                    onClick={() => handleColorChange('--gray-color')}
                    className={`size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-[var(--gray-color)] inline-flex align-middle ${selectedColor === '--gray-color' ? 'ring-4 ring-[var(--gray-color)]' : ''}`}
                    title="Gray"
                  ></a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                <div className="flex items-center space-x-1">
                  <button className="inline-flex items-center justify-center h-9 w-9 text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--orange-color)] text-[var(--orange-color)] hover:text-[var(--secondary-color)]">
                    -
                  </button>
                  <input
                    min="0"
                    name="quantity"
                    defaultValue="0"
                    type="number"
                    className="h-9 w-12 pl-4 text-center rounded-md bg-orange-500/5 text-[var(--orange-color)] pointer-events-none"
                    readOnly
                  />
                  <button className="inline-flex items-center justify-center h-9 w-9 text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--orange-color)] text-[var(--orange-color)] hover:text-[var(--secondary-color)]">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 mb-4">
              <a
                href="#"
                className="relative py-3 px-8 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-[var(--primary-color)] text-[var(--secondary-color)] mt-1 h-12 transition-all duration-300 ease-in-out hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] border-2 border-transparent hover:border-[var(--primary-color)]"
              >
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
