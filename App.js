import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import Login from './screens/login';
import Splash from './screens/splash';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Forgot from './screens/forgot';
import Sent from './screens/sent';
import Profile from './screens/profile';
import Notification from './screens/notification';
import Cart from './screens/cart';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: '#fff', height: 80 } }}>
      <Tab.Screen 
        name="HomeTab" 
        component={Home} 
        options={{  
          tabBarIcon: ({ focused }) => <Icon name="home" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="user" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="NotificationTab" 
        component={Notification} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="bells" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
      <Tab.Screen 
        name="CartTab" 
        component={Cart} 
        options={{
          tabBarIcon: ({ focused }) => <Icon name="shoppingcart" size={25} color={focused ? "#8E6CEF" : "#000"} />
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Sent" component={Sent} />
        <Stack.Screen name="Home" component={MainTabs} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}