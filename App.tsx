import React from "react";
import { Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Login } from "./src/screens/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Login />;
}
