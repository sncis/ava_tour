import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const TourDetailsListItem = (props) => (
  <View>
    <View style={styles.timelineContainer}>
      <Text style={styles.time}>{props.time}</Text>
      <Image style={styles.timelineArrow}></Image>
    </View>
    <View style={styles.locationContainer}>
      <Text style={styles.locationHeadline}>{props.location}</Text>
      <Text style={styles.recommendetTime}>{props.recommendedTime}</Text>
    </View>
    <View style={styles.toNextDestination}>
      <Text style={styles.drivingTo}>{props.nextDestination}</Text>
      <Text style={styles.travelTime}>{props.travelTimeToNextDestination}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  timelineContainer: {
    color: 'red',
    backgroundColor: 'green',
    fontWeight: '100',
    fontSize: 12,
  },
  time: {

  },
  timeline: {

  },
  locationContainer: {
  
  },
  locationHeadline: {

  },
  recommendedTime: {

  },
  toNextDestination: {

  },
  drivingTo: {

  },
  travelTime: {

  },
});

export default TourDetailsListItem;