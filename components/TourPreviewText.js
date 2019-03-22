import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const TourPreviewHeader = (props) => {
  return (
      <View style={styles.textContainer}>
      <View style={styles.hourContainer}>
        <Image source={require('../assets/images/Vector.png')} style={styles.hourIcon} />
        <Text style={[styles.duration, color= props.fontColor]}>5 hours</Text>
      </View>
      <Text style={[styles.tourHeadline, color= props.fontColor]}>Tour Name</Text>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, color=props.fontColor]}> 199 €</Text>
        <Text style={[styles.perTour, color=props.fontColor]}>per tour</Text>
      </View>

      <View style={styles.ratingContainer}> 
        <View style={styles.starContainer}>
          <Image source={require('../assets/images/star.png')} />
          <Image source={require('../assets/images/star.png')} />
          <Image source={require('../assets/images/star.png')} />
          <Image source={require('../assets/images/star.png')} />
          <Image source={require('../assets/images/star.png')} />
        </View>
        <Text style={[styles.rating, color=props.fontColor]}>4.5 </Text>
      </View>
    </View>
  );
}


export default TourPreviewHeader;


const styles=StyleSheet.create({
  textContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 20,
    // marginBottom: 10,
  },
  hourContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  hourIcon: {
    width: '8%',
    height: '80%',
    resizeMode: 'contain',
    alignContent: 'flex-start'  

  },
  duration : {
    fontSize: 12,
    fontWeight: '400'

  },
  tourHeadline: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: '1%',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  price: {
    fontWeight: '500',
    fontSize: 20,
    marginRight: '2%',
  },
  perTour: {
    fontWeight: '400',
    fontSize: 12,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    // marginTop: '1%',
  },
  starContainer :{
    flexDirection: 'row',
    marginRight: '3%',
    // marginBottom: '5%'
    
  },
  star: {
    width: '30%',
    height: '30%',
  },
  rating: {
    fontSize: 12,
    fontWeight: '400'

  },
})