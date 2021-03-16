import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/Spacer";
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurantInfo";

const FavouritesWrapper = styled.View`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <Spacer key={restaurant.name} position="left" size="md">
              <TouchableOpacity
                onPress={() => {
                  onNavigate(restaurant);
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
