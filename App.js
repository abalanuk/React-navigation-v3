/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const AppNavigator = createStackNavigator(
    {
      Login: LoginScreen,
      Home: HomeScreen,
    },
    {
      initialRouteName: "Login"
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
};