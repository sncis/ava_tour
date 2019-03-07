import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import {tour1 } from '../data';


const PreviewHeaderImageComponent = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headline}>{tour1[0].location}</Text>
    <View style={styles.imageContainer}>
    <Image style={styles.tourHeaderImage} source={require("../assets/images/munich.jpg")} />
    </View>
  </View>
)



const styles = StyleSheet.create({
  headerContainer: {
    // margin:20,
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
    // width: Dimensions.get('window').width - 40,
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
})


export default PreviewHeaderImageComponent;