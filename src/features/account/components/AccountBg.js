import React from "react";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";

const StyledBackground = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const AccountBg = ({
  children,
  uri = "https://cdn.fs.teachablecdn.com/zQsbSIWhSvO5eBiPL3PY",
}) => {
  return (
    <StyledBackground source={{ uri }}>
      <AccountCover>{children}</AccountCover>
    </StyledBackground>
  );
};
