
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homescreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
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