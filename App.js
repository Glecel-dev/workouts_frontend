// import { LinearGradient } from "expo-linear-gradient";
// import * as React from "react";
// import { StyleSheet } from "react-native";
// import AuthNavigation from "./AuthNavigation";
// import { AuthProvider } from "./AuthProvider";

// export default function App() {
//   return (
//     <AuthProvider>
//       <AuthNavigation />
//     </AuthProvider>
//   );
// }
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
// });
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { AuthContext } from "./components/context";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { getItem, removeItem, setItem } from "./SecureStore";

const App = () => {
  const Stack = createStackNavigator();

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    // userName: null,
    userToken: null,
  };
  const screenOptions = {
    headerShown: false,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          // userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          // userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          // userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userToken) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        // const userToken = String(foundUser[0].userToken);

        try {
          await setItem(userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await removeItem();
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await getItem();
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <LinearGradient
          colors={["#141e30", "#0f0c29", "#0f0c29"]}
          style={styles.background}
        >
          <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={screenOptions}>
              {loginState.userToken !== null ? (
                <Stack.Screen name="Home" component={HomeScreen} />
              ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </LinearGradient>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;

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
