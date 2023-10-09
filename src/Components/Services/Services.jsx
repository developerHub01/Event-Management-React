import React from "react";
import Service from "./Service";
import useFetch from "../../CustomHook/useFetch";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/service-list.json";

const Services = () => {
  const { data, isLoading, getError } = useFetch(url);
  return (
    <div className="w-[90%] max-w-6xl mx-auto min-h-screen py-8 flex flex-col gap-6">
      <div className="w-full flex flex-col justify-center gap-6 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-center font-bold text-4xl relative leading-relaxed text-pink-700 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-32 before:h-1 before:bg-pink-700">
          Our Services
        </h2>
        <p className="text-center text-slate-700 leading-relaxed text-base">
          At EventMaster, we turn your dreams into reality. With 5 years of
          experience, we specialize in crafting unforgettable events, from
          corporate conferences to weddings and themed parties. We're here to
          make every occasion special.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getError && <span>{getError}</span>}
        {isLoading ||
          (data && data.map((item) => <Service key={item.id} {...item} />))}
      </div>
    </div>
  );
};

export default Services;
