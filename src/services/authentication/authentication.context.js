import React, { useState } from "react";
import { createContext } from "react";

import { loginRequest, registerRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userObject) => {
        setUser(userObject);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    registerRequest(email, password)
      .then((userObject) => {
        setUser(userObject);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        setError,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
