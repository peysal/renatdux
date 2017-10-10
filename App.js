/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import rootStore from './store/root.js';
import HomeContainer from './containers/HomeContainer.js';
import HomeNavigationView from './view/HomeNavigationView.js';
import TabNavigationView from './view/TabNavigationView.js';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={rootStore}>
        <TabNavigationView />
      </Provider>
    );
  }
}