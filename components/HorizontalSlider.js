import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native';
import HorizotalSliderCard from './HorizontalSliderCard';




export default class HorizontalSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      images: [{url:'../assets/images/munich.jpg'},
      { url: '../assets/images/backgroundImage.jpg'}]
    }
  }
  createSliderCards = () => {
    const cardMap = this.state.images.map(image => {
      return(
        <HorizotalSliderCard imageSource={{uri: image.url}} 
        key={image.url}/>
      )
    })
    return cardMap;
  }

  render() {
    return(
      <View> 
        <ScrollView 
          horizontal={true}
          pagingEnabled  
          style={styles.scrollContainer}>
          {this.createSliderCards()}
          {/* <View style={styles.imageContainer}>
            <Image source={require('../assets/images/munich.jpg')} style={styles.image}/>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/munich.jpg')} style={styles.image}/>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/munich.jpg')} style={styles.image}/>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/munich.jpg')} style={styles.image}/>
          </View> */}
          </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  scrollContainer: {
    overflow: 'hidden',
  },
  imageContainer: {
    width: Dimensions.get('window').width - 100,
    height: 250,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 20,
    elevation:10,
    overflow: 'hidden',
    margin: 5,

  },
  image: {
    width: Dimensions.get('window').width - 50,
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
    margin: 5,
    overflow: 'hidden',
  }
})