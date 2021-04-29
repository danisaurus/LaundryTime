import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import { CreateOrderScreen } from "./src/screens/create-order/create-order.screen";

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

  const Stack = createStackNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="CreateOrder" component={CreateOrderScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
