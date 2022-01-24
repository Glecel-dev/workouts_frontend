import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import {LinearGradient} from "expo-linear-gradient";
import React, {useEffect, useRef, useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import ExerciseForm from "./ExerciseForm";

const WorkoutForm = ({navigation}) => {
    const exerciseFormRef = useRef();
    const [isLoading, setIsLoading] = useState(true);

    const [workoutFormInput, setWorkoutFormInput] = useState([]);
    const [workoutFormInputData, setWorkoutFormInputData] = useState([]);

    let [fontsLoaded] = useFonts({
        Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    });
    const exerciseComponent = (index) => {
        return <ExerciseForm key={index} ref={exerciseFormRef}/>;
    };
    const addComponent = () => {
        setIsLoading(true);

        let index = workoutFormInput.length;
        let arrayComponets = workoutFormInput;
        arrayComponets.push(exerciseComponent(index));
        setWorkoutFormInput(arrayComponets);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };
    useEffect(() => {
        addComponent();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={{marginHorizontal: 10, marginTop:120, flexDirection: "column"}}>
                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={{height: '100%'}}
                >
                        {workoutFormInput.map((components) => {
                            return components;
                        })}

 
                    <TouchableOpacity
                        onPress={() => addComponent()}
                        titleSize={20}
                        style={{
                            marginTop: 100,
                            borderWidth: 1.5,
                            flex: 1,
                            borderColor: "#1ABC9C",
                            borderRadius: 20,
                            alignContent: "center",
                            alignItems: "center",
                            padding: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={[styles.buttonText, {marginLeft: 15}]}>
                            Add new Exercise
                        </Text>
                        <Text
                            style={[
                                styles.buttonText,
                                {marginRight: 15, fontWeight: "700"},
                            ]}
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        titleSize={20}
                        style={{
                            marginTop: 20,
                            borderWidth: 1.5,
                            flex: 1,
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


    buttonText: {
        fontSize: 13,
        color: "white",
        fontWeight: "600",
        fontFamily: "Poppins",
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
