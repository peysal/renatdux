/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import rootStore from './store/root.js';
import HomeContainer from './containers/HomeContainer.js';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={rootStore}>
        <HomeContainer />
      </Provider>
    );
  }
}


