import React, { Component } from 'react';
import {ScrollView, View, Button, Text} from 'react-native';
import TourDetailsList from './TourDetailsList';


export default class TourDetail extends Component {
  render() {
    return(
      <View>
        <ScrollView> 
          <TourDetailsList />
        </ScrollView>
        <Button title="Book tour" onPress={this.props.goToTourNavigation} />
      </View>
    )
  }
}