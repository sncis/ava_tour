import React, { Component } from 'react';
import { StyleSheet , View, ScrollView, Dimensions} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import PreferenceSelection from '../components/PreferenceSelection';


export default class PreferenceSelectionScreen extends Component {
 
  render(){
    return(
      <View style={styles.pageContainer}>
        <ScrollView>
          <PreferenceSelection navigateToResults={() => this.props.navigation.navigate('TourOptions')} />
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  pageContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  
})