import React from "react";

import { CgDetailsMore } from "react-icons/cg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import errorPage from "../assets/errorPage.jpg";
import wedding1 from "../assets/wedding1.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen grid place-items-center">
      <div className="w-[90%] max-w-6xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-14 place-items-center">
        <div className="min-h-[350px] max-h-[450px] w-full h-full relative flex justify-center">
          <img
            src={errorPage}
            alt=""
            className="h-[90%] object-cover rounded-xl w-[90%] shadow-2xl absolute top-0 left-0"
          />
          <img
            src={wedding1}
            alt=""
            className="h-[90%] object-cover rounded-xl w-[90%] shadow-2xl absolute bottom-0 right-0"
          />
          <h4 className="bg-pink-700 text-white p-4 rounded-md shadow-2xl text-3xl capitalize flex justify-center items-center gap-3 select-none animate-bounce absolute -bottom-10">
            <CgDetailsMore className="text-white" /> <span>Hint about us</span>
          </h4>
        </div>
        <div className="w-full flex flex-col justify-center gap-6 text-center md:text-left">
          <h2 className="font-bold text-4xl relative leading-relaxed text-pink-700 before:content-[''] before:absolute before:bottom-0 before:left-1/2 md:before:-translate-x-0 before:-translate-x-1/2 md:before:left-0 before:w-32 before:h-1 before:bg-pink-700">
            Who we are?
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            At EventMaster, we turn your dreams into reality. With 5 years of
            experience, we specialize in crafting unforgettable events, from
            corporate conferences to weddings and themed parties. We're here to
            make every occasion special.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            We started with a mission: to create seamless and extraordinary
            experiences. Our dedicated team handles every detail, from venue
            selection to decor and logistics, so you can relax and enjoy your
            event.
          </p>
          <div>
            <h4 className="text-pink-700 text-xl font-medium pb-4">
              Flollow us on:
            </h4>
            <ul className="flex justify-center md:justify-start items-center gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
