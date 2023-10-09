import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { LoadingContext } from "../Context/LoadingProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoading } = useContext(LoadingContext);
  const { user } = useContext(AuthContext);

  if (!user || isLoading) { 
    console.log("===================");
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
