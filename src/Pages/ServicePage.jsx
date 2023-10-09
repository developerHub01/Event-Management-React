import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetchWIthFilter from "../CustomHook/useFetchWIthFilter";
import { toast } from "react-toastify";
import ToastComponent from "../Components/ToastComponent";
import useGetSetLocalStorage from "../CustomHook/useGetSetLocalStorage";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/service-list.json";

const ServicePage = () => {
  const { id } = useParams();

  const { data, isLoading, getError } = useFetchWIthFilter(url, "id", id);

  const { setEventList } = useGetSetLocalStorage();

  const handleAddService = (e) => {
    try {
      setEventList("purchaseEventList", data);
      toast(
        <ToastComponent
          successOrError={true}
          message="Add To Cart Successful"
        />
      );
    } catch (error) {
      console.log(error);
      toast(<ToastComponent successOrError={true} message={error.message} />);
    }
  };

  return (
    <section className="w-[90%] mx-auto max-w-6xl">
      {getError && <span>{getError}</span>}
      {isLoading ||
        (data && (
          <article className="w-full min-h-[80vh] py-10 flex flex-col gap-6 justify-center items-center">
            <figure className="w-full flex flex-col gap-3">
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  src={data?.serviceImg}
                  alt={data?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption>
                <h2 className="font-bold text-4xl relative leading-relaxed text-pink-700">
                  {data?.title}
                </h2>
              </figcaption>
            </figure>
            <div>
              <p className="text-slate-700 leading-relaxed text-base">
                {data?.description}
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg capitalize flex gap-2 justify-center items-center text-pink-700">
                Price: <span className="text-slate-800">300</span>{" "}
                <BsCurrencyDollar className="text-pink-700 text-2xl" />{" "}
              </span>
              <button
                className="bg-pink-700 text-white rounded-md py-3 px-5"
                onClick={handleAddService}
              >
                Add Event...
              </button>
            </div>
          </article>
        ))}
    </section>
  );
};

export default ServicePage;
