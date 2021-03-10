import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

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
