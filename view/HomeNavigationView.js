import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigrationOptions = {
        title: 'Welcome'
    }
    render() {
        return <Text>Hello, Navigation!</Text>
    }
}

const HomeNavigation = StackNavigator({
    Home: { screen: HomeScreen}
});

export default class HomeNavigationView extends React.Component {
    render() {
        return <HomeNavigation />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});