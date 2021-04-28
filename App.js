import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";

import {
  useFonts as useFredoka,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import { GetStartedScreen } from "./src/screens/get-started/get-started.screen";

export default function App() {
  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });

  const [fredokaLoaded] = useFredoka({
    FredokaOne_400Regular,
  });

  if (!ralewayLoaded || !fredokaLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
          <GetStartedScreen/>
        </View>
      </ThemeProvider>
    </>
  );
}
