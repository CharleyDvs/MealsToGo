import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
});
