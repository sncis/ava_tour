import React from 'react';
import { ScrollView, Button } from 'react-native';
import uuidv1 from "uuid";
import TourDetailsListItem from './TourDetailsListItem';
import { tour1 } from '../data';

const TourDetailsList = (props) => (
  tour1.map(item => (
      <TourDetailsListItem 
      location={item.location} 
      time={item.time}
      recommendedTime={item.recommendedTime} 
      nextDestination={item.nextDestination}
      travelTimeToNextDestination={item.travelTimeToNextDestination} 
      key={uuidv1()}/>
  ))
)

export default TourDetailsList;