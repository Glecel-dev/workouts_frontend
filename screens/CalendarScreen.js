import React ,{useState}from "react";
import { StyleSheet, View } from "react-native";
import { Calendar,CalendarList,Agenda } from "react-native-calendars";

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  const theme = {
    backgroundColor: "blue",
  };
  return (
    <View style={styles.wrapper}>
      <Agenda
    //   markedDates={selectedDate}
        minDate={'2012-05-10'}
        maxDate={"2050-05-30"}

        theme={{
          backgroundColor: "transparent",
          calendarBackground: "transparent",
          
          selectedDayBackgroundColor: "#1ABC9C",
          selectedDayTextColor: "#1ABC9C",
          todayTextColor: "white",

          monthTextColor: '#1ABC9C',
          dotColor: "#1ABC9C",
          textMonthFontSize: 20,
          selectedDotColor: '#1ABC9C',


        }}
        // onDayPress={(day) => {
        //   setSelectedDate({day:{marked:true, dotColor:'#1ABC9C'}})
        //   console.log(day.dateString)
        //   console.log(selectedDate)
        // }}

      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 190,
    backgroundColor: "transparent",
    width: "100%",
    height:'100%'
  },
});
export default CalendarScreen;
