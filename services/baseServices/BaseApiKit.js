import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

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
async function saveTokenData(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export const onLogin = async (email, password) => {
  await BaseApiKit.post("/auth/knock-knock/", {
    email: email,
    password: password,
  })
    .then((response) => {
      Object.keys(response.data).map(function (key, index) {
        saveTokenData(key, JSON.stringify(response.data[key]));
      });

      setClientToken(response.access);
    })
    .catch((error) => console.log(error));
};
export const onLogout =async ()=>{
  try{
  await SecureStore.deleteItemAsync('access')
  await SecureStore.deleteItemAsync('username')
  await SecureStore.deleteItemAsync('full_name')
  await SecureStore.deleteItemAsync('refresh')
  await SecureStore.deleteItemAsync('weight')
  await SecureStore.deleteItemAsync('height')

  }
  catch(error){
    Alert.alert(error)
  }
}


export default BaseApiKit;
