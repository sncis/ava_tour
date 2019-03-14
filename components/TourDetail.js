import React, { Component } from 'react';
import {ScrollView, View, Button, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import TourDetailsList from './TourDetailsList';
import PreviewHeaderImageComponent from './PreviewHeaderImageComponent';
import SelectionOverlay from './SelectionOverlay';
import dbInstance from '../database/Database';
import MainButton from './MainButton';

export default class TourDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCarOverlay: false,
      currentTourName: dbInstance.getCurrentRouteName(),
    }
  }

  showCarOverlay = () => {
    if(!this.state.showCarOverlay){
      this.setState({
        showCarOverlay: true
      })
    }else{
      this.setState({
        showCarOverlay: false
      })
    }
  }; 

  render() {
    return(
      <View style={styles.page}>
        <ScrollView style={styles.scrollContainer}> 
        <View> 
         <PreviewHeaderImageComponent tourName={this.state.currentTourName} />
          <View style={styles.timeLocationContainer}>
            <Text style={styles.time}>Time</Text>
            <Text styles={styles.location}>Location</Text>
          </View>
          <TourDetailsList goToLocation={this.props.goToLocationDetails} style={styles.tourDetailsList} tourName={this.state.currentTourName} />
          </View>
        </ScrollView>

        {/* <TouchableOpacity title="Book tour" onPress={this.props.goToPickUpForm}> */}
        <View style={styles.button}>
          <MainButton text='Book Tour' pressFunction={this.props.goToPickUpForm}/>


        </View>
        {/* <TouchableOpacity style={styles.bookingButton} title="Book tour" onPress={this.showCarOverlay}> */}

        {/* </TouchableOpacity > */}
        {/* {this.state.showCarOverlay && <SelectionOverlay forNo={this.props.goToTourNavigation}/>} */}

      </View>
    )
  }
}

const styles= StyleSheet.create({
  page: {
    position: 'relative',
  },
  scrollContainer: {
    padding:15,
    marginBottom: 100,
    backgroundColor: 'white',

  },
 
  timeLocationContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop:20,
  },
  time: {
    flex: 1,
  },
  loaction: {
    flex: 2,
  },
  button: {
    position: 'absolute',
    bottom: 70, 
    width: Dimensions.get('window').width,
    height: 50,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
  },
  
  tourDetailsList: {
    // marginBottom: 200,
  }

})