import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Main</Text>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const stackNavigator = StackNavigator({
  Main: {
    screen: DetailScreen,
  },
  Detail: {
    screen: DetailScreen,
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
        label: 'drawer 1',
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
