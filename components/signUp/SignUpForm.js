import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { passwordIcons } from "../../assets/buttons/LoginButtons";

const SignUpForm = () => {
  const [visible, setVisible] = useState(true);
  const handleSubmit = (e) => {
    console.log(e);
  };
  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    r;
  } else {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.labelField}>Full Name</Text>
        <View style={styles.inputFields}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/100/1ABC9C/gender-neutral-user.png",
            }}
            style={styles.fieldIcons}
          />
          <TextInput
            placeholderTextColor="#444"
            placeholder="Full Name"
            style={{
              width: "80%",
              marginLeft: 10,
              color: "white",
              fontFamily: "Poppins",
            }}
          />
        </View>
        <Text style={styles.labelField}>Email</Text>
        <View style={styles.inputFields}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/100/1ABC9C/new-post.png",
            }}
            style={styles.fieldIcons}
          />
          <TextInput
            placeholderTextColor="#444"
            placeholder="E-mail address"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            style={{
              width: "80%",
              marginLeft: 10,
              color: "white",
              fontFamily: "Poppins",
            }}
          />
        </View>

        <View style={styles.additionalFields}>
          <View style={styles.additionalFieldsContainer}>
            <Text style={styles.labelField}>Weight</Text>
            <View style={styles.inputFields}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/100/1ABC9C/scale.png",
                }}
                style={styles.fieldIcons}
              />
              <TextInput
                style={{
                  width: "50%",
                  marginLeft: 10,
                  color: "white",
                  fontFamily: "Poppins",
                }}
              />
              <Text style={styles.additionalLabelField}>kg</Text>
            </View>
          </View>
          <View style={styles.additionalFieldsContainer}>
            <Text style={styles.labelField}>Height</Text>

            <View style={styles.inputFields}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/100/1ABC9C/height.png",
                }}
                style={styles.fieldIcons}
              />
              <TextInput
                style={{
                  width: "50%",
                  marginLeft: 10,
                  color: "white",
                  fontFamily: "Poppins",
                }}
              />
              <Text style={styles.additionalLabelField}>cm</Text>
            </View>
          </View>
        </View>
        <Text style={styles.labelField}>Password</Text>
        <View style={styles.inputFields}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/100/1ABC9C/lock.png" }}
            style={styles.fieldIcons}
          />
          <TextInput
            placeholderTextColor="#444"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={visible}
            textContentType="password"
            style={{
              width: "80%",
              marginLeft: 10,
              color: "white",
              fontFamily: "Poppins",
            }}
          />
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => setVisible(!visible)}
          >
            <Image
              source={{
                uri: visible ? passwordIcons.active : passwordIcons.inactive,
              }}
              style={styles.seePasswordIcon}
            />
          </TouchableOpacity>
        </View>
        <LinearGradient
          // Button Linear Gradient
          colors={["#1ABC9C", "#0096FF"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={styles.buttonField}
        >
          <Pressable
            onPress={handleSubmit}
            titleSize={20}
            //   disabled={!isValid}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </LinearGradient>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 20,
  },
  inputFields: {
    width: "100%",
    borderColor: "#444",
    borderRadius: 20,
    borderWidth: 0.3,
    backgroundColor: "#141e33",
    height: 40,
    marginTop: 4,
    marginBottom: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  labelField: {
    color: "#8C8C8C",
    marginTop: 20,
    paddingHorizontal: 5,
    fontFamily: "Poppins",
    fontSize: 13,
  },
  fieldIcons: {
    width: 23,
    height: 23,
    marginLeft: 5,
  },
  seePasswordIcon: {
    width: 30,
    height: 30,
  },

  additionalFields: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  additionalFieldsContainer: {
    width: "45%",
  },
  buttonField: {
    position: "absolute",
    top: 395,
    width: 240,
    marginLeft: 40,
    height: 45,
    backgroundColor: "#1ABC9C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "white",
    shadowRadius: 2.67,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 8.97,
    elevation: 6,
  },
  button: {
    width: 60,
    height: 50,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: "Poppins",
  },
  fieldIcons: {
    width: 23,
    height: 23,
    marginLeft: 5,
  },
  seePasswordIcon: {
    width: 30,
    height: 30,
  },
  additionalLabelField: {
    color: "#1ABC9C",
    fontFamily: "Poppins",
  },
});

export default SignUpForm;
