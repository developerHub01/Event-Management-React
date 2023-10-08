import React from "react";
import Rating from "./Rating";

const ClientSlide = ({
  id,
  name,
  location,
  rating,
  comment,
  authorImgLink,
}) => {
  return (
    <figure className="bg-pink-700 h-full rounded-xl flex flex-col justify-center items-center gap-6 px-5 py-8">
      <div className="w-32 h-32 aspect-square rounded-full border-4 cursor-pointer border-white overflow-hidden">
        <img
          src={authorImgLink}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <figure className="flex flex-col gap-1 text-white">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-sm font-medium">{location}</p>
        <Rating rating={rating} />
        <p className="text-base">{comment}</p>
      </figure>
    </figure>
  );
};

export default ClientSlide;
