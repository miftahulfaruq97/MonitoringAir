/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import AppNavigator from './Router';

class App extends Component {
    render() {
      return (
           <AppNavigator/>
      );
    }
}

AppRegistry.registerComponent(appName, () => App);

