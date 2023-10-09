import React from "react";
import HomeBanner from "../Components/HomeBannerSlider/HomeBanner";
import AboutUs from "../Components/AboutUs";
import ClientSection from "../Components/ClientSlider/ClientSection";
import Services from "../Components/Services/Services";
import GallerySection from "../Components/GallerySection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <Services />
      <ClientSection />
      <GallerySection />
    </>
  );
};

export default Home;
