import React, { useState } from "react";
import FavoritesContext from "./FavoritesContext";

const MealsContextProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);

  const addFav = (id) => {
    setFavList((currItem) => [...currItem, id]);
  };

  const removeFav = (id) => {
    setFavList((currItem) => currItem.filter((itemId) => itemId !== id));
  };

  const values = {
    ids: favList,
    addFav: addFav,
    removeFav: removeFav,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default MealsContextProvider;
