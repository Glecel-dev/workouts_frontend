import axios from "axios";
import { Alert } from "react-native";

let BaseApiKit = axios.create({
  baseURL: "http://10.0.2.2:8000",
  // baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setClientToken = (token) => {
  BaseApiKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const onLogin = async (email, password) => {
  let token;

  await BaseApiKit.post("/auth/knock-knock/", {
    email: email,
    password: password,
  })
    .then((response) => {
      setClientToken(response.data.access);
      token = response.data.access;
    })
    .catch((error) => {
      console.log(error);
      Alert.alert(error.message);
    });
  return token;
};
export const onLogout = async () => {
  try {
    setClientToken(null);
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const onSignUp = async () => {
  let token;
  await BaseApiKit.post("user/", {
    full_name: full_name,
    username: username,
    email: email,
    weight: weight,
    height: height,
    password: password,
  })
    .then((response) => {
      setClientToken(response.data.access);
      token = response.data.access;
    })
    .catch((error) => console.log(ererror.messageor));
  return token;
};

export default BaseApiKit;
