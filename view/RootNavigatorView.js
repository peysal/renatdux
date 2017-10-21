import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TabNavigatorView from './TabNavigatorView.js';

class ChatScreen extends React.Component {
    static navigationOptions = ( {navigation} ) => ({
        title:`chat with: ${navigation.state.params.user}`,
        headerRight: <Button title='info'/>
    });
    render() {
        const { user, pwd } = this.props.navigation.state.params;
        return (
            <View>
                <Text>Chat with {user} with pwd: {pwd}</Text>
            </View>
        );
    }
}

const RootNavigator = StackNavigator({
    Home: { 
        screen: TabNavigatorView,
        navigationOptions: {
            title: 'My Chats',
          }
    },
    Chat: { screen: ChatScreen}
});

export default class RootNavigatorView extends React.Component {
    render() {
        return (    
            <RootNavigator />
        ) 
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