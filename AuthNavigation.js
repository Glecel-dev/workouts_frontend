import { LinearGradient } from "expo-linear-gradient";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SignedInStack, SignedOutStack } from "./navigation";

export default function AuthNavigation() {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
    // console.log(user)
  };

   async function getUser() {
    const user = await SecureStore.getItemAsync("access");
    setCurrentUser(user)
    return user
  };

  useEffect(() => 
    // const user = await SecureStore.getItemAsync("username");
    setCurrentUser(getUser())
    // console.log(currentUser)
  , []);

  return (
    <LinearGradient
      colors={["#141e30", "#0f0c29", "#0f0c29"]}
      style={styles.background}
    >
      {currentUser ? <SignedInStack /> : <SignedOutStack />}
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
