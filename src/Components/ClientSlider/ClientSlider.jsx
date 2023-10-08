import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ClientSlider.css";

import ClientSlide from "./ClientSlide";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useFetch from "../../CustomHook/useFetch";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/client_review.json";
const ClientSlider = () => {
  const { data, isLoading, getError } = useFetch(url);
  return (
    <div className="w-full col-span-2 px-3 flex-grow">
      {getError && <span>{getError}</span>}
      {isLoading ||
        (data && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper p-2 flex"
          >
            {data &&
              data.map((item) => (
                <SwiperSlide key={item.id} className="w-full h-full">
                  <ClientSlide {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
        ))}
    </div>
  );
};

export default ClientSlider;
