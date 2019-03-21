import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo'

import { Rating } from 'react-native-elements';

import { setSelectedTourName} from '../store/actions/actions';
import dbInstance from '../database/Database';


// require("../assets/images/robot-dev.png")
// uri: image const image = 'https://source.unsplash.com/600x400/?munich';
const mapDispatchToProps = (dispatch) => {
  return{
    setSelectedTour : (tourname) => dispatch(setSelectedTourName(tourname))
  }
}


export class TourPreviewListElement extends Component {

  onTourSelect(tourName){
    this.props.setSelectedTour(tourName)
    // dbInstance.setCurrentRouteName(tourName);
    return this.props.navigateToTourDetails();
  }

  render() {
    return(
      
      <TouchableOpacity title="" onPress={() => this.onTourSelect(this.props.headline)} style={styles.touchContainer}> 
       
        <View style={styles.contentContainer}>
        
        <View style={styles.imageGradientContainer}>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/munich.jpg")} />
            <LinearGradient colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.8)','rgba(255,255,255,0.6)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '8%',
                height: "70%",
              }} 
              end={[0,0.5]}
              start={[0,1]}
            />
          </View>

          
          
          <View style={styles.textContainer}>
            <View style={styles.hourContainer}>
              <Image source={require('../assets/images/Vector.png')} style={styles.hourIcon} />
              <Text style={styles.smallTextDuration}>{this.props.duration}</Text>
            </View>

            <Text style={styles.tourHeadline}>{this.props.headline}</Text>
            
            {/* <Text style={styles.descriptiontext}>small description of text</Text> */}

            <View style={styles.priceContainer}>
              <Text style={styles.price}>{this.props.price}€</Text>
              <Text style={styles.perTour}>per tour</Text>
            </View>


            <View style={styles.ratingContainer}>
              {/* <Rating style={styles.star}
                imageSize={12}
                readonly
                startingValue={this.props.ratingNum}
                /> */}
              <View style={styles.starContainer}>
                <Image source={require('../assets/images/star.png')} />
                <Image source={require('../assets/images/star.png')} />
                <Image source={require('../assets/images/star.png')} />
                <Image source={require('../assets/images/star.png')} />
                <Image source={require('../assets/images/star.png')} />

              </View>
              <Text style={styles.rating}>{this.props.rating}</Text>

            </View>
          </View>

      </View>

      </TouchableOpacity>
    );
  };
};

const TourPreviewListItem = connect(null, mapDispatchToProps)(TourPreviewListElement)

export default TourPreviewListItem

const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 120,
    height: Dimensions.get('window').height / 1.8,
    // aspectRatio: 2/3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom: 10,
    marginTop: 10,
    marginLeft:15,
    // marginRight: 15,
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation:15,
  },
  contentContainer: {
    position: 'relative',
    borderRadius: 20,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  imageGradientContainer:{
    flex: 1.5,
  },
  backgroundImage: {
    position: 'relative',
    borderRadius: 20,
    overflow : 'hidden',
    width: '100%',
    height: '90%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    resizeMode:'contain',
  },
  
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    overflow: 'hidden'  ,
    // shadowColor: 'red',
    // shadowOffset: {width: 1, height: -150},
    // shadowRadius: 15,
    // shadowOpacity: 1,

  },

  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  hourIcon: {
    width: '8%',
    height: '70%',
    resizeMode: 'contain',
    alignContent: 'flex-start'  

  },

  tourHeadline: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginTop: '1%',
    marginBottom: '1%',
  },
  descriptiontext: {
    // fontWeight: '400',
    // fontSize: 16,
    // marginBottom: 5
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    marginRight: '2%',
  },
  perTour: {
    fontWeight: '200'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  starContainer :{
    flexDirection: 'row',
    marginRight: '3%',
    marginTop: '3%',
    
  },
  star: {
    width: '50%',
    height: '50%',

  },
  rating:{
    // marginTop: 10,
    // marginLeft: 0,
    // marginRight: 10,
    // color: 'black',
    // fontWeight: '100',
    // fontSize: 12
  },
  star: {
    // marginTop: 10,
    // marginBottom: 15,
  }

});
