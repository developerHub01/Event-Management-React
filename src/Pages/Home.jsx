import React from "react";
import HomeBanner from "../Components/HomeBannerSlider/HomeBanner";
import AboutUs from "../Components/AboutUs";
import ClientSection from "../Components/ClientSlider/ClientSection";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <Services />
      <ClientSection />
    </>
  );
};

export default Home;
