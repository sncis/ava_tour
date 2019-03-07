import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import TourOptionsScreen from './screens/TourOptionsScreen';
import TourDetailsScreen from './screens/TourDetailsScreen';
import TourNavigationScreen from './screens/TourNavigationScreen';

 class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  TourOptions: TourOptionsScreen,
  TourDetails: TourDetailsScreen,
  TourNavigation: TourNavigationScreen
})

export default createAppContainer(AppNavigator);

