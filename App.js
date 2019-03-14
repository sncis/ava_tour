import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import TourOptionsScreen from './screens/TourOptionsScreen';
import TourDetailsScreen from './screens/TourDetailsScreen';
import TourNavigationScreen from './screens/TourNavigationScreen';
import LocationDetailsScreen from './screens/LocationDetailsScreen';
import PreferenceSelectionScreen from './screens/PreferenceSelectionScreen';
import PickUpFormScreen from './screens/PickUpFormScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen'

 class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  PreferenceSelection: PreferenceSelectionScreen,
  TourOptions: TourOptionsScreen,
  TourDetails: TourDetailsScreen,
  TourNavigation: TourNavigationScreen,
  LocationDetails: LocationDetailsScreen,
  PickUpForm: PickUpFormScreen,
  Payment: PaymentScreen,
  Conirfmation: ConfirmationScreen,

})

export default createAppContainer(AppNavigator);

