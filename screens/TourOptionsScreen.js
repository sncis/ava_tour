import React, { Component }from 'react';
import TourPreviewList from '../components/TourPreviewList';
import { ScrollView } from 'react-native';

export default class TourOptionsScreen extends Component {
  render() {
    return(
      <ScrollView>
          <TourPreviewList goToTourDetails={() => this.props.navigation.navigate("TourDetails")}/>
      </ScrollView>
    )
  }

}