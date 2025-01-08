import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { useNavigation } from '@react-navigation/native';

export default function About({navigation}) {
//   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aboutscreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});