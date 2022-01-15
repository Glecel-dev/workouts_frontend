import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { AuthContext } from "./components/context";
import { SignedInStack, SignedOutStack } from "./navigation";
import { getItem, removeItem, setItem } from "./SecureStore";
export default function AuthNavigation() {
  const Stack = createStackNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const screenOptions = {
    headerShown: false,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: "transparent",
      // text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: "transparent",
      // text: "#ffffff",
    },
  };
  const initialLoginState = {
    isLoading: true,
    // userName: null,
    userToken: null,
  };
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
      signUp: async () => {
        try {
          await setItem(userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "REGISTER", token: userToken });
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
    console.log(loginState.isLoading);
  }, []);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  // if (loginState.isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken !== null ? (
        <LinearGradient
          colors={["#141e30", "#0f0c29", "#0f0c29"]}
          style={styles.background}
        >
          <SignedOutStack />
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#141e30", "#0f0c29", "#0f0c29"]}
          style={styles.background}
        >
          <SignedInStack />
        </LinearGradient>
      )}
    </AuthContext.Provider>
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
