import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #222;
`;

const CardContent = styled(Card.Content)`
  background-color: white;
`;

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
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <CardContent>
        <Title>{name}</Title>
      </CardContent>
    </Card>
  );
};
