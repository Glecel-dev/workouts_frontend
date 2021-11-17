import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
const mainTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
	},
};
export const SignedInStack = () => (
  <NavigationContainer theme={mainTheme}>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export const SignedOutStack = () => (
  <NavigationContainer theme={mainTheme}>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
