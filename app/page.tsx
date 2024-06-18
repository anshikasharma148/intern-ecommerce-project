import {homePageData} from '@/data/homepage';
import Collection from '../components/Collection';
// import Footer from "./components/Footer";
import Hero from '../components/Hero';
//import Navbar from "./components/Nav";
import ProductCard from '../components/ProductCard';

export default function Page() {
  // const storebanner= homePageData.storeBanners
  // const storecollection=homePageData.storePublic.collection
  const collection = homePageData.storePublic.collection;
  //console.log(collection);

  return (
    <div className="relative">
      <Hero storebanner={homePageData.storeBanners} />
      <Collection collections={collection} />
      <ProductCard />
    </div>
  );
}
