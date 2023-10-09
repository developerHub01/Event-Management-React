import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./Footer.css";

const bgImg =
  "https://i.ibb.co/fMjcNrX/Wedding-Invitation-Design-and-RSVP-Management.jpg";

const Footer = () => {
  return (
    <footer
      className="py-10 w-full relative before:content[''] before:absolute before:bg-black/90 before:w-full before:h-full before:top-0 before:left-0 z-0"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[90%] max-w-6xl mx-auto relative z-30 grid grid-cols-4 gap-10">
        <div className="w-full col-span-4 sm:col-span-2 flex flex-col gap-5">
          <Link
            to="/"
            className="text-white text-xl sm:text-3xl font-bold select-none"
          >
            <span className="text-pink-700">Event</span>Master
          </Link>
          <div className="w-full flex flex-col gap-3">
            <p className="text-gray-50 leading-relaxed text-base">
              At EventMaster, we specialize in crafting extraordinary social
              events that leave a lasting impression. From elegant weddings to
              lively birthday parties, we bring your dreams to life.
            </p>
            <p className="text-gray-50 leading-relaxed text-base">
              With our team of experienced event planners, attention to detail,
              and creativity, we turn every occasion into a cherished memory.
              Let us help you create the perfect event that reflects your style
              and personality.
            </p>
          </div>
        </div>
        <div className="w-full col-span-2 sm:col-span-1 flex flex-col">
          <h4 className="text-pink-700 text-xl font-medium pb-4">
            Flollow us on:
          </h4>
          <ul id="footerNav" className="flex flex-col gap-2">
            <li>
              <NavLink to="/" className="text-gray-50 transition-all delay-75">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-50 transition-all delay-75"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-gray-50 transition-all delay-75"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="text-gray-50 transition-all delay-75"
              >
                SignUp
              </NavLink>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-50 transition-all delay-75"
              >
                Profile
              </Link>
            </li>
            <li>
              <NavLink
                to="/myevent"
                className="text-gray-50 transition-all delay-75"
              >
                My Event List
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div>
            <h4 className="text-pink-700 text-xl font-medium pb-4">
              Flollow us on:
            </h4>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-5">
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
    </footer>
  );
};

export default Footer;
