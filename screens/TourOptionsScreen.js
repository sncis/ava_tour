import React, { Component }from 'react';
import TourPreviewList from '../components/TourPreviewList';
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import AvatarComponent from '../components/AvatarComponent';
import store from '../store/store/store';

export default class TourOptionsScreen extends Component {
  render() {
    // console.log(store.getState())
    return(
      <ScrollView >
        <AvatarComponent text='Here our suggestions for your amazing Tour, please click one.' />
        <TourPreviewList goToTourDetails={() => this.props.navigation.navigate("TourDetails")}/>
      </ScrollView>
    )
  }

}

