import React from 'react';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Monitoring from './pages/monitoring-menu';
import MonitoringPh from './pages/monitoring-ph';

const AppNavigator = createStackNavigator(
  {
    App: { screen: App },
    Monitoring: { screen: Monitoring },
    MonitoringPh: { screen: MonitoringPh },
  },
  {
    initialRouteName: 'App',
    transitionConfig: getSlideFromRightTransition,
    defaultNavigationOptions: {
      header: null
    },
  }
);

export default createAppContainer(AppNavigator);
