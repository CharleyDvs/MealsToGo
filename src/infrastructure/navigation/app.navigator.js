import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Button } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/safeArea/SafeArea";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button title="Logout" onPress={() => onLogout()}>
          Logout
        </Button>
      </View>
    </SafeArea>
  );
}

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;
    if (route.name === "Restaurants") {
      iconName = focused ? "restaurant" : "restaurant-outline";
    }
    if (route.name === "Map") {
      iconName = focused ? "map" : "map-outline";
    }
    if (route.name === "Settings") {
      iconName = focused ? "cog" : "cog-outline";
    }
    return <Ionicons name={iconName} size={24} color={color} />;
  },
});

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "black",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
