import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import MainButton from '../components/MainButton';
import TourPreviewHeader from '../components/TourPreviewHeader';

export default class TourDetailsOverviewScreen extends Component {
  render(){
    return(
      <View >
      <ScrollView >
        <TourPreviewHeader navigateToLocationDetails={()=> this.props.navigation.navigate('LocationDetails')}/>
        <View style={{paddingBottom: 100}}>
          <MainButton pressFunction={() => this.props.navigation.navigate('Payment')} text="BOOK THIS TOUR" />
        </View>
      </ScrollView>
      </View>
     
    )
  }
}