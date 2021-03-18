import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const storeFavourites = async (item, uid) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorites = favourites.filter(
      (favRestaurant) => favRestaurant.placeId !== restaurant.placeId
    );
    setFavourites(newFavorites);
  };

  useEffect(() => {
    if (user) {
      storeFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
