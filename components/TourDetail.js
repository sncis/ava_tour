import React, { Component } from 'react';
import {ScrollView, View, Button, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import TourDetailsList from './TourDetailsList';
import {tour1} from '../data';
import PreviewHeaderImageComponent from './PreviewHeaderImageComponent';
import SelectionOverlay from './SelectionOverlay';

export default class TourDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCarOverlay: false,
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
      <View>
        <ScrollView style={styles.scrollContainer}> 
         <PreviewHeaderImageComponent />
          <View style={styles.timeLocationContainer}>
            <Text style={styles.time}>Time</Text>
            <Text styles={styles.location}>Location</Text>
          </View>
          <TourDetailsList goToLocation={this.props.goToLocationDetails} style={styles.tourDetailsList}/>
        </ScrollView>

        {/* <TouchableOpacity style={styles.bookingButton} title="Book tour" onPress={this.props.goToTourNavigation && this.showCarOverlay}> */}
        <TouchableOpacity style={styles.bookingButton} title="Book tour" onPress={this.showCarOverlay}>

          <Text style={styles.buttonText}>BOOK TOUR</Text>
        </TouchableOpacity>
        {this.state.showCarOverlay && <SelectionOverlay forNo={this.props.goToTourNavigation}/>}

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
  },
  tourDetailsList: {
    marginBottom: 500,
  }

})