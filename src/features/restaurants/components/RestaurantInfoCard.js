import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  Info,
  Section,
  SectionEnd,
  Rating,
  CardContent,
} from "./RestaurantInfoCard.styles";
import { Text } from "../../../components/textComponent/TextComponent";
import { Spacer } from "../../../components/spacer/Spacer";
import { Favourite } from "../../../components/favourites/FavouritesComponent";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <Card.Cover source={{ uri: photos[0] }} />
      <CardContent>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml
                  key={`star-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error"> Closed Temporarily</Text>
              )}
              <Spacer position="left" size="md" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </SectionEnd>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </CardContent>
    </RestaurantCard>
  );
};
