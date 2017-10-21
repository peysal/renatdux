import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TabNavigatorView from './TabNavigatorView.js';

class ChatScreen extends React.Component {
    static navigationOptions = ( {navigation} ) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info`: `Chat with ${user}`,
            headerRight: (
            <Button 
            title={ isInfo ? 'Done' : `${user}'s info`}
            onPress={()=>(setParams({ mode: isInfo ? 'none' : 'info'}))}
            />
        )
        };
    };
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