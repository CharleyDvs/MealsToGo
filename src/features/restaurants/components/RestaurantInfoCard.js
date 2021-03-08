import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content style={styles.cardContent}>
        <Title style={styles.text}>{name}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cardContent: {
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    color: "#222",
    fontWeight: "700",
  },
});
