import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomPicker from "../components/Mypicker";
import MyButton from "../components/Mybutton";

export default function About({ navigation }) {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);

  const ageRanges = [
    { label: "Select Age Range", value: "" },
    { label: "18-24", value: "18-24" },
    { label: "25-34", value: "25-34" },
    { label: "35-44", value: "35-44" },
    { label: "45-54", value: "45-54" },
    { label: "55-64", value: "55-64" },
    { label: "65+", value: "65+" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tell us About yourself</Text>
      <Text style={{ marginTop: 30, marginBottom: 10, marginLeft: 20 }}>Who do you shop for?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedGender === "Men" ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setSelectedGender("Men")}
        >
          <Text style={styles.buttonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedGender === "Women" ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setSelectedGender("Women")}
        >
          <Text style={styles.buttonText}>Women</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginLeft: 20, marginTop: 30 }}>How Old are you?</Text>
      <CustomPicker
        selectedValue={selectedAge}
        onValueChange={(itemValue) => setSelectedAge(itemValue)}
        items={ageRanges}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginBottom: 30}}>
      <MyButton 
      title= "Finish"
      onPress={() => navigation.navigate("Home")}
      style={styles.buttonfinish}
      textStyle={styles.buttonTextfinish}
      />
      </View>
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
  button: {
    margin: 10,
    borderRadius: 30,
    width: 161,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8E6CEF"
  },
  selectedButton: {
    backgroundColor: "#8E6CEF",
  },
  unselectedButton: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  pickerContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerItem: {
    color: 'black', 
    fontSize: 16,
  },
  buttonfinish: {
    borderRadius: 30,
    height: 52  ,
    width: 342,
    backgroundColor: "#8E6CEF",
  },
  buttonTextfinish: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});