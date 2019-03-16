import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const TourDetailsListItem = (props) => (
  <View style={styles.itemContainer}>
    
    <View style={styles.timelineContainer}>
        <Text style={styles.time}>{props.time}</Text>
    </View>

    <View style={styles.locationContainer}>

      <View style={styles.locationDescriptionContainer}>
        <TouchableOpacity onPress={props.goLocationDetails}>
          <Text style={styles.locationHeadline}>{props.location}</Text>
        </TouchableOpacity>
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
    // borderTopWidth:1,
    // borderTopColor: 'black',
    marginTop: 20,    
  },
  timelineContainer: {
    color: 'red',
    fontWeight: '100',
    fontSize: 12,
    flex:1,
    alignItems: 'center',
  },
  imageContainer: {
    // flex:1,
    // height:5,

    // width:5,
  },

  time: {

  },
  timeline: {

  },
  locationContainer: {
    flex: 2,
  
  },
  locationHeadline: {
    fontWeight: 'bold',
    fontSize: 16,


  },
  recommendedTime: {
    marginBottom: 10,
  },
  description: {
    color: 'grey'

  },
  toNextDestination: {
    marginTop: 20,
    marginBottom: 5,

  },
  drivingTo: {
    fontStyle: 'italic',
    color: 'black'

  },
  travelTime: {
    color: 'grey'

  },
});

export default TourDetailsListItem;