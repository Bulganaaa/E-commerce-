import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard 
} from "react-native";
import MyButton from '../components/Mybutton';

export default function Signin({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <View style={styles.container1}>
          {/* Email Address Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"#ddd"}
          />
          
          {/* Submit Button */}
          <MyButton
            title="Continue"
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
        <View style={{marginTop: 20, flexDirection: "row", marginLeft: 20}}>
          <Text>Forgot password?</Text>
          <Text style={{fontWeight:'bold'}} onPress={() => navigation.navigate("Signup")}> Reset</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sidebuttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    marginTop: 70,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F4F4F4",
    height: 56,
    padding: 10,
    width: 342,
    color: "black",
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#8E6CEF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 10,
    width: 344,
    height: 49,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  shop: {
    width: 200,
    height: 200,
  },
});