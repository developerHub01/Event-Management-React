import React from "react";

const ClientContent = () => {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-once
      className="w-full col-span-1 flex flex-col justify-center gap-6 text-center lg:text-left"
    >
      <h2 className="font-bold text-4xl relative leading-relaxed text-pink-700 before:content-[''] before:absolute before:bottom-0 before:left-1/2 lg:before:-translate-x-0 before:-translate-x-1/2 lg:before:left-0 before:w-32 before:h-1 before:bg-pink-700">
        What Client Say About Us
      </h2>
      <p className="text-slate-700 leading-relaxed text-base">
        We are proud to have collaborated with a diverse range of clients over
        the years. Their trust in our services has been the driving force behind
        our success. Here are some of the companies we've had the privilege of
        working with.
      </p>
    </div>
  );
};

export default ClientContent;
