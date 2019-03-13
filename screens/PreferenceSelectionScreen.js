import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PreferenceSelection from '../components/PreferenceSelection';


export default class PreferenceSelectionScreen extends Component {
 
  render(){
    return(
      <PreferenceSelection navigateToResults={() => this.props.navigation.navigate('TourOptions')}/>
    )
  }
};

