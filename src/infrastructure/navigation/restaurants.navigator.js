import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
