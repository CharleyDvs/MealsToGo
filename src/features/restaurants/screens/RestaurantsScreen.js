import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Search } from "../components/SearchComponent";
import { FavouritesBar } from "../../../components/favourites/FavoritesBarComponent";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const RestaurantFlatlist = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
`;

const StatusIconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  transform: scale(3);
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouriteToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={(restaurant) => {
            navigation.navigate("RestaurantsDetail", { restaurant });
          }}
        />
      )}
      {isLoading && (
        <StatusIconContainer>
          <ActivityIndicator animating={true} color={Colors.black} />
        </StatusIconContainer>
      )}
      {!isLoading && !error && (
        <RestaurantFlatlist
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantsDetail", {
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
      )}
    </SafeArea>
  );
};
