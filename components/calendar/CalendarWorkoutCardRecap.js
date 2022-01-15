import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Platform } from "react-native";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { WORKOUTS } from "../../data/Workouts";
import CalendarWorkoutCard from "./CalendarWorkoutCard";

const CalendarWorkoutCardRecap = ({ navigation }) => {

  const [visibilityModal, setVisibilityModal] = useState(false);
  const [isEditPressed, setIsEditPressed] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.workoutContainer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visibilityModal}
          // style={{backgroundColor:'white'}}
        >
          <TouchableWithoutFeedback onPress={() => setVisibilityModal(false)}>
            <View style={styles.modalWrapper}>
              <View style={styles.modalMenuContainer}>
                <TouchableOpacity
                  style={styles.modalMenuWrapper}
                  onPress={() => {
                    setIsEditPressed(true);
                    setVisibilityModal(false);
                  }}
                >
                  <Text style={styles.modalMenuText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalMenuWrapper}
                  onPress={() => {
                    setVisibilityModal(false);
                    navigation.push("WorkoutScreen");
                  }}
                >
                  <Text style={styles.modalMenuText}>Add New</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View style={styles.headerContainer}>
          <Text style={{ color: "#1ABC9C", fontFamily: "Poppins" }}>
            Saturday
          </Text>
          <TouchableOpacity onPress={() => setVisibilityModal(true)}>
            <Text style={{ color: "#1ABC9C", fontFamily: "Poppins" }}>ooo</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            height: 200,
          }}
        >
          {WORKOUTS.map((workout, index) => (
            <ConditionalCardRendering key={index} workout={workout} />
          ))}
        </ScrollView>
      </View>
    );
  }
  function ConditionalCardRendering({ workout }) {
    if (!isEditPressed) {
      return <CalendarWorkoutCard workout={workout} />;
    } else {
      return (
        <TouchableOpacity style={styles.workoutEditedContainer}>
          <CalendarWorkoutCard workout={workout} />
          <CalendarWorkoutCard workout={workout} />
        </TouchableOpacity>
      );
    }
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
    top: 120,
    shadowRadius: 2.67,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 8.97,
    elevation: 6,
  },
  headerContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#1ABC9C",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 3,
    
  },
  exercisesCard: {
    width: "100%",
  },
  modalWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor:'red'
  },

  modalMenuContainer: {
    position: "absolute",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(191, 191, 191, 0.3)",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderWidth: 2,
    top: Platform.OS ==='ios'?540:497,
    width: 100,
    height: 60,
    marginLeft: 300,
  },
  modalMenuText: {
    color: "#f5f5f5",
  },
  modalMenuWrapper: {
    borderBottomColor: "#1ABC9C",
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 2,
  },
  workoutEditedContainer: {
    backgroundColor: "red",
    top: 0,
    width: "100%",
    margin: 5,
  },
});

export default CalendarWorkoutCardRecap;
