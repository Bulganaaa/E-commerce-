import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MyButton from "../components/Mybutton";

export default function About({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tell us About yourself</Text>
      <Text style={{marginTop:30, marginBottom:10, marginLeft:20}}>Who do you shop for?</Text>
      <View style={styles.buttons}>
      <MyButton
        title="Myself"
        style={styles.button}
        textStyle={styles.buttonText}/>
      <MyButton title="Women"
      style={styles.button}
      textStyle={styles.buttonText}/>
      </View>
      <Text style={{marginLeft:20,marginTop:30}}>How Old are you?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  button:{
    margin: 10,   
    backgroundColor: "#8E6CEF",
    borderRadius: 30,
    width: 161,
    height: 52,
  }
});