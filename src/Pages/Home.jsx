import React from "react";
import HomeBanner from "../Components/HomeBanner";
import AboutUs from "../Components/AboutUs";
import ClientSection from "../Components/ClientSlider/ClientSection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <ClientSection />
    </>
  );
};

export default Home;
