import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {tour1 } from '../data';
import HorizontalSlider from '../components/HorizontalSlider';




const PreviewHeaderImageComponent = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headline}>{props.tourName}</Text>
    <HorizontalSlider />
    {/* <View style={styles.imageContainer}>
    <Image style={styles.tourHeaderImage} source={require("../assets/images/munich.jpg")} /> */}
    {/* </View> */}
  </View>
)



const styles = StyleSheet.create({
  headerContainer: {
    // margin:20,
  },
  headline: {
    // width: '60%',
    fontSize: 20,
    fontWeight: '400',
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