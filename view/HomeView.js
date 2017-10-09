import React, { Component } from 'react';
import {
    Platform,
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default class HomeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                {instructions}
                </Text>
                <Text style={styles.instructions}>
                Current redux state: {this.props.homeState}
                </Text>
                <Button title="change state 1" onPress={this.props.action1}/>
                <Button title="change state 2" onPress={this.props.action2}/>
            </View>
        );
    }
}