import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExerciseForm = forwardRef((props, ref) => {
  const [rowArrayOfInputs, setRowArrayOfInputs] = useState([]);
  const [rowArrayOfInputsData, setRowArrayOfInputsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const addValues = (data, index) => {
    let dataArray = rowArrayOfInputsData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          console.log(data);
          if (data.sets) {
            element.data["sets"] = data.sets;
          } else if (data.reps) {
            element.data["reps"] = data.reps;
          } else {
            element.data["weight"] = data.weight;
          }
          data;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setRowArrayOfInputsData(dataArray);
    } else {
      dataArray.push({
        data: data,
        index: index,
      });
      setRowArrayOfInputsData(dataArray);
    }
  };
  const removeTextInput = (index) => {
    setIsLoading(true);
    let textInput = rowArrayOfInputs;
    let inputData = rowArrayOfInputsData;
    delete textInput[index];
    delete inputData[index];
    // this.setState({ textInput, inputData });
    setRowArrayOfInputs(textInput);
    setRowArrayOfInputsData(inputData);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };
  const arrayOfInputsComponent = (index) => {
    return (
      <View style={styles.exerciseFormWrapper} key={index}>
        <Text style={{ color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12 }}>
          #{index}
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => addValues({ sets: text }, index)}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => addValues({ reps: text }, index)}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => addValues({ weight: text }, index)}
        />
        <TouchableOpacity
          style={{ margin: 0, padding: 0 }}
          onPress={() => {
            removeTextInput(index);
          }}
        >
          <Ionicons name={'trash-bin'} size={20} color={'tomato'} />
        </TouchableOpacity>
      </View>
    );
  };

  useImperativeHandle(ref, () => ({
    addComponent() {
      setIsLoading(true);

      let index = rowArrayOfInputs.length;
      let arrayComponets = rowArrayOfInputs;
      arrayComponets.push(arrayOfInputsComponent(index));
      //   setRowArrayOfInputs({ arrayCompoents });
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
      // setIsLoading(false)
    },
    getValues() {
      console.log(rowArrayOfInputsData);
    },
  }));

  return (
    <>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          maxHeight: 200,
        }}
      >
        {rowArrayOfInputs.map((components) => {
          return components;
        })}
      </ScrollView>
    </>
  );
});
const styles = StyleSheet.create({
  exerciseFormWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "baseline",
    alignContent: "center",
    marginRight: 20,
    paddingLeft: 20,
  },
  textInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#1ABC9C",
    width: 60,
  },
});
export default ExerciseForm;
