import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { LoadingContext } from "../Context/LoadingProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading } = useContext(LoadingContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      {isLoading && <span className="loading loading-bars loading-lg"></span>}
      {!isLoading && user ? children : navigate("/login")}
    </>
  );
};

export default PrivateRoute;
