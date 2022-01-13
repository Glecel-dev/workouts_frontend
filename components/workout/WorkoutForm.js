import { Picker } from "@react-native-picker/picker";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import * as yup from "yup";

const WorkoutForm = ({ navigation }) => {
  const [selectedExercise, setSelectedExercise] = useState();

  const loginFormSchema = yup.object().shape({
    email: yup.string().email().required("An email address is required"),
    password: yup.string().required(),
    // .min(6, "your password has to have at least 6 characters"),
  });
  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ marginHorizontal: 10 , flexDirection:'column'}}>
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
                borderRadius: 20,
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
              style={{ color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12 }}
            >
              Sets
            </Text>
            <Text
              style={{ color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12 }}
            >
              Reps
            </Text>
            <Text
              style={{ color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12 }}
            >
              Weight(kg)
            </Text>
          </View>
          <View style={styles.exerciseFormWrapper}>
            <Text
              style={{ color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12 }}
            >
              #1
            </Text>
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
          </View>
        </View>
        <View style={{ width: "100%", alignContent: "center" }}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#1ABC9C", "#0096FF"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={{
                position:'absolute',
              width: 30,
              justifyContent: "center",
              height: 30,
              alignItems: "center",
              color: "white",
              marginLeft: 185,
              shadowColor: "white",
              shadowRadius: 2.67,
              shadowOffset: { width: 2, height: 5 },
              shadowOpacity: 8.97,
              elevation: 6,
              zIndex: 1,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              //   onPress={handleSubmit}
              titleSize={20}
              //   disabled={!isValid}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TouchableOpacity
              //   onPress={handleSubmit}
              titleSize={20}
              //   disabled={!isValid}
              style={{
                  marginTop:100,
                  marginLeft:120,
                  borderWidth:1.5,
                  width:165,
                  borderColor:"#1ABC9C",
                  borderRadius:8,
                  alignContent:'center',
                  alignItems:'center',
                  display:'flex',
                  flexDirection:'row',
                  padding:10,
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between'
              }}
            >
              <Text style={styles.buttonText}>Add new Exercise</Text>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
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
    padding:0,
    margin:0,
    width:'100%'
  },
  exerciseFormWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "baseline",
    alignContent: "center",
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
