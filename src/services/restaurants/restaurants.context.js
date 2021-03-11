import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsloading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantsTransform)
        .then((restaurantsData) => {
          setRestaurants(restaurantsData);
          setIsloading(false);
        })
        .catch((err) => {
          setError(err);
          setIsloading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
