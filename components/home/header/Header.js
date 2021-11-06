import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Header() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  let [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    r;
  } else {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerUpText}>Welcome</Text>
            <Text style={styles.headerText}>Gledi</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://i.pinimg.com/280x280_RS/b0/40/92/b04092899c323bb1775837cc9db850f3.jpg",
              }}
              style={styles.profile}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Your workout summary</Text>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={selectedMonth}
              placeholder={{
                label: "Select a month...",
                value: selectedMonth,
              }}
              onValueChange={(value, index) => {
                setSelectedMonth(value);
                console.log(value, index);
              }}
              items={[
                { label: "January", value: "january" },
                { label: "February", value: "february" },
                { label: "March", value: "march" },
                { label: "April", value: "april" },
                { label: "May", value: "may" },
                { label: "June", value: "june" },
                { label: "July", value: "july" },
                { label: "August", value: "august" },
                { label: "September", value: "september" },
                { label: "October", value: "october" },
                { label: "November", value: "november" },
                { label: "December", value: "deccember" },
              ]}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(9,7,25,0.4)",
    borderRadius: 13,
    paddingBottom: 30,
    paddingTop: 30,
    position: "absolute",
    width: "100%",
    zIndex: -10,
  },

  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  summaryContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 0,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  headerUpText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 23,
    margin: 0,
    padding: 0,
  },
  headerText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
    margin: 0,
    padding: 0,
  },

  summaryText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 14,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
  },
  pickerContainer: {
    width: 150,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
