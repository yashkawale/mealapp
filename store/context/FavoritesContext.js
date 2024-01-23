import { createContext } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

export default FavoritesContext;
