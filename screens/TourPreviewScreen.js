import React, {Component } from 'react';
import { View } from 'react-native';
import PreviewComponent from '../components/PreviewComponent';


export default class TourPreviewScreen extends Component {
  render(){
    return(
      <PreviewComponent navigateToDetails={() => this.props.navigation.navigate("TourDetailsOverview")}/>
    )
  }
}