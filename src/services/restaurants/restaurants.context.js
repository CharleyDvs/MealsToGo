import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurant: [],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
