import React from "react";
import HomeBannerSlider from "./HomeBannerSlider/HomeBannerSlider";
import HomeBannerContent from "./HomeBannerContent";

const HomeBanner = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 place-items-center">
        <HomeBannerSlider />
        <HomeBannerContent />
      </div>
    </div>
  );
};

export default HomeBanner;
