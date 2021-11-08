import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { bottomTabsIcons } from "../assets/buttons/BottomButtons";
import BodyPartsList from "../components/home/bodyPartsStatistics/BodyPartsList";
import BottomTabs from "../components/home/bottomTabs/BottomTabs";
import Header from "../components/home/header/Header";
import WorkoutList from "../components/home/workoutList/WorkoutList";
import SafeViewAndroid from "../styles/SafeViewAndroid";
export default function HomeScreen() {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header />
      <WorkoutList />
      <BodyPartsList />
      <BottomTabs icons={bottomTabsIcons} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});