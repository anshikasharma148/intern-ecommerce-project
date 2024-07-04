'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

import { singleproduct } from '../../../data/singleproductdata'; // Adjust the path as needed
import ProductSwiper from './../../../components/SingleProductSwiper'; // Adjust the path as needed

const ProductDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'review'>('description');
  const [reviewTitle, setReviewTitle] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');

  const product = singleproduct;

  const handleTabClick = (tab: 'description' | 'review') => {
    setActiveTab(tab);
  };

  const handleRatingChange = (rating: number) => {
    setReviewRating(rating);
  };

  const handleSubmitReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Review submitted:', {
    //   reviewTitle,
    //   reviewRating,
    //   reviewText,
    // });
    alert('Review submitted successfully');
    // Clear the form fields after submission
    setReviewTitle('');
    setReviewRating(0);
    setReviewText('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setReviewTitle(value);
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setReviewText(value);
  };

  // Parse the gallery images
  const galleryImages = JSON.parse(`[${product.gallery.split(';').join(',')}]`);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="pt-16">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-1/2">
            {/* Pass the gallery images to ProductSwiper */}
            <ProductSwiper gallery={galleryImages} />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <div className="text-lg mb-3">
              <span className="text-[var(--sales-price-color)] me-1 mr-4 font-semibold">
                ${product.salesPrice}
              </span>
              <span className="line-through text-[var(--subtext-hover)]">
                ${product.price}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 max-w-xl mx-auto">
              Overview :
            </h3>
            <p className="text-[var(--subtext-hover)] max-w-xl mx-auto pb-2">
              {product.description}
            </p>
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
          <div className="w-full lg:w-3/4 lg:pl-8">
            {activeTab === 'description' && (
              <div className="bg-gray-100 p-4 rounded shadow">
                <p>{product.description}</p>
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
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="reviewRating" className="mb-1 font-semibold text-md">Rating:</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          onClick={() => handleRatingChange(star)}
                          className={`w-6 h-6 cursor-pointer ${reviewRating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927C9.233 2.37 9.767 2 10.35 2c.584 0 1.118.37 1.302.927l1.454 4.472 4.766.001c.668 0 1.044.825.588 1.315l-3.863 3.847 1.455 4.472c.184.557-.144 1.147-.702 1.147-.25 0-.499-.086-.702-.263L10 14.92l-3.865 3.83c-.203.177-.451.263-.702.263-.558 0-.886-.59-.702-1.147l1.455-4.472L2.623 8.716c-.456-.49-.08-1.315.588-1.315l4.765-.001 1.454-4.472z" />
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
                      onChange={handleTextAreaChange}
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      rows={4}
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

export default ProductDetails;
