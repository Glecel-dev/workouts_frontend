import { Picker } from "@react-native-picker/picker";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import ExerciseForm from "./ExerciseForm";

const WorkoutForm = ({ navigation }) => {
  const [selectedExercise, setSelectedExercise] = useState();
  const exerciseFormRef = useRef();

  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ marginHorizontal: 10, flexDirection: "column" }}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ height: 720 }}
        >
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <View style={styles.monthPickerView}>
                <Picker
                  selectedValue={selectedExercise}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedExercise(itemValue)
                  }
                  itemStyle={styles.monthPicker}
                >
                  <Picker.Item
                    style={styles.monthPicker}
                    label="BB Bench"
                    value="java"
                  />
                  <Picker.Item
                    style={styles.monthPicker}
                    label="Deadlift"
                    value="js"
                  />
                  <Picker.Item
                    style={styles.monthPicker}
                    label="Squants"
                    value="js"
                  />
                </Picker>
              </View>
              <LinearGradient
                // Button Linear Gradient
                colors={["#1ABC9C", "#0096FF"]}
                start={[0.0, 0.5]}
                end={[1.0, 0.5]}
                locations={[0.0, 1.0]}
                style={{
                  width: 70,
                  justifyContent: "center",
                  height: 30,
                  alignItems: "center",
                  color: "white",
                  shadowColor: "white",
                  shadowRadius: 2.67,
                  shadowOffset: { width: 2, height: 5 },
                  shadowOpacity: 8.97,
                  elevation: 6,
                  zIndex: 1,
                  borderRadius: 30/2,
                }}
              >
                <TouchableOpacity
                  //   onPress={handleSubmit}
                  titleSize={20}
                  //   disabled={!isValid}
                  style={styles.buttonField}
                >
                  <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <View style={styles.exerciseFormWrapper}>
              <Text
                style={{
                  color: "#1ABC9C",
                  fontFamily: "Poppins",
                  alignContent: "center",
                  fontSize: 12,
                }}
              >
                nr./
              </Text>
              <Text
                style={{
                  color: "#1ABC9C",
                  fontFamily: "Poppins",
                  fontSize: 12,
                }}
              >
                Sets
              </Text>
              <Text
                style={{
                  color: "#1ABC9C",
                  fontFamily: "Poppins",
                  fontSize: 12,
                }}
              >
                Reps
              </Text>
              <Text
                style={{
                  color: "#1ABC9C",
                  fontFamily: "Poppins",
                  fontSize: 12,
                }}
              >
                Weight(kg)
              </Text>
              <Text
                style={{
                  color: "#1ABC9C",
                  fontFamily: "Poppins",
                  fontSize: 12,
                }}
              >
                      
              </Text>
            </View>
            <ExerciseForm ref={exerciseFormRef} />
          </View>

          <View style={{ width: "100%", alignContent: "center", }}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#1ABC9C", "#0096FF"]}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{
                position: "absolute",
                width: 40,
                justifyContent: "center",
                height: 40,
                alignItems: "center",
                marginLeft: 175,
 
                borderRadius: 40/2,


              }}
            >
              <TouchableOpacity
                titleSize={50}
                onPress={() => exerciseFormRef.current.addComponent()}
                style={{width:'100%', alignContent:'center',alignItems:'center'}}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { fontWeight: "700", fontSize: 17 },
                  ]}
                >
                  +
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TouchableOpacity
            //   onPress={handleSubmit}
            titleSize={20}
            //   disabled={!isValid}
            style={{

              marginTop: 100,
              borderWidth: 1.5,
              flex:1,
              borderColor: "#1ABC9C",
              borderRadius: 20,
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.buttonText,{marginLeft:15}]}>Add new Exercise</Text>
            <Text style={[styles.buttonText,{marginRight:15, fontWeight:'700'}]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            titleSize={20}
            style={{
              marginTop: 20,
              borderWidth: 1.5,
              flex:1,
              backgroundColor: "#1ABC9C",
              borderRadius: 20,
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              padding: 10,
            }}
            onPress={() => exerciseFormRef.current.getValues()}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 120,
    backgroundColor: "#141e30",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonField: {
    width: 80,
    height: 20,
    backgroundColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 13,
    color: "white",
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  monthPickerView: {
    width: 170,
    borderWidth: 1,
    borderRadius: 10,
    borderBottomColor: "#1ABC9C",
    borderColor: "transparent",
  },
  monthPicker: {
    borderBottomColor: "#1ABC9C",
    borderRadius: 10,
    borderWidth: 1,
    color: "#1ABC9C",
    padding: 0,
    margin: 0,
    width: "100%",
    borderColor:'transparent',
    height:70
  },
  exerciseFormWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "baseline",
    alignContent: "center",
    margin: 10,
  },
  textInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#1ABC9C",
    width: 60,
  },
});

export default WorkoutForm;
