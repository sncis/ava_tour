import React from 'react';
import { StyleSheet } from 'react-native';
import uuidv1 from "uuid";
import TourDetailsListItem from './TourDetailsListItem';
import { tour1 } from '../data';

const TourDetailsList = (props) => (
  tour1.map(item => (
      <TourDetailsListItem  style={styles.tourDetailListItem}
      goLocationDetails= {props.goToLocation}
      location={item.location} 
      time={item.time}
      recommendedTime={item.recommendedTime} 
      description={item.description}
      nextDestination={item.nextDestination}
      travelTimeToNextDestination={item.travelTimeToNextDestination} 
      key={uuidv1()}/>
  ))
)

export default TourDetailsList;


const styles = StyleSheet.create({
  tourDetailListItem: {
    marginTop: 50,
  }
})