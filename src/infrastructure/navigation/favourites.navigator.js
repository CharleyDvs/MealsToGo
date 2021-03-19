import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";
import { FavouritesDetailScreen } from "../../features/settings/screens/FavouritesDetail";

const FavouritesStack = createStackNavigator();

export const FavouritesNavigator = () => {
  return (
    <FavouritesStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
      <FavouritesStack.Screen
        name="FavouritesDetail"
        component={FavouritesDetailScreen}
      />
    </FavouritesStack.Navigator>
  );
};
