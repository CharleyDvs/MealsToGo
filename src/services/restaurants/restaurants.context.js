import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";

import {
  restaurantRequest,
  restaurantsTransform,
} from "./restaurants.services";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationValue) => {
    setIsloading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(locationValue)
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

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
