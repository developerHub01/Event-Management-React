import React from "react";

const useGetSetLocalStorage = () => {
  const getEventList = (itemCollection) => {
    itemCollection = localStorage.getItem(itemCollection);
    if (itemCollection) {
      return JSON.parse(itemCollection);
    } else return [];
  };
  const setEventList = (itemCollectionName, item) => {
    const itemCollection = getEventList(itemCollectionName);
    localStorage.setItem(
      itemCollectionName,
      JSON.stringify([...itemCollection, item])
    );
  };
  return { getEventList, setEventList };
};

export default useGetSetLocalStorage;
