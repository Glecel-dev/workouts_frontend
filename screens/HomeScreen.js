import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { bottomTabsIcons } from "../assets/buttons/BottomButtons";
import BottomTabs from "../components/home/bottomTabs/BottomTabs";
import Header from "../components/home/header/Header";
import SafeViewAndroid from "../styles/SafeViewAndroid";
import WorkoutScreen from "./WorkoutScreen";
import CalendarScreen from "./CalendarScreen";
export default function HomeScreen({ navigation }) {
  const [activeIcon, setActiveIcon] = useState("Home");
  const changeHomeView = () => {
    activeIcon === "Home" ? setActiveIcon("Calendar") : setActiveIcon("Home");
    console.log(activeIcon);
  };
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      {activeIcon === "Home" ? (
        <WorkoutScreen />
      ) : (
        <CalendarScreen/>
      )}

      <BottomTabs icons={bottomTabsIcons} active={changeHomeView} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
