import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/home/header/Header";
import WorkoutForm from "../components/workout/WorkoutForm";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const WorkoutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      <WorkoutForm navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
export default WorkoutScreen;
