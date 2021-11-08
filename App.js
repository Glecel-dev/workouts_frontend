import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet } from "react-native";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return (

      <AuthNavigation />
  );
}
const styles = StyleSheet.create({
  background: {
    flex:1
  },
});
