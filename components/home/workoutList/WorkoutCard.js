import { useFonts } from "expo-font";
import Moment from "moment";
import React from "react";
import AppLoading from "expo-app-loading";
import { Image, StyleSheet, Text, View } from "react-native";

const WorkoutCard = ({ workout }) => {
  Moment.locale("en");
  let [fontsLoaded] = useFonts({
    'Poppins': require("../../../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cardContainer}>
          <View style={styles.workoutCard}>
            <Image
              style={styles.workoutImage}
              source={{ uri: workout.imageUrl }}
            />
          </View>
          <Text style={styles.workoutTextName}>{workout.name}</Text>
          <Text style={styles.workoutTextDate}>
            {Moment(workout.date).format("dddd d MMM ")}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  cardContainer: {
    padding: 5,
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#141e33",
    alignItems: "center",
  },
  workoutCard: {
    width: 73,
    height: 73,
    borderRadius: 10,
    margin: 5,
    borderRadius: 50,
    backgroundColor: "rgba(191, 191, 191, 0.3)",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor:'rgba(191, 191, 191, 0.4)',
    borderWidth:2
  },
  workoutImage: {
    width: 58,
    height: 58,
  },
  workoutTextName: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 17,
  },
  workoutTextDate: {
    color: "white",
    fontFamily: "Poppins",
  },
});
export default WorkoutCard;
