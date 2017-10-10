import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View> 
                <Text>Hello, chat app!</Text> 
                <Button title="chat with scarlet johansson" 
                onPress ={()=> navigate('Chat')}/>      
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with scarlet johansson'
    }
    render() {
        return <Text>Chat</Text>
    }
}

const HomeNavigation = StackNavigator({
    Home: { screen: HomeScreen},
    Chat: { screen: ChatScreen}
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