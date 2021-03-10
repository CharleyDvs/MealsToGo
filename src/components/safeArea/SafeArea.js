import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const SafeArea = ({ children }) => (
  <SafeAreaComponent>{children}</SafeAreaComponent>
);
