import React, { Component }from 'react';
import TourPreviewList from '../components/tourPreviewList';

export default class TourOptionsScreen extends Component {
  render() {
    return(
        <TourPreviewList goToTourDetails={() => this.props.navigation.navigate("TourDetails")}/>
    )
  }

}