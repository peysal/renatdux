import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


class RecentChatScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of recent tabs </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'scarlet', pwd: 'recent 1' })}
                    title="Chat with scarlet"/>
            </View>
        )
    }
}

class AllContactScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'scarlet', pwd: 'contacts 1' })}
                    title="Chat with scarlet"/>
            </View>
        )
    }
}

const TabNavigation = TabNavigator({
    Recent: { screen : RecentChatScreen},
    All: { screen : AllContactScreen }
});

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
                onPress ={ () => navigate('Chat', {user: 'scarlet', pwd: 'ayam'})}/>      
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ( {navigation} ) => ({
        title:`chat with: ${navigation.state.params.user}`
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

const HomeNavigation = StackNavigator({
    Home: { 
        screen: TabNavigation,
        navigationOptions: {
            title: 'My Chats',
          }
    },
    Chat: { screen: ChatScreen}
});

export default class RootNavigationView extends React.Component {
    render() {
        return (    
            <HomeNavigation />
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