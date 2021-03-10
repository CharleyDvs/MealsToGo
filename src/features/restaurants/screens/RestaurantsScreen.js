import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

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

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantFlatlist
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
