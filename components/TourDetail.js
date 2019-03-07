import React, { Component } from 'react';
import {ScrollView, View, Button, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import TourDetailsList from './TourDetailsList';
import {tour1} from '../data';


export default class TourDetail extends Component {
  render() {
    return(
      <View>
        <ScrollView style={styles.scrollContainer}> 
          <View style={styles.headerContainer}>
            <Text style={styles.headline}>{tour1[0].headline}</Text>
            <View style={styles.imageContainer}>
            <Image style={styles.tourHeaderImage} source={require("../assets/images/munich.jpg")} />
            </View>
          </View>
          <TourDetailsList />
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
  headerContainer: {
    marginBottom:20,
  },
  headline: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
    marginLeft:5,
  },
  imageContainer: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 2,
    borderRadius: 5,
    elevation:10,
  },
  tourHeaderImage: {
    width: Dimensions.get('window').width - 30,
    height: 200,
    borderRadius: 5,
  },
  bookingButton: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height:50,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  }
})