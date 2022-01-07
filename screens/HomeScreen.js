import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { bottomTabsIcons } from "../assets/buttons/BottomButtons";
import BodyPartsList from "../components/home/bodyPartsStatistics/BodyPartsList";
import BottomTabs from "../components/home/bottomTabs/BottomTabs";
import Header from "../components/home/header/Header";
import WorkoutList from "../components/home/workoutList/WorkoutList";
import SafeViewAndroid from "../styles/SafeViewAndroid";

export default function HomeScreen({ navigation }) {
  const [activeIcon, setActiveIcon] = useState("Home");
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      <WorkoutList />
      <BodyPartsList />
      {{ activeIcon }}
      <BottomTabs icons={bottomTabsIcons} active={setActiveIcon} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
