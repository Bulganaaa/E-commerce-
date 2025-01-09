import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TouchableOpacity 
} from "react-native";
import MyButton from '../components/Mybutton';

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <View style={styles.container1}>
          {/* Email Address Input */}
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={"#ddd"}
          />
          
          {/* Submit Button */}
          <MyButton
            title="Continue"
            onPress={() => navigation.push("Signin")}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
        <View style={{marginTop: 20, flexDirection: "row", marginLeft: 20}}>
          <Text>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <Text style={{fontWeight:'bold'}}> Create one</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 70 }}>
          <MyButton
            title="Continue with Apple"
            onPress={() => navigation.navigate("Home")}
            style={styles.sidebutton}
            textStyle={styles.sidebuttonText}
            icon="apple"
          />
          <MyButton
            title="Continue with Google"
            onPress={() => navigation.navigate("Home")}
            style={styles.sidebutton}
            textStyle={styles.sidebuttonText}
            icon="google"
          />
          <MyButton
            title="Continue with Facebook"
            onPress={() => navigation.navigate("Home")}
            style={styles.sidebutton}
            textStyle={styles.sidebuttonText}
            icon="facebook"
          />
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
  sidebutton: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 10,
    width: 344,
    height: 49,
  },
  text: {
    marginTop: 100,
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