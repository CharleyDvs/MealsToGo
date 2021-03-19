import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { RestaurantInfoCard } from "../../../features/restaurants/components/RestaurantInfoCard";
import { Text } from "../../../components/textComponent/TextComponent";
import { Spacer } from "../../../components/spacer/Spacer";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestaurantFlatlist = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantFlatlist
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("FavouritesDetail", {
                    restaurant: item,
                  });
                }}
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Spacer position="left" size="lg">
          <Text variant="label">You have nothing in favourites yet</Text>
        </Spacer>
      )}
    </SafeArea>
  );
};
