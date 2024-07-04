'use client';
import React, { useState, useEffect } from 'react';
import { variableproduct } from '../../data/variableproductdata'; // Adjust the import path as necessary
import ProductSwiper from '../../components/ProductSwiper'; // Adjust the import path as necessary




const VariableProductPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [gallery, setGallery] = useState<{ src: string; alt: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>('description');
  const [reviewTitle, setReviewTitle] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');

  useEffect(() => {
    try {
      // Parse the gallery string into an array of image objects
      const parsedGallery = variableproduct.gallery.split(';').map((item: string) => JSON.parse(item));
      setGallery(parsedGallery);
    } catch (error) {
      //console.error('Error parsing gallery:', error);
    }
  }, []);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setSelectedColor('');
    setSelectedWeight('');
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedWeight('');
  };

  const handleWeightChange = (weight: string) => {
    setSelectedWeight(weight);
  };

  const availableColors = Array.from(
    new Set(variableproduct.ProductOption
      .filter(option => option.variantName.startsWith(selectedSize))
      .map(option => option.variantName.split(';')[1])
    )
  );

  const availableWeights = Array.from(
    new Set(variableproduct.ProductOption
      .filter(option => option.variantName.startsWith(`${selectedSize};${selectedColor}`))
      .map(option => option.variantName.split(';')[3])
    )
  );

  const uniqueSizes = Array.from(
    new Set(variableproduct.ProductOption.map(option => option.variantName.split(';')[0]))
  );

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleRatingChange = (rating: number) => {
    setReviewRating(rating);
  };

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // //console.log('Review submitted:', {
    //   reviewTitle,
    //   reviewRating,
    //   reviewText
    // });
    alert('Review submitted successfully');
    // Clear the form fields after submission
    setReviewTitle('');
    setReviewRating(0);
    setReviewText('');
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="pt-16">
        <h1 className="text-2xl font-bold mb-4">{variableproduct.title}</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-1/2">
            {gallery.length > 0 && <ProductSwiper />}
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">{variableproduct.title}</h2>
            <div className="text-lg mb-3">
              <span className="text-[var(--sales-price-color)] me-1 mr-4 font-semibold">${variableproduct.salesPrice} USD</span>
              <span className="line-through text-[var(--subtext-hover)]">${variableproduct.price} USD</span>
            </div>
            <h3 className="text-xl font-bold mb-2 max-w-xl mx-auto">Overview :</h3>
            <p className="text-[var(--subtext-hover)] max-w-xl mx-auto pb-2">{variableproduct.description}</p>
            <ul className="text-[var(--subtext-hover)] max-w-xl mx-auto pb-2">
  {(variableproduct as { features?: string[] }).features?.map((feature: string, index: number) => (
    <li key={index} className="flex items-center mb-1">
      <svg className="me-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--stroke-color)">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="var(--stroke-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="var(--stroke-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      {feature}
    </li>
  ))}
</ul>

            
            <div className="space-y-6 mt-4">
              <div className="flex items-center">
                <h5 className="text-lg font-semibold me-2">Size:</h5>
                <div className="space-x-2 flex flex-wrap gap-2">
                  {uniqueSizes.map((size: string, index: number) => (
                    <a
                      key={index}
                      href="#"
                      onClick={() => handleSizeChange(size)}
                      className={`inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)] px-4 py-2 ${selectedSize === size ? 'ring-4 ring-[var(--hover-color)]' : ''}`}
                    >
                      {size}
                    </a>
                  ))}
                </div>
              </div>
              {selectedSize && (
                <div className="flex items-center space-x-2">
                  <h5 className="text-lg font-semibold me-2">Colors:</h5>
                  <div className="flex space-x-4">
                    {availableColors.map((color: string, index: number) => (
                      <a
                        key={index}
                        href="#"
                        onClick={() => handleColorChange(color)}
                        className={`size-6 w-6 h-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 inline-flex align-middle ${selectedColor === color ? 'ring-4 ring-[var(--hover-color)]' : ''}`}
                        style={{ backgroundColor: color }}
                        title={color}
                      ></a>
                    ))}
                  </div>
                </div>
              )}
              {selectedColor && (
                <div className="flex items-center space-x-2">
                  <h5 className="text-lg font-semibold me-2">Weight:</h5>
                  <div className="flex space-x-4">
                  {availableWeights.map((weight, index) => (
                      <a
                        key={index}
                        href="#"
                        onClick={() => handleWeightChange(weight)}
                        className={`size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-[var(--hover-color)] text-[var(--hover-color)] hover:text-[var(--secondary-color)] ${selectedWeight === weight ? 'ring-4 ring-[var(--hover-color)]' : ''}`}
                      >
                        {weight}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="relative py-3 px-8 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-[var(--primary-color)] text-[var(--secondary-color)] mt-6 h-12 transition-all duration-300 ease-in-out hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] border-2 border-transparent hover:border-[var(--primary-color)]">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row mt-[4rem]">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col space-y-4 mb-4">
              <button
                className={`py-2 px-4 rounded font-bold text-lg ${activeTab === 'description' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('description')}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 rounded font-bold text-lg ${activeTab === 'review' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('review')}
              >
                Review
              </button>
            </div>
          </div>
          <div className="w-3/4 pl-8">
            {activeTab === 'description' && (
              <div className="bg-gray-100 p-4 rounded shadow">
                <p>{variableproduct.description}</p>
              </div>
            )}
            {activeTab === 'review' && (
              <div className="bg-gray-50 p-4 rounded shadow">
                <form onSubmit={handleSubmitReview}>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="reviewTitle" className="mb-1 font-semibold text-md">Title:</label>
                    <input
                      type="text"
                      id="reviewTitle"
                      placeholder="Review Title"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      className="border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="reviewRating" className="mb-1 font-semibold text-md">Rating:</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg
                          key={star}
                          onClick={() => handleRatingChange(star)}
                          className={`w-6 h-6 cursor-pointer ${reviewRating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927C9.233 2.37 9.767 2 10.35 2c.584 0 1.118.37 1.302.927l1.454 4.472 4.766.001c.668 0 1.044.825.588 1.315l-3.863 3.847 1.455 4.472c.184.557-.144 1.147-.702 1.147-.25 0-.499-.086-.702-.263L10 14.92l-3.865 3.83c-.203.177-.451.263-.702.263-.558 0-.886-.59-.702-1.147l1.455-4.472L2.623 8.716c-.456-.49-.08-1.315.588-1.315l4.765-.001 1.454-4.472z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="reviewText" className="mb-1 font-semibold text-md">Review:</label>
                    <textarea
                      id="reviewText"
                      placeholder="Write your review here"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="border border-gray-300 rounded p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="relative py-3 px-8 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-[var(--primary-color)] text-[var(--secondary-color)] mt-1 h-12 transition-all duration-300 ease-in-out hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] border-2 border-transparent hover:border-[var(--primary-color)]"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariableProductPage;
