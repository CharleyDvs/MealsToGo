import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.text}>Searchlist</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "green",
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
