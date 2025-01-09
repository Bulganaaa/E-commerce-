import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import Login from './screens/login';
import Splash from './screens/splash';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Forgot from './screens/forgot';
import Sent from './screens/sent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Sent" component={Sent} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}