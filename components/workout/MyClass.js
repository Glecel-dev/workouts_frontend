import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
    };
  }

  inputClass = (index) => {
    return (
      <>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.addValues({ 'sets': text }, index)}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.addValues({ 'reps': text }, index)}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.addValues({ 'weight': text }, index)}
        />
      </>
    );
  };
  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(this.inputClass(index));
    this.setState({ textInput });
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput, inputData });
  };

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          //   console.log(text);
          if (text.sets) {
            element.text["sets"] = text.sets;
          } else if (text.reps) {
            element.text["reps"] = text.reps;
          } else {
            element.text["weight"] = text.weight;
          }
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({
        'text':text,
        'index': index,
      });
      this.setState({
        inputData: dataArray,
      });
    }
  };

  //function to console the output
  getValues = () => {
    console.log("Data", this.state.inputData);
  };

  render() {
    return (
      <View>
        <View style={styles.row}>
          <View style={{ margin: 10 }}>
            <Button
              title="Add"
              onPress={() => this.addTextInput(this.state.textInput.length)}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="Remove" onPress={() => this.removeTextInput()} />
          </View>
        </View>
        <Button title="Get Values" onPress={() => this.getValues()} />

        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            height: 400,
          }}
        >
          {this.state.textInput.map((value) => {
            return value;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonView: {
    flexDirection: "row",
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default MyClass;
