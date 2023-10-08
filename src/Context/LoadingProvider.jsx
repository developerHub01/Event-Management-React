import React, { createContext, useState } from "react";

export const LoadingContext = createContext(null);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingStatus = {
    isLoading,
    setIsLoading,
  };
  return (
    <LoadingContext.Provider value={loadingStatus}>
      {children}
    </LoadingContext.Provider>
  );
};


export default LoadingProvider;
