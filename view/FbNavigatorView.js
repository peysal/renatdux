import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import mainScreen from '../screens/fb-login/MainScreen';
import detailScreen from '../screens/fb-login/DetailScreen';

const fbStackNavigator = StackNavigator({
  Main: {
    screen: mainScreen,
  },
  Detail: {
    screen: detailScreen,
  },
});

export default fbStackNavigator;
