import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const TourDetailsListItem = (props) => (
  <View style={styles.itemContainer}>
    
    <View style={styles.timelineContainer}>
        <Text style={styles.time}>{props.time}</Text>
        <Image style={styles.timelineArrow} source={require("../assets/images/arrowDown.png")} />
    </View>

    <View style={styles.locationContainer}>

      <View style={styles.LocationDescriptionContainer}>
        <Text style={styles.locationHeadline}>{props.location}</Text>
        <Text style={styles.recommendetTime}>{props.recommendedTime}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      
      
      <View style={styles.toNextDestination}>
        <Text style={styles.drivingTo}>{props.nextDestination}</Text>
        <Text style={styles.travelTime}>{props.travelTimeToNextDestination}</Text>
      </View> 

    </View>
   
  </View>
)

const styles = StyleSheet.create({
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    

  },
  timelineContainer: {
    color: 'red',
    fontWeight: '100',
    fontSize: 12,
    flex:1,
    alignItems: 'center',
  },
  timeLineArrow: {
    height:10,
    width:10,
  },

  time: {

  },
  timeline: {

  },
  locationContainer: {
    flex: 2,
  
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