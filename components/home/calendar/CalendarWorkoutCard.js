import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Moment from "moment";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CalendarWorkoutCard = ({workout}) => {
  let [fontsLoaded] = useFonts({
    Poppins: require('../../../assets/fonts/Poppins-ExtraLight.ttf'),
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
          <View style={styles.workoutTextwrapper}>
          <Text style={styles.workoutTextHedearName}>{workout.name}</Text>
          <Text style={styles.workoutTextName}>2 exercises</Text>
          </View>


        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  wrapper: {
      width:'100%',
      margin:0,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-start',
    alignContent:'flex-start'
  },
  cardContainer: {
      width:'100%',
    borderRadius: 10,
    alignItems: "center",
    display:"flex",
    flexDirection:'row'
  },
  workoutCard: {
    width: 29,
    height: 29,
    borderRadius: 10,
    margin: 3,
    borderRadius: 50,
    backgroundColor: "rgba(191, 191, 191, 0.3)",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(191, 191, 191, 0.4)",
    borderWidth: 2,
  },
  workoutImage: {
    width: 23,
    height: 23,
    height: 23,
  },
  workoutTextwrapper:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      marginLeft:12

  },
  workoutTextHedearName: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 13,
  },
  workoutTextName:{
    color: "white",
    fontFamily: "Poppins",
    fontSize: 10,
  }

});
export default CalendarWorkoutCard;
