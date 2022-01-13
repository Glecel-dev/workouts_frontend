import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import CalendarWorkoutCardRecap from "../components/calendar/CalendarWorkoutCardRecap";
import Header from '../components/home/header/Header'
export default function CalendarScreen({navigation}) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.wrapper}>
              <Header navigation={navigation} />

        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedStartDate}
            todayBackgroundColor="black"
            selectedDayColor="#1ABC9C"
            selectedDayTextColor="white"
            allowRangeSelection={false}
            headerWrapperStyle={{
              backgroundColor: "transparent",
              color: "#1ABC9C",
            }}
            textStyle={{
              fontFamily: "Poppins",
              color: "white",
            }}
            dayLabelsWrapper={{ borderColor: "#1ABC9C" }}
          />
        </View>
        <CalendarWorkoutCardRecap navigation={navigation}/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
  calendarContainer: {

    top: 120,

    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(191, 191, 191, 0.15)",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(191, 191, 191, 0.2)",
    borderWidth: 2,
  },
});
