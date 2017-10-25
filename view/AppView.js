import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator} from 'react-navigation';

class MainScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Main</Text>
            </View> 
        )
    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Detail</Text>
            </View> 
        )
    }
}

const stackNavigator = StackNavigator({
    Main: {
        screen: DetailScreen
    },
    Detail: {
        screen: DetailScreen
    }
});

const tabNavigator = TabNavigator({
    TabItem1: {
        screen: stackNavigator,
        navigationOptions: {
            tabBarLabel: 'Tab 1'
        } 
    }
});

const drawerNavigator = DrawerNavigator({
    DrawerItem1: {
        screen: tabNavigator,
        navigationOptions: {
            drawer: {
                label: 'drawer 1'
            }
        }
    }
});

export default drawerNavigator;