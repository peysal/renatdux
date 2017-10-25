/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import rootStore from "./store/root.js";
import HomeContainer from "./containers/HomeContainer.js";
import RootNavigatorView from "./view/RootNavigatorView.js";
import AppView from "./view/AppView.js";

export default class App extends React.Component {
  render() {
    return <AppView />;
  }
}
