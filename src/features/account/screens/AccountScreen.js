import React from "react";

import { AuthButton } from "../components/Account.styles";
import { AccountBg } from "../components/AccountBg";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/textComponent/TextComponent";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBg>
      <Text variant="centeredTitle">Meals To Go</Text>
      <Spacer position="bottom" size="lg" />
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Log in
      </AuthButton>
      <Spacer position="bottom" size="md" />
      <AuthButton
        icon="mail"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
    </AccountBg>
  );
};
