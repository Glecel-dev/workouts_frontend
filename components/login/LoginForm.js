import Validator from "email-validator";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import { passwordIcons } from "../../assets/buttons/LoginButtons";
import { getItem, setItem } from "../../SecureStore";
import { onLogin } from "../../services/baseServices/BaseApiKit";
import { AuthContext } from "../context";

const LoginForm = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  const [visible, setVisible] = useState(true);

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
    r;
  } else {
    return (
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            // console.log(values);
            try {
              await onLogin(values.email, values.password)
                .then(
                  (response) => {
                    console.log(response);
                    response
                      ? signIn(response)
                      : Alert.alert(
                          "Error:",
                          "Your credentials are not correct"
                        );
                  }
                  // signIn(response)}
                )
                .then((await getItem()) ? navigation.push("Home") : null);
            } catch (error) {
              Alert.alert("Error:", error.message);
            }
          }}
          validationSchema={loginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <Text style={styles.labelField}>Email</Text>
              <View
                style={[
                  styles.inputFields,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#444"
                        : "red",
                  },
                ]}
              >
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
              <Text style={styles.labelField}>Password</Text>
              <View
                style={[
                  styles.inputFields,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 6
                        ? "#444"
                        : "red",
                  },
                ]}
              >
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
              <View style={styles.additionalFields}>
                <Text style={styles.labelField}>Remember Me</Text>
                <TouchableOpacity>
                  <Text style={styles.labelField}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.buttonField}> */}
              <LinearGradient
                // Button Linear Gradient
                colors={["#1ABC9C", "#0096FF"]}
                start={[0.0, 0.5]}
                end={[1.0, 0.5]}
                locations={[0.0, 1.0]}
                style={{
                  width: 200,
                  marginLeft: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  top: 50,
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
                  onPress={handleSubmit}
                  titleSize={20}
                  //   disabled={!isValid}
                  style={styles.buttonField}
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              </LinearGradient>
            </>
          )}
        </Formik>
        {/* </View> */}
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
  additionalFields: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonField: {
    // position: "absolute",
    // top: 250,
    width: 240,
    // marginLeft: 40,
    height: 45,
    backgroundColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
});

export default LoginForm;
