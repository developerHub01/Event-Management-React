import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ id, title, description, price, serviceImg }) => {
  return (
    <figure
      data-aos="zoom-in"
      data-aos-once
      className="h-full w-full rounded-xl flex-grow overflow-hidden flex flex-col shadow-2xl hover:scale-95 transition-all ease-in-out duration-75 cursor-pointer"
    >
      <div className="w-full h-60">
        <img src={serviceImg} alt="" className="w-full h-full object-cover" />
      </div>
      <figure className="w-full h-full p-6 flex flex-col gap-3 justify-between">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-700 leading-relaxed text-base">
          {description.length <= 150
            ? description
            : description.slice(0, 150) + "...."}
        </p>
        <div className="w-full flex justify-between items-center gap-3">
          <span className="text-lg capitalize flex gap-2 justify-center items-center text-pink-700 w-full">
            Price: <span className="text-slate-800">{price}</span>{" "}
            <BsCurrencyDollar className="text-pink-700 text-2xl" />{" "}
          </span>
          <Link to={`/service/${id}`} className="w-full">
            <button className="w-full bg-pink-700 text-white rounded-md py-3 px-5">
              Read More...
            </button>
          </Link>
        </div>
      </figure>
    </figure>
  );
};

export default Service;
