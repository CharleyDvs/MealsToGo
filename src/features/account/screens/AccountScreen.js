import React from "react";
import LottieView from "lottie-react-native";

import { AuthButton, AnimationWrapper } from "../components/Account.styles";
import { AccountBg } from "../components/AccountBg";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/textComponent/TextComponent";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBg>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
