import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Search } from "../components/SearchComponent";
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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <StatusIconContainer>
          <ActivityIndicator animating={true} color={Colors.black} />
        </StatusIconContainer>
      )}
      {!isLoading && !error && (
        <RestaurantFlatlist
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
