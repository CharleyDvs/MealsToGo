import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as firebase from "firebase";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyBa_CtrSB5tXROxU5vgqp4-0aww8XEBqvI",
  authDomain: "mealstogo-4f38d.firebaseapp.com",
  projectId: "mealstogo-4f38d",
  storageBucket: "mealstogo-4f38d.appspot.com",
  messagingSenderId: "1010292509224",
  appId: "1:1010292509224:web:e39beefc9eceda3dcb431d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
