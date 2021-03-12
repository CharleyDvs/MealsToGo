import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: flex-start;
  justify-content: center;
`;

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
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
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
