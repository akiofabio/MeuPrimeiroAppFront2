import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
import { ForgotPassword } from '../screens/forgotPassword';
import { ForgotPasswordConfirm } from '../screens/forgotPasswordConfirm';
import { Register } from '../screens/register';
import { RegisterPersonalData } from '../screens/registerPersonalData';
import { RegisterAdress } from '../screens/registerAdress';
import { RegisterPerfilImage } from '../screens/registerPerfilImage';
import { RegisterConfirm } from '../screens/registerConfirm';
const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordConfirm" component={ForgotPasswordConfirm} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterPersonalData" component={RegisterPersonalData} />
      <Stack.Screen name="RegisterAdress" component={RegisterAdress} />
      <Stack.Screen name="RegisterPerfilImage" component={RegisterPerfilImage} />
      <Stack.Screen name="RegisterConfirm" component={RegisterConfirm} />
    </Stack.Navigator>
  );
}