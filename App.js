import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Home/>
  );
}

