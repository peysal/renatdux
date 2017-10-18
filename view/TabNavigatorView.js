import React from 'react';
import { Text, View, Button} from 'react-native';
import { TabNavigator } from "react-navigation";

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

class TabNavigatorView extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigation navigation={this.props.navigation}/>
            </View>
        );
    }
}
TabNavigatorView.router = TabNavigation.router;

export default TabNavigatorView;