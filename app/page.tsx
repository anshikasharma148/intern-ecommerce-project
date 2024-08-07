import {homePageData} from '@/data/homepage';
import Collection from '../components/Collection';
import ProductCard from '../components/ProductCard';
import Hero from '@/components/Hero';

export default function Page() {
  const storebanner = homePageData.storeBanners;
  const collections = homePageData.storePublic.collection;

  return (
    <div className="relative">
      <Hero storebanner={storebanner} />
      <Collection collections={collections} />
      <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto px-4 py-8 text-[var(--primary-color)]">
        <h2 className="text-4xl font-bold py-4 text-center">
          New Arrival Products
        </h2>
        <p className="text-[var(--subtext-hover)] max-w-xl mx-auto text-center pb-2">
          Shop the latest products from the most popular collections
        </p>
        {collections.map((collection) => (
          <div key={collection.id}>
            <h2 className="text-2xl font-bold py-6">{collection.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {collection.Product.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
