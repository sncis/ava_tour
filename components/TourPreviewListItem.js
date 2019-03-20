import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { setSelectedTourName} from '../store/actions/actions';

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
        
        <View>
            <ImageBackground resizeMode={'cover'} style={styles.imageContainer} source={require("../assets/images/munich.jpg")} />
            <LinearGradient colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.7)','transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '100%',
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
              <Rating style={styles.star}
                imageSize={12}
                readonly
                startingValue={this.props.ratingNum}
                />
              <Text style={styles.rating}>{this.props.rating}</Text>

            </View>
          </View>

      </View>
        
        {/* <View style={styles.imageContainer}> 
            <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ ...styles.imageContainer, alignItems: 'center', borderRadius: 5 , zIndex: 10}}>

          
            <Image source={require("../assets/images/munich.jpg")} style={styles.tourPreviewImage}></Image>

          </LinearGradient>
        </View>   */}

       
      </TouchableOpacity>
    );
  };
};

const TourPreviewListItem = connect(null, mapDispatchToProps)(TourPreviewListElement)

export default TourPreviewListItem

const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    margin: '5%',
    marginLeft:'5%',
    // marginRight:15,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation:10,
    
  },
  contentContainer: {
    borderRadius: 20,
    // borderWidth: 0.3,
    // borderColor: '#C4C4C4',

  },
  hourContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  hourIcon: {
    width: '8%',
    height: '70%',
    resizeMode: 'contain'

  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden'  
    },

  tourHeadline: {
    flex: 1,
    // flexWrap: 'wrap',
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '3%',
  },

  descriptiontext: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 5
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: 'black',
    fontWeight: '400',
    fontSize: 24,
    marginRight: '2%',
  },
  perTour: {
    fontWeight: '200'
  },
  
  imageContainer: {
    borderRadius: 20,
    overflow : 'hidden',
    width: '100%',
    height: 300,

  },
  tourPreviewImage: {
    flex: 2,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
        
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  rating:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 0,
    color: 'black',
    fontWeight: '100',
    fontSize: 12
  },
  star: {
    marginTop: 10,
    marginBottom: 15,
  }

});

