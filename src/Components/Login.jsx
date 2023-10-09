import React, { useContext, useState } from "react";

import loginImg from "../assets/loginImg.jpg";

import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import ToastComponent from "./ToastComponent";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { googleSignIn, facebookSignIn, signInUser } = useContext(AuthContext);

  const handleOnChange = (e) => {
    setLoginData((prev) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    signInUser()
      .then((userCredential) => {
        const user = userCredential.user;
        <ToastComponent successOrError={false} message="Login successful" />;
        navigate("/");
      })
      .catch((error) => {
        <ToastComponent successOrError={false} message={error.message} />;
      });

    setLoginData((prev) => ({
      email: "",
      password: "",
    }));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast(
          <ToastComponent successOrError={true} message="Signin successfull" />
        );
        navigate("/");
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
        toast(
          <ToastComponent successOrError={true} message="Signin successfull" />
        );
        navigate("/");
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
        <h2 className="text-3xl font-semibold select-none text-pink-700">Login</h2>
        <form
          className="w-full h-full flex flex-col gap-5"
          onSubmit={handleOnSubmit}
        >
          <input
            type="email"
            name="email"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleOnChange}
            required
          />
          <input
            type="password"
            name="password"
            className="py-2 px-4 outline-none bg-transparent border-b-2 border-pink-700 w-full"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleOnChange}
            required
          />
          <button className="w-full bg-pink-700 text-white rounded-md py-3 px-5">
            Login
          </button>
          <p className="text-center flex flex-wrap gap-2 justify-center items-center select-none">
            Already have an account?
            <Link to="/signup" className="text-pink-700 underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
      <div
        className="w-full h-full grid place-items-center p-5 min-h-[250px]"
        style={{
          background: `url('${loginImg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop-blur-sm p-4 rounded-md text-center flex flex-col gap-5 justify-center items-center shadow-2xl">
          <p className="text-white leading-relaxed">
          Log in to access your account, manage settings, and enjoy personalized features securely.
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

export default Login;
