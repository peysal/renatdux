import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fb Detail Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
