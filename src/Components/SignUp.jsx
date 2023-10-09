import React, { useContext, useState } from "react";

import signupImg from "../assets/signupImg.jpg";

import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/config";
import ToastComponent from "./ToastComponent";

import * as EmailValidator from "email-validator";
import usePasswordVarification from "../CustomHook/usePasswordVarification";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const { createUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const handleOnChange = (e) => {
    setSignUpData((prev) => ({
      ...signUpData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, photoURL } = signUpData;

    if (!EmailValidator.validate(email)) {
      return toast(
        <ToastComponent successOrError={false} message="Email is not valid" />
      );
    }

    if (!usePasswordVarification(password)) {
      return toast(
        <ToastComponent
          successOrError={false}
          message="Password must contain a uppercase and one special character and minimum length 6"
        />
      );
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL,
        })
          .then(() => {
            console.log(user);
            toast(
              <ToastComponent successOrError message="Signup Successful" />
            );
          })
          .catch((error) => {
            toast(
              <ToastComponent successOrError={false} message={error.message} />
            );
          });

        setSignUpData({
          name: "",
          photoURL: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        toast(
          <ToastComponent successOrError={false} message={error.message} />
        );
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(
          <ToastComponent successOrError={true} message="Signin successfull" />
        );
      })
      .catch((error) => {
        toast(
          <ToastComponent successOrError={false} message={error.message} />
        );
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(
          <ToastComponent successOrError={true} message="Signin successfull" />
        );
      })
      .catch((error) => {
        toast(
          <ToastComponent successOrError={false} message={error.message} />
        );
      });
  };

  return (
    <div className="w-[90%] max-w-3xl min-h-[500px] shadow-2xl grid md:grid-cols-2 mx-auto rounded-xl overflow-hidden">
      <div className="w-full h-full grid place-items-center p-5 gap-6 md:order-2">
        <h2 className="text-3xl font-semibold select-none text-pink-700">
          Signup
        </h2>
        <form
          className="w-full h-full flex flex-col gap-5"
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            name="name"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your name"
            value={signUpData.name}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="photoURL"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your photoURL"
            value={signUpData.photoURL}
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="email"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your email"
            value={signUpData.email}
            onChange={handleOnChange}
            required
          />
          <input
            type="password"
            name="password"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your password"
            value={signUpData.password}
            onChange={handleOnChange}
            required
          />
          <button className="w-full bg-pink-700 text-white rounded-md py-3 px-5">
            Signup
          </button>
          <p className="text-center flex flex-wrap gap-2 justify-center items-center select-none">
            Don't have an account?
            <Link to="/login" className="text-pink-700 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div
        className="w-full h-full grid place-items-center p-5 min-h-[250px]"
        style={{
          background: `url('${signupImg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop-blur-sm p-4 rounded-md text-center flex flex-col gap-5 justify-center items-center shadow-2xlswiper-wrapper">
          <p className="text-white leading-relaxed">
            Join us! Register an account to access exclusive features and
            content. Sign up now for free.
          </p>
          <div className="w-full flex flex-col justify-center items-start gap-3 sm:flex-row md:flex-col">
            <button
              className="flex justify-center items-center gap-2 w-full bg-pink-700 text-white rounded-md py-3 px-5"
              onClick={handleGoogleSignIn}
            >
              <BsGoogle className="" />
              <span>Signup with Google</span>
            </button>
            <button
              className="flex justify-center items-center gap-2 w-full bg-pink-700 text-white rounded-md py-3 px-5"
              onClick={handleFacebookSignIn}
            >
              <FaFacebookF className="" />
              <span>Signup with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
