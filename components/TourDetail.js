import React, { Component } from 'react';
import {ScrollView, View, Button, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import TourDetailsList from './TourDetailsList';
import {tour1} from '../data';
import PreviewHeaderImageComponent from './PreviewHeaderImageComponent';


export default class TourDetail extends Component {
  render() {
    return(
      <View>
        <ScrollView style={styles.scrollContainer}> 
         <PreviewHeaderImageComponent />
          <View style={styles.timeLocationContainer}>
            <Text style={styles.time}>Time</Text>
            <Text styles={styles.location}>Location</Text>
          </View>
          
          <TourDetailsList goToLocation={this.props.goToLocationDetails}/>
        </ScrollView>

        <TouchableOpacity style={styles.bookingButton} title="Book tour" onPress={this.props.goToTourNavigation}>
          <Text style={styles.buttonText}>BOOK TOUR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  scrollContainer: {
    padding:15,
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
  bookingButton: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height:50,
    backgroundColor: 'white',
    fontWeight: 'bold',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 2,
    borderRadius: 5,
    elevation:10,
    paddingTop: 15,

  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
})