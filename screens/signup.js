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
import BackButton from '../components/Backbutton';


export default function Signup({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        <Text style={styles.text}>Create Account</Text>
        
        <View style={styles.container1}>
          {/* Email Address Input */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor={"#ddd"}
          />
                    {/* Email Address Input */}
                    <TextInput
            style={styles.input}
            placeholder="Last Name"
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
            placeholder="Password"
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
    marginTop: 100,
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
        borderRadius: 30,
        height: 49,
        width: 344,
        backgroundColor: "#8E6CEF",
    },
});
