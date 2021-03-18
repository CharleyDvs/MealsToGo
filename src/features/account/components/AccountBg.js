import React from "react";
import {
  StyledBackground,
  AccountCover,
  AccountContainer,
} from "./Account.styles";

export const AccountBg = ({
  children,
  uri = "https://cdn.fs.teachablecdn.com/zQsbSIWhSvO5eBiPL3PY",
}) => {
  return (
    <StyledBackground source={{ uri }}>
      <AccountCover>
        <AccountContainer>{children}</AccountContainer>
      </AccountCover>
    </StyledBackground>
  );
};
