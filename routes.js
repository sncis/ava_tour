import React from 'react';
import { SwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';

export const Navigation = SwitchNavigator({
  Homescreen: {
    screen: HomeScreen,
  },
  Links: {
    screen: LinksScreen,
  }
});