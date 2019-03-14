import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import dbInstance from '../database/Database';


// require("../assets/images/robot-dev.png")
// uri: image const image = 'https://source.unsplash.com/600x400/?munich';

export default class TourPreviewListItem extends Component {

  onTourSelect(tourName){
    dbInstance.setCurrentRouteName(tourName);
    return this.props.navigateToTourDetails();
  }

  render() {
    return(
      <TouchableOpacity title="" onPress={() => this.onTourSelect(this.props.headline)} style={styles.touchContainer}>   
        <Image source={require("../assets/images/munich.jpg")} style={styles.tourPreviewImage}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.tourHeadline}>{this.props.headline}</Text>
          <Text style={styles.smallTextDuration}>{this.props.duration}</Text>
          <Text style={styles.smallText}>{this.props.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{this.props.rating}</Text>
            <Rating style={styles.star}
              imageSize={20}
              readonly
              startingValue={this.props.ratingNum}
              />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  touchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    marginTop: 7,
    marginLeft:15,
    marginRight:15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    padding: 10,
  },
  tourHeadline: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 0,
  },
  smallText: {
    color: 'black',
    fontWeight: '100',
    fontSize: 12,
  },
  smallTextDuration: {
    color: 'black',
    fontWeight: '100',
    fontSize: 12,
    marginBottom: 10,
  },
  tourPreviewImage: {
    flex: 1,
    overflow: 'hidden',
    width: 5,
    height: 150,
    resizeMode: 'cover',
    overflow: 'hidden'
    
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rating:{
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
    color: 'black',
    fontWeight: '100',
    fontSize: 12
  },
  star: {
    height:10
  }

});
