import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Context/LoadingProvider";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(null);
  const { setIsLoading: setLoadingStatus } = useContext(LoadingContext);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setLoadingStatus((prev) => false);
          return Error("Fetcing is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setData((prev) => data);
        setGetError((prev) => null);
        setIsLoading((prev) => false);
        setLoadingStatus((prev) => false);
      })
      .catch((error) => {
        setIsLoading((prev) => false);
        setGetError((prev) => error.message);
        setLoadingStatus((prev) => false);
      });
  }, [url, isLoading, setLoadingStatus]);

  return { data, isLoading, getError };
};

export default useFetch;
