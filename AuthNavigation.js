import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect ,useState} from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { getItem } from "./SecureStore";

export default function AuthNavigation() {
  const Stack = createStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);
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
  useEffect(async () => {
    await getItem().then((res) =>
    console.log(res)
      // res ? setLoggedIn(true):setLoggedIn
    );
  }, []);
  return (
    <LinearGradient
      colors={["#141e30", "#0f0c29", "#0f0c29"]}
      style={styles.background}
    >
      <NavigationContainer theme={mainTheme}>
        <Stack.Navigator initialRouteName="ROOT" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    flex: 1,
  },
});
