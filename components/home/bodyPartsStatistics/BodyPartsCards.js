import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'


const BodyPartsCards = () => {
    const data1 = [
        { x: -2, y: 1 },
        { x: -1, y: 0 },
        { x: 8, y: 13 },
        { x: 9, y: 11.5 },
        { x: 10, y: 12 }
      ]

  let [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.wrapper}>
        <View style={styles.upperTextContainer}>
          <Text style={styles.graphicBodyText}>Chest</Text>
          <Text style={styles.graphicMonthText}>November</Text>
        </View>
        <Divider width={1} orientation="horizontal" />
        <Chart
        disableGestures={true}
            style={{ height: 200, width: '100%', backgroundColor: '#141e30' }}
            xDomain={{ min: -2, max: 10 }}
            yDomain={{ min: -2, max: 20 }}
            padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
            >
            <VerticalAxis theme ={{grid:{visible:false},axis:{visible:false}}} tickValues={[0, 4, 8, 12, 16, 20]} />
            <HorizontalAxis theme ={{grid:{visible:false},axis:{visible:false}}} tickCount={3} />
            <Line data={data1} smoothing="none" theme={{ stroke: { color: '#1ABC9C', width: 1,  } }} />
        </Chart>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    padding: 5,
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#141e30",
  },
  upperTextContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 14,
    flexDirection: "row",
  },
  graphicBodyText: {
    color: "white",
    fontFamily:'Poppins',
    fontWeight:'700',
    fontSize:14
  },
  graphicMonthText: {
    color: "white",
    fontFamily:'Poppins',
    fontWeight:'500',
    fontSize:14

  },
});

export default BodyPartsCards;
