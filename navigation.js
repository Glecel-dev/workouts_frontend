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
      initialRouteName="homeScreen"
      screenOptions={screenOptions}
      
    >
      <Stack.Screen name="homeScreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export const SignedOutStack = () => (
  <NavigationContainer theme={mainTheme}>
    <Stack.Navigator
      initialRouteName="loginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="loginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
