import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Context/LoadingProvider";

const useFetchWIthFilter = (url, prop, value) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(null);
  const { setIsLoading: setLoadingStatus } = useContext(LoadingContext);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Fetcing is not successful");
          setLoadingStatus((prev) => false);
        }
        return res.json();
      })
      .then((data) => {
        setData(
          (prev) => data.filter((item) => item[prop] + "" === "" + value)[0]
        );
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
export default useFetchWIthFilter;
