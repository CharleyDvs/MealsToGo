import React, { useState, useContext } from "react";
import { Snackbar, ActivityIndicator, Colors } from "react-native-paper";

import { AccountBg } from "../components/AccountBg";
import { AuthButton, Form, AccountInput } from "../components/Account.styles";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/textComponent/TextComponent";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error, setError } = useContext(
    AuthenticationContext
  );
  return (
    <AccountBg>
      <Text variant="centeredTitle">Meals To Go</Text>
      <Spacer position="bottom" size="md" />
      <Form>
        <AccountInput
          label="Email"
          value={email}
          textContentType="password"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer position="bottom" size="md" />
        <AccountInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <Spacer position="bottom" size="md" />
        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.grey800} />
        ) : (
          <AuthButton
            onPress={() => onLogin(email, password)}
            icon="lock-open-outline"
            mode="contained"
          >
            Log in
          </AuthButton>
        )}
        {error && (
          <>
            <Spacer position="bottom" size="md" />
            <Snackbar
              visible={error ? true : false}
              onDismiss={() => setError(null)}
              action={{
                label: "Close",
                onPress: () => {
                  setEmail("");
                },
              }}
            >
              {error}
            </Snackbar>
            <Spacer position="bottom" size="md" />
          </>
        )}
      </Form>
    </AccountBg>
  );
};
