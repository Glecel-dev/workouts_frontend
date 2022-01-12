import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import CalendarScreen from "./screens/CalendarScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
const screenOptions = {
  headerShown: false,
};
const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
const CalendarStackScreen = () => {
  return (
    <CalendarStack.Navigator screenOptions={{headerShown:false}}>
      <CalendarStack.Screen name="CalendarScreen" component={CalendarScreen} />
    </CalendarStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

export function SignedInStack() {
  return (
    <NavigationContainer theme={mainTheme}>
      <Tab.Navigator
        screenOptions={
          (({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused
                  ? "home"
                  : "home-outline";
              } else if (route.name === "Calendar") {
                iconName = focused ? "calendar" : "calendar-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarBackground: () => (
              <View tint="light" intensity={100} style={{backgroundColor:'transparent'}} ></View>
            ),
          })
          )
        }

      >
        <Tab.Screen options={screenOptions} name="Home" component={HomeStackScreen} />
        <Tab.Screen options={screenOptions} name="Calendar" component={CalendarStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export const SignedOutStack = () => (
  <NavigationContainer theme={mainTheme}>
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
