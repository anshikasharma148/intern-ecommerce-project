import {homePageData} from '@/data/homepage';
import Collection from '../components/Collection';
// import Footer from "./components/Footer";
//import Navbar from "./components/Nav";
import ProductCard from '../components/ProductCard';
import Hero from '@/components/Hero';

export default function Page() {
  const storebanner= homePageData.storeBanners;
  // const storecollection=homePageData.storePublic.collection
  const collection = homePageData.storePublic.collection;
  //console.log(collection);

  return (
    <div className="relative">
      <Hero storebanner={storebanner} />
      <Collection collections={collection} />
      <ProductCard />
    </div>
  );
}
