
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Details from './src/screens/Details';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import BestSelling from './src/components/bestSellingProducts';
import ProductDetails from './src/screens/ProductDetails';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"  options={{ headerShown: false }}   component={WelcomeScreen} />
        <Stack.Screen name="Login"     options={{ headerShown: false }}  component={LoginScreen} />
        <Stack.Screen name="SignUp"   options={{ headerShown: false }}    component={SignupScreen} />
        <Stack.Screen name="Details"   options={{ headerShown: false }} component={Details} />
        <Stack.Screen name="Cart"  options={{ headerShown: false }} component={CartScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} /> 
        <Stack.Screen name="BestSelling" component={BestSelling} />
        <Stack.Screen name="ProductDetails"  options={{ headerShown: false }} component={ProductDetails} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
