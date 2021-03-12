import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/safeArea/SafeArea";

function MapScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Map!</Text>
      </View>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
