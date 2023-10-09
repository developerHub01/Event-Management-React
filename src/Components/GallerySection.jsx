import React from "react";
import Gallery from "./Gallery";

const GallerySection = () => {
  return (
    <div className="w-[90%] mx-auto max-w-6xl min-h-screen py-10 flex flex-col gap-6">
      <div className="w-full flex flex-col justify-center gap-6 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-center font-bold text-4xl relative leading-relaxed text-pink-700 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-32 before:h-1 before:bg-pink-700">
          Some Of Our Memory
        </h2>
        <p className="text-center text-slate-700 leading-relaxed text-base"></p>
      </div>
      <Gallery />
    </div>
  );
};

export default GallerySection;
