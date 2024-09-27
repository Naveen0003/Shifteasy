
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Details from './src/screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"  options={{ headerShown: false }}   component={WelcomeScreen} />
        <Stack.Screen name="Login"     options={{ headerShown: false }}  component={LoginScreen} />
        <Stack.Screen name="SignUp"   options={{ headerShown: false }}    component={SignupScreen} />
        <Stack.Screen name="Details"   options={{ headerShown: false }} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
