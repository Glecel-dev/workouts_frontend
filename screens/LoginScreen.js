import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState, useRef ,useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/signUp/SignUpForm";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const OPTIONS = [
  {
    name: "LOGIN",
  },
  {
    name: "SIGNUP",
  },
];
import { LogBox } from 'react-native';


const LoginScreen = () => {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const animate = (name) => {
    setActiveTab(name);
    if(name==="LOGIN"){
      Animated.timing(moveAnimation, {
        toValue: 0,
        duration: 200,
      }).start();
    }
    else if(name==='SIGNUP'){
    Animated.timing(moveAnimation, {
      toValue: 170,
      duration: 200,
    }).start();
    }
  };
  const [activeTab, setActiveTab] = useState("LOGIN");

  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  const handleChnageTextColor = (e) => {
    setTextColor(textColor === "black" ? "#CCCCCC" : "black");
  };
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])
  if (!fontsLoaded) {
    return <AppLoading />;
    ;
  } else {
    return (
      <SafeAreaView style={(styles.container, SafeViewAndroid.AndroidSafeArea)}>
        <View style={styles.wrapper}>
          <View style={styles.logoContainer}>
            {/* <Image/> */}
            <Text style={styles.logo}>LOGO</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.optionTextContainer}>
              {OPTIONS.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => animate(option.name)}
                >
                  <Text
                    style={
                      (styles.optionText,
                      option.name == activeTab
                        ? styles.highlightedOptionText
                        : styles.optionText)
                    }
                  >
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Animated.View
              style={[styles.scroll, { marginLeft: moveAnimation }]}
            ></Animated.View>
            <Divider width={1} orientation={"horizontal"} />
            {activeTab == "LOGIN" ? <LoginForm /> : <SignUpForm />}
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  wrapper: {
    marginTop: 80,
    marginHorizontal: 20,
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "white",
    fontSize: 40,
  },
  optionTextContainer: {
    marginTop: 10,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  optionText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 18,
  },
  highlightedOptionText: {
    color: "#0096FF",
    fontFamily: "Poppins",
    fontSize: 18,
  },
  formContainer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#141e33",
    borderRadius: 10,
  },
  scroll: {
    position: "absolute",
    top: 50,
    left:63,
    // left: 233,
    width: 70,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#0096FF",
    zIndex: 20000,
  },
});

export default LoginScreen;
