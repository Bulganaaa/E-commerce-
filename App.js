import React from 'react';
import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';
import Splash from './screens/Splash';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Forgot from './screens/Forgot';
import Sent from './screens/Sent';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Cart from './screens/Cart';
import Categories from './screens/Categories';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ProfileTab') {
            iconName = 'user';
          } else if (route.name === 'NotificationTab') {
            iconName = 'bells';
          } else if (route.name === 'CartTab') {
            iconName = 'shoppingcart';
          }
          return (
            <View style={styles.iconContainer}>
              <Icon name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#8E6CEF',
        tabBarInactiveTintColor: '#000',
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="ProfileTab" component={Profile} />
      <Tab.Screen name="NotificationTab" component={Notification} />
      <Tab.Screen name="CartTab" component={Cart} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Sent" component={Sent} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MainTabs} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 80,
    borderTopWidth: 10,
    borderColor: '#fff',
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});