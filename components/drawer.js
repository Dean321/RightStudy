import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Indicating from './indicating';
import LogOut from './logout';
import Profile from './profile';
import BarCodeScan from './barcodescan';
import Quiz from './quiz';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Indicating Screen">
      <Drawer.Screen name="Indicating Screen" component={Indicating} />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Quiz Taking" component={Quiz} />
      <Drawer.Screen name="Bar Code Scanning" component={BarCodeScan} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
