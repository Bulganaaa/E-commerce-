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


export default function Signup({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        
        <View style={styles.container1}>
          {/* Email Address Input */}
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={"#ddd"}
          />
                    {/* Email Address Input */}
                    <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={"#ddd"}
          />
                    {/* Email Address Input */}
                    <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={"#ddd"}
          />
                    {/* Email Address Input */}
                    <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={"#ddd"}
          />
          </View>
         <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                    {/* Submit Button */}
        <MyButton
        title="Continue"
        onPress={() => navigation.navigate("Login")}
        style={styles.customButton}
        textStyle={styles.customText}
      />
         </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 70,
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#F4F4F4",
    height: 56,
    padding: 10,
    width: 342,
    color: "black",
    borderRadius: 4,
    fontSize: 16,
  },
  container1: {
    alignItems: "center",
  },    
    customButton: {

        borderRadius: 20,
        height: 49,
        width: 344,
    },
});
