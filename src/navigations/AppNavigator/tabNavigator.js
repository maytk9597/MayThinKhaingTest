import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import TabBar from '../../components/tabBar';
import MainPage from '../../screens/MainPage';
import SubPage from '../../screens/SubPage';
import {BLACK} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddPage from '../../screens/AddPage';
import GraphPage from '../../screens/GraphPage';
import ProfilePage from '../../screens/ProfilePage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ACDetailPage from '../../screens/ACDetailPage';
import HomeStackNavigator from './homeStackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Main'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Main" component={HomeStackNavigator} />
      <Tab.Screen
        name="Sub"
        component={SubPage}
        options={{tabBarStyle: {display: 'none'}}}
      />
      <Tab.Screen name="Add" component={AddPage} />
      <Tab.Screen name="Graph" component={GraphPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}
