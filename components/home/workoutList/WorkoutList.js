import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import WorkoutCard from "./WorkoutCard";
import { WORKOUTS } from "../../../data/Workouts";
const WorkoutList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}
    >
      {/* <View style={styles.wrapper}> */}
      {WORKOUTS.map((workout, index) => (
        <WorkoutCard key={index} workout={workout}/>
      ))}
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position:'absolute',
    top:110,
    backgroundColor: "transparent",
    width:'100%',
    height:160,
  },
});

export default WorkoutList;
