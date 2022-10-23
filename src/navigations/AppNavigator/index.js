import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../../screens/LandingPage';
import WelcomePage from '../../screens/WelcomePage';
import TabNavigator from './tabNavigator';
import DetailSubPage from '../../screens/DetailSubPage';

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing Page" component={LandingPage}></Stack.Screen>
      <Stack.Screen name="Welcome Page" component={WelcomePage}></Stack.Screen>
      <Stack.Screen name="Tab Page" component={TabNavigator}></Stack.Screen>
      <Stack.Screen
        name="Detail Sub Page"
        component={DetailSubPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
