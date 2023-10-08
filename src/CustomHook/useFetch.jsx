import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Fetcing is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setData((prev) => data);
        setGetError((prev) => null);
        setIsLoading((prev) => false);
      })
      .catch((error) => {
        setIsLoading((prev) => false);
        setGetError((prev) => error.message);
      });
  }, [url]);

  return { data, isLoading, getError };
};

export default useFetch;
