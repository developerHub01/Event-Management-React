import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./HomeBannerSlider.css";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import useFetch from "../../CustomHook/useFetch";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/bannar-slider-data.json";

const HomeBannerSlider = () => {
  const { data, isLoading, getError } = useFetch(url);
  console.log(data);
  return (
    <div className="w-full grid place-items-center lg:order-2">
      {getError && <span>{getError}</span>}
      {isLoading ||
        (data && (
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper w-full min-w-[250px]"
          >
            {isLoading ||
              data.map((item) => (
                <SwiperSlide key={item.id} className="rounded-xl overflow-auto max-h-[450px]">
                  <img
                    src={item.imgLink}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        ))}
    </div>
  );
};
export default HomeBannerSlider;
