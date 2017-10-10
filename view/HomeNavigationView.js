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
                onPress ={ () => navigate('Chat', {user: 'scarlet'})}/>      
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ( {navigation} ) => ({
        title:`chat with: ${navigation.state.params.user}`
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
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