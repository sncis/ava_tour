import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


 const HorizotalSliderCard = (props) => {
   console.log(props.imageSource)
  return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image style={styles.backgroundImage} source={require('../assets/images/munich.jpg')} />
        </View>
      </View>
    );
} 

export default HorizotalSliderCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation:15,
    paddingTop: 20,
    paddingBottom: 20,

  },
  contentContainer: {
    borderColor: 'black',
    borderRadius: 20,
    flexDirection: 'row',
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'red',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation:15,
    marginLeft: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode:'cover',
    overflow: 'hidden',

   
  },

  
});