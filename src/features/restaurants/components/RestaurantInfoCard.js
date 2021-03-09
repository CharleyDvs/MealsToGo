import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Addres = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const CardContent = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
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
        <Info>
          <Title>{name}</Title>
          <Addres>{address}</Addres>
        </Info>
      </CardContent>
    </Card>
  );
};
