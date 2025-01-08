import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Keyboard 
} from "react-native";


export default function Signup({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Signup</Text>



        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor={"#ddd"}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor={"#ddd"}
          secureTextEntry
        />

        {/* Submit Button */}
        <MyButton
        title="Click Me"
        onPress={() => alert('Button Pressed!')}
        style={styles.customButton}
        textStyle={styles.customText}
      />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: 200,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    fontSize: 12,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    width: 200,
    marginBottom: 200,
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
