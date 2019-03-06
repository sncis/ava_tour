import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import TourOptionsScreen from './screens/TourOptionsScreen';
import TourDetailsScreen from './screens/TourDetailsScreen';

 class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  TourOptions: TourOptionsScreen,
  TourDetails: TourDetailsScreen,
})

export default createAppContainer(AppNavigator);

