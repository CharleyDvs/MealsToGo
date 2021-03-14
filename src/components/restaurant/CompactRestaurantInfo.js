import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import WebView from "react-native-webview";

import { Text } from "../textComponent/TextComponent";

const CompactImage = styled.Image`
  border-radius: 16px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 16px;
  width: 100px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="centeredLabel">{restaurant.name}</Text>
    </Item>
  );
};
