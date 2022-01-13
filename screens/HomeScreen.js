import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Header from "../components/home/header/Header";
import SafeViewAndroid from "../styles/SafeViewAndroid";
import WorkoutList from '../components/home/workoutList/WorkoutList'
import BodyPartsList from '../components/home/bodyPartsStatistics/BodyPartsList';
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      <WorkoutList />
      <BodyPartsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
