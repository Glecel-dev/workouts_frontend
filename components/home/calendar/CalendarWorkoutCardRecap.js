import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WORKOUTS } from "../../../data/Workouts";
import WorkoutCard from "../workoutList/WorkoutCard";
import CalendarWorkoutCard from "./CalendarWorkoutCard";

const CalendarWorkoutCardRecap = () => {
  let [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.workoutContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ color: "white", fontFamily: "Poppins" }}>
            Saturday
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#1ABC9C", fontFamily: "Poppins" }}>ooo</Text>
          </TouchableOpacity>
        </View>
        {WORKOUTS.map((workout, index) => (
          <View style={styles.exercisesCard}>
            <CalendarWorkoutCard workout={workout} key={index}/>
          </View>
        ))}
      </View>
    );
  }
};
const styles = StyleSheet.create({
  workoutContainer: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(191, 191, 191, 0.15)",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(191, 191, 191, 0.2)",
    borderWidth: 2,
  },
  headerContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  exercisesCard: {
    width:'100%'
  },
});
export default CalendarWorkoutCardRecap;
