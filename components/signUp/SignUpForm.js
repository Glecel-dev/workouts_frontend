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
import * as yup from "yup";
import { Formik } from "formik";

import { passwordIcons } from "../../assets/buttons/LoginButtons";
import { AuthContext } from "../context";

const SignUpForm = () => {
  const { signUp } = React.useContext(AuthContext);

  const [visible, setVisible] = useState(true);
  const loginFormSchema = yup.object().shape({
    full_name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
    username: yup
      .string()
      .required()
      .min(6, "your username has to have at least 6 characters"),
    email: yup.string().email().required("An email address is required"),
    password: yup
      .string()
      .required()
      .min(6, "your password has to have at least 6 characters"),
    weight: yup.number().required(),
    height: yup.number().required(),
  });
  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    r;
  } else {
    return (
      <View style={styles.wrapper}>
        <Formik
          initialValues={{
            full_name: "",
            username: "",
            email: "",
            weight: '',
            height: '',
            password: "",
          }}
          onSubmit={async (values) => {
            // console.log(values);
            try {
              await onLogin(
                values.full_name,
                values.username,
                values.email,
                parseFloat(values.weight).toFixed(2),
                parseFloat(values.height).toFixed(2),
                values.password
              ).then(
                (response) => {
                  console.log(response);
                  response
                    ? signUp(response)
                    : Alert.alert("Error:", error.message);
                }
                // signIn(response)}
              );
            } catch (error) {
              Alert.alert("Error:", error.message);
            }
          }}
          validationSchema={loginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
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
                  autoCapitalize="none"
                  onChangeText={handleChange("full_name")}
                  onBlur={handleBlur("full_name")}
                  value={values.full_name}
                  style={{
                    width: "80%",
                    marginLeft: 10,
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                />
              </View>
              <Text style={styles.labelField}>Username</Text>
              <View style={styles.inputFields}>
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios/100/1ABC9C/gender-neutral-user.png",
                  }}
                  style={styles.fieldIcons}
                />
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Username"
                  autoCapitalize="none"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
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
                  autoFocus={false}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                      placeholderTextColor="#444"
                      placeholder="Weight"
                      // autoCapitalize="none"
                      keyboardType="numeric"
                      onChangeText={handleChange("weight")}
                      onBlur={handleBlur("weight")}
                      value={values.weight}
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
                      placeholderTextColor="#444"
                      placeholder="Height"
                      // autoCapitalize="none"
                      keyboardType="numeric"
                      onChangeText={handleChange("height")}
                      onBlur={handleBlur("height")}
                      value={values.height}
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
                  source={{
                    uri: "https://img.icons8.com/ios/100/1ABC9C/lock.png",
                  }}
                  style={styles.fieldIcons}
                />
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={visible}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
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
                      uri: visible
                        ? passwordIcons.active
                        : passwordIcons.inactive,
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
            </>
          )}
        </Formik>
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
    top: 495,
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
