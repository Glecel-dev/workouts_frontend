import {Ionicons} from "@expo/vector-icons";
import {Picker} from "@react-native-picker/picker";
import {LinearGradient} from "expo-linear-gradient";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import {Divider} from "react-native-elements";

const ExerciseForm = forwardRef((props, ref) => {
    const [rowArrayOfInputs, setRowArrayOfInputs] = useState([]);
    const [rowArrayOfInputsData, setRowArrayOfInputsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedExercise, setSelectedExercise] = useState();

    const addValues = (data, index) => {
        let dataArray = rowArrayOfInputsData;
        let checkBool = false;
        if (dataArray.length !== 0) {
            dataArray.forEach((element) => {
                if (element.index === index) {
                    if (data.sets) {
                        element.data["sets"] = data.sets;
                    } else if (data.reps) {
                        element.data["reps"] = data.reps;
                    } else {
                        element.data["weight"] = data.weight;
                    }
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
        setRowArrayOfInputs(textInput);
        setRowArrayOfInputsData(inputData);
        setTimeout(() => {
            setIsLoading(false);
        }, 50);
    };
    const arrayOfInputsComponent = (index) => {
        return (
            <View style={styles.exerciseFormWrapper} key={index}>
                <Text style={{color: "#1ABC9C", fontFamily: "Poppins", fontSize: 12}}>
                    #{index}
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => addValues({sets: text}, index)}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => addValues({reps: text}, index)}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => addValues({weight: text}, index)}
                />
                <TouchableOpacity
                    style={{margin: 0, padding: 0}}
                    onPress={() => {
                        removeTextInput(index);
                    }}
                >
                    <Ionicons name={"trash-bin"} size={20} color={"tomato"}/>
                </TouchableOpacity>
            </View>
        );
    };
    const addComponent =()=> {
        setIsLoading(true);

        let index = rowArrayOfInputs.length;
        let arrayComponets = rowArrayOfInputs;
        arrayComponets.push(arrayOfInputsComponent(index));
        // setRowArrayOfInputs(arrayComponets)

        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }
    useImperativeHandle(ref, () => ({

        getValues() {
            let data = [];
            rowArrayOfInputsData.map((exercise) => {
                data.push(exercise.data);
            });
            console.log({[selectedExercise]: data});
        },
    }));

    return (
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
                        shadowOffset: {width: 2, height: 5},
                        shadowOpacity: 8.97,
                        elevation: 6,
                        zIndex: 1,
                        borderRadius: 30 / 2,
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
            <Divider style={{marginTop: 20, marginBottom: 20, width: "100%"}}/>

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
                >Delete</Text>
            </View>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                style={{
                    width: "100%",
                    maxHeight: 900,
                }}
            >
                {rowArrayOfInputs.map((components) => {
                    return components;
                })}
            </ScrollView>
            <View style={{width: "100%", alignContent: "center"}}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={["#1ABC9C", "#0096FF"]}
                            start={[0.0, 0.5]}
                            end={[1.0, 0.5]}
                            locations={[0.0, 1.0]}
                            style={{
                                // position: "absolute",
                                width: 40,
                                justifyContent: "center",
                                height: 40,
                                alignItems: "center",
                                marginLeft: 175,

                                borderRadius: 40 / 2,
                            }}
                        >
                            <TouchableOpacity
                                titleSize={50}
                                onPress={() => addComponent()}
                                style={{
                                    position:'absolute',
                                    width: '100%',
                                    // height: 40,
                                    // backgroundColor:'red',
                                    alignContent: "center",
                                    alignItems: "center",
                                    zIndex:222222222
                                }}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                        {fontWeight: "700", fontSize: 17},
                                    ]}
                                >
                                    +
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
        </View>
    );
});
const styles = StyleSheet.create({
    wrapper:{
        width: "100%",
        backgroundColor: "#141e30",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom:40
    },
    exerciseFormWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "baseline",
        alignContent: "center",
        marginRight: 20,
        paddingLeft: 10,
        marginBottom: 7,
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
    textInput: {
        color: "white",
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: "#1ABC9C",
        width: 60,
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
        borderColor: "transparent",
        height: 70,
    },
    buttonText: {
        fontSize: 13,
        color: "white",
        fontWeight: "600",
        fontFamily: "Poppins",
    },
});
export default ExerciseForm;
