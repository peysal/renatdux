import React from 'react';
import { Text, View} from 'react-native';
import { TabNavigator } from "react-navigation";

class RecentChatScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of recent tabs </Text>
            </View>
        )
    }
}

class AllContactScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
            </View>
        )
    }
}

const TabNavigation = TabNavigator({
    Recent: { screen : RecentChatScreen},
    All: { screen : AllContactScreen }
});

export default TabNavigation;