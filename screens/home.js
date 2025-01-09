import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from './profile';
import Notification from './notification';
import Cart from './cart';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: '#fff', height: 80 } }}>
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{  
          tabBarIcon: ({ focused }) => <Icon name="home" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="user" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="Notification" 
        component={Notification} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="bells" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="shoppingcart" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgcontainer}>
          <Image 
            source={require('../assets/user.png')} 
            style={styles.image} 
            onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)} // Log error if image fails to load
          />
        </View>
        <View style={styles.imgcontainer}>
          <Image 
            source={require('../assets/cart.png')} 
            style={styles.image} 
            onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)} // Log error if image fails to load
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search1" size={20} color="#000" style={styles.searchIcon} />
        <TextInput 
          style={styles.input} 
          placeholder="Search"
          placeholderTextColor={"#000"}
        />
      </View>
      <View style={styles.categories}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Categories</Text>
        <Text>See All</Text>
      </View>
      <Text>End categoriud</Text>
      <View style={styles.categories}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Top Selling</Text>
        <Text>See All</Text>
      </View>    
      <Text>End baahan baraanuud</Text>
      <View style={styles.categories}>
        <Text style={{fontSize:20, fontWeight: 'bold', color:'#8E6CEF'}}>New In</Text>
        <Text>See All</Text>
      </View>
      <Text>End bas baahan baraanuud</Text>
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
  },
  header: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  imgcontainer: {
    borderRadius: 30,
    backgroundColor: "#ddd",
  },
  searchContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 342,
    marginVertical: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
});