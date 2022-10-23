import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ACDetailPage from '../../screens/ACDetailPage';
import MainPage from '../../screens/MainPage';

const Stack = createStackNavigator();
export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MainPage}></Stack.Screen>
      <Stack.Screen name="AC Detail" component={ACDetailPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
