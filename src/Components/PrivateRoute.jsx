import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { LoadingContext } from "../Context/LoadingProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {;
  const { isLoading } = useContext(LoadingContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {isLoading || user ? children : <Navigate to='/login' replace={true} /> }
    </>
  );
};

export default PrivateRoute;
