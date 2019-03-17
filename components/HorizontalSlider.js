import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native';

export default class HorizontalSlider extends Component {
  render() {
    return(
      <View> 
        <ScrollView 
          horizontal={true}
          pagingEnabled  
          style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
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
          </View>
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
    width: Dimensions.get('window').width - 50,
    height: 250,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 5,
    elevation:10,
    overflow: 'hidden',
    margin: 5,

  },
  image: {
    width: Dimensions.get('window').width - 50,
    height: 250,
    borderRadius: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 5,
  }
})