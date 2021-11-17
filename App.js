// import { LinearGradient } from "expo-linear-gradient";
// import * as React from "react";
// import { StyleSheet } from "react-native";
// import AuthNavigation from "./AuthNavigation";
// import { AuthProvider } from "./AuthProvider";

// export default function App() {
//   return (
//     <AuthProvider>
//       <AuthNavigation />
//     </AuthProvider>
//   );
// }
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
// });
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AuthNavigation from "./AuthNavigation";
import { initialLoginState } from "./AuthProvider";
import { authContext } from "./AuthNavigation";
import { AuthContext } from "./components/context";
const App = () => {

  return (
      <AuthNavigation />
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    flex: 1,
  },
});
