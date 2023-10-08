import React from "react";

const HomeBannerContent = () => {
  return (
    <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start w-full max-w-xl gap-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-normal md:leading-snug text-pink-700">
        Elevate Your Social Events with Us
      </h2>
      <p className="text-slate-700 leading-relaxed text-base">
        At EventMaster, we specialize in crafting extraordinary social events
        that leave a lasting impression. From elegant weddings to lively
        birthday parties, we bring your dreams to life.
      </p>
      <p className="text-slate-700 leading-relaxed text-base">
        With our team of experienced event planners, attention to detail, and
        creativity, we turn every occasion into a cherished memory. Let us help
        you create the perfect event that reflects your style and personality.
      </p>
      <div className="flex flex-col sm:flex-row justify-normal items-center gap-3">
        <button className="w-full sm:w-auto bg-pink-700 text-white rounded-md py-3 px-5">
          Learn More
        </button>
        <button className="w-full sm:w-auto bg-pink-700 text-white rounded-md py-3 px-5">
          View Out Services
        </button>
      </div>
    </div>
  );
};

export default HomeBannerContent;
