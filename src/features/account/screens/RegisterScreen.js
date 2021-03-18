import React, { useState, useContext } from "react";
import { Snackbar } from "react-native-paper";

import { AccountBg } from "../components/AccountBg";
import { AuthButton, Form, AccountInput } from "../components/Account.styles";
import { Spacer } from "../../../components/spacer/Spacer";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, setError } = useContext(AuthenticationContext);
  return (
    <AccountBg>
      <Form>
        <AccountInput
          label="Email"
          value={email}
          textContentType="emailAddress"
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
        <AccountInput
          label="Repeat password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        <Spacer position="bottom" size="md" />
        <AuthButton
          onPress={() => onRegister(email, password, repeatedPassword)}
          icon="mail"
          mode="contained"
        >
          Register
        </AuthButton>
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
