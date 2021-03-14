import React, { Children, createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorites = favourites.filter(
      (favRestaurant) => favRestaurant.placeId !== restaurant.placeId
    );
    setFavourites(newFavorites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {Children}
    </FavouritesContext.Provider>
  );
};