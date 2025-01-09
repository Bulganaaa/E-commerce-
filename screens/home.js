import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from './profile';
import Notification from './notification';
import Cart from './cart';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#fff' , height:80} }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:()=>{<Text>icon</Text>}
      }} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
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