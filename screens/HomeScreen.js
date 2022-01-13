import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Header from "../components/home/header/Header";
import SafeViewAndroid from "../styles/SafeViewAndroid";
import WorkoutScreen from "./WorkoutScreen";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      <WorkoutScreen />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
