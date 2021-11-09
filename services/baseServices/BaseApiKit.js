import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
import { removeItem, setItem } from "../../SecureStore";
import { useAuthorization } from "../../AuthProvider";

let BaseApiKit = axios.create({
  baseURL: "http://10.0.2.2:8000",
  timeout: 10000,
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
  let token
  await BaseApiKit.post("/auth/knock-knock/", {
    email: email,
    password: password,
  })
    .then((response) => {
      setClientToken(response.data.access);
      token = response.data.access
      
    })
    .catch((error) => console.log(error));
    return token
};
export const onLogout = async () => {
  try {
    removeItem;
  } catch (error) {
    Alert.alert(error);
  }
};

export default BaseApiKit;
