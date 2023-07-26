import React from "react";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Featured/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import TrendingSlider from "../components/TrendingSlider/TrendingSlider";
import BannerReverse from "../components/BannerReverse/BannerReverse";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Banner
        title="Creative harmonious living"
        text="BRAND Products are all made to standard sizes so that you can mix and match them freely"
        img="https://placehold.co/300x300?text=BANNER"
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegant Living"
        text="BRAND Products are all made to standard sizes so that you can mix and match them freely"
        img="https://placehold.co/300x300?text=BANNER"
      />
      <Footer />
    </>
  );
}
