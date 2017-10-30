import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import mainScreen from '../screens/MainScreen';
import detailScreen from '../screens/DetailScreen';

const stackNavigator = StackNavigator({
  Main: {
    screen: mainScreen,
  },
  Detail: {
    screen: detailScreen,
  },
});

const tabNavigator1 = TabNavigator(
  {
    TabItem1: {
      screen: stackNavigator,
      navigationOptions: {
        tabBarLabel: 'Tab 1',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

const drawerNavigator = DrawerNavigator({
  DrawerItem1: {
    screen: stackNavigator,
    navigationOptions: {
      drawer: {
        label: 'FB Login',
      },
    },
  },
  DrawerItem2: {
    screen: tabNavigator1,
    navigationOptions: {
      drawer: {
        label: 'drawer 2',
      },
    },
  },
});

export default drawerNavigator;
