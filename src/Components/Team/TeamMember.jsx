import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMember = ({ id, imgLink, name, designation }) => {
  return (
    <figure
      data-aos="zoom-in"
      data-aos-once
      className="w-full h-full flex flex-col shadow-2xl rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className="w-full relative min-h-[250px]">
        <img src={imgLink} alt={name} className="w-full h-full object-cover" />
        <ul className="flex flex-col justify-center md:justify-start items-center gap-5 absolute top-1/2 -translate-y-1/2 right-0 group-hover:-translate-x-3 translate-x-full transition-all ease-in-out duration-100">
          <li>
            <Link
              to="/"
              className="w-10 h-10 grid place-items-center rounded-lg hover:scale-125 transition-all duration-75 ease-linear shadow-lg overflow-hidden bg-pink-700"
            >
              <FaFacebookF className="text-white text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="w-10 h-10 grid place-items-center rounded-lg hover:scale-125 transition-all duration-75 ease-linear shadow-lg overflow-hidden bg-pink-700"
            >
              <FaInstagram className="text-white text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="w-10 h-10 grid place-items-center rounded-lg hover:scale-125 transition-all duration-75 ease-linear shadow-lg overflow-hiddensm bg-pink-700"
            >
              <FaTwitter className="text-white text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="w-10 h-10 grid place-items-center rounded-lg hover:scale-125 transition-all duration-75 ease-linear shadow-lg overflow-hiddensm bg-pink-700"
            >
              <FaYoutube className="text-white text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <figcaption className="w-full p-5 text-center flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="text-base text-slate-700">{designation}</p>
      </figcaption>
    </figure>
  );
};

export default TeamMember;
