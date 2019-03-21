import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from "react-redux";
import store from './store/store/store';

import HomeScreen from "./screens/HomeScreen";
import TourOptionsScreen from './screens/TourOptionsScreen';
import TourDetailsScreen from './screens/TourDetailsScreen';
import TourNavigationScreen from './screens/TourNavigationScreen';
import LocationDetailsScreen from './screens/LocationDetailsScreen';
import PreferenceSelectionScreen from './screens/PreferenceSelectionScreen';
import PickUpFormScreen from './screens/PickUpFormScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import TourPreviewScreen from './screens/TourPreviewScreen';
import TourDetailsOverviewScreen from './screens/TourDetailsOverviewScreen';

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
  TourPreview: TourPreviewScreen,
  TourDetailsOverview: TourDetailsOverviewScreen

})

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}