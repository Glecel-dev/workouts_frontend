import * as React from "react";
import { View, Text,StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";


export default function App() {

  return (
      <LinearGradient
      // Button Linear Gradient
      colors={['#141e30', '#0f0c29','#0f0c29']}
      style={styles.background}>
        <LoginScreen/>
    </LinearGradient>

    );
  
};
const styles = StyleSheet.create({

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
  },
});
