import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default class TourPreviewListItem extends Component {

  render() {
    return(
      <View style={styles.viewContainer}>   
      <Button title="tours" onPress={this.props.nextProp} />
        <Image source={require("../assets/images/robot-dev.png")}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.tourHeadline}>{this.props.headline}</Text>
          <Text style={styles.smallText}>{this.props.duration}</Text>
          <Text style={styles.smallText}>{this.props.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{this.props.rating}</Text>
          </View>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgrey',
    margin: 20,
    shadowColor: 'lightgrey',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textContainer: {
    flex: 1,
    flexWrap: 'wrap',
    padding: 10,
  },
  tourHeadline: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  smallText: {
    color: 'black',
    fontWeight: '100',
    fontSize: 10,
  },
  tourPreviewImage: {
    flex: 1,
    width:10,
    height: 50,
    resizeMode: 'contain',
  },
  ratingContainer: {

  },
  rating:{
    marginTop: 10,
    color: 'black',
    fontWeight: '100',
    fontSize: 10
  }
});
