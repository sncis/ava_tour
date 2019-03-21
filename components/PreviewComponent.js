import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet , Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { getCurrentRouteContent } from '../store/actions/actions';
import store from '../store/store/store';

const mapStateToProps = (state) => {
  return{
    currentTourName: state.selectedTourName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getTourContent: () => dispatch(getCurrentRouteContent())
  }
}


export class TourDetailPreview extends Component { 

  componentWillMount = () => {
    this.props.getTourContent();
  }
  

  render(){    
    return(
      <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.backgroundImage} source={require("../assets/images/backgroundImage.jpeg")} />
              <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)','rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)', 'transparent']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                }} 
                end={[0,0.5]}
                start={[0,1]}
              />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.hourContainer}>
            <Image source={require('../assets/images/Vector.png')} style={styles.hourIcon} />
            <Text style={styles.duration}>5 hours</Text>
          </View>
          <Text style={styles.tourHeadline}>{this.props.currentTourName}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}> 199 €</Text>
            <Text style={styles.perTour}>per tour</Text>
          </View>

          <View style={styles.ratingContainer}> 
            <View style={styles.starContainer}>
              <Image source={require('../assets/images/star.png')} />
              <Image source={require('../assets/images/star.png')} />
              <Image source={require('../assets/images/star.png')} />
              <Image source={require('../assets/images/star.png')} />
              <Image source={require('../assets/images/star.png')} />
            </View>
            <Text style={styles.rating}>rating</Text>
          </View>
        </View>

        <View style={styles.swipeContainer}>
          <TouchableOpacity style={styles.swipeButton} onPress={this.props.navigateToDetails}>
            <Image source={require('../assets/images/arrowUpWhite.png')} style={styles.swipeArrow}/>
            <Text style={styles.swipeText}>swipe up for more</Text>
          </TouchableOpacity>
        </View>
          
     </View>
    )
  }

}

const styles=StyleSheet.create({
  pageContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
  imageContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 170,
    left: 0,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 20,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  hourIcon: {
    width: '10%',
    height: '80%',
    resizeMode: 'contain',
    alignContent: 'flex-start'  

  },
  duration : {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'

  },
  tourHeadline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '1%',
    marginBottom: '1%',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: '2%',
  },
  perTour: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
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
  rating: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'

  },
  swipeContainer : {
    position: 'absolute',
    width: '100%',
    bottom: 110,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  swipeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },
  swipeArrow: {
    alignSelf: 'center',
  }




})

const PreviewComponent = connect(mapStateToProps, mapDispatchToProps)(TourDetailPreview)
export default PreviewComponent;

