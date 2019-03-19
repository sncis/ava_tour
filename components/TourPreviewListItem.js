import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

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
        <View style={styles.imageContainer}> 
          <Image source={require("../assets/images/munich.jpg")} style={styles.tourPreviewImage}></Image>

        </View>  
        <View style={styles.textContainer}>
          <Text style={styles.tourHeadline}>{this.props.headline}</Text>
          <Text style={styles.descriptiontext}>small description of text</Text>

          <Text style={styles.smallTextDuration}>{this.props.duration}</Text>
          <Text style={styles.smallText}>{this.props.price}</Text>
          <View style={styles.ratingContainer}>
            {/* <Text style={styles.rating}>{this.props.rating}</Text> */}
            <Rating style={styles.star}
              imageSize={20}
              readonly
              startingValue={this.props.ratingNum}
              />
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    margin: 7,
    marginLeft:15,
    marginRight:15,
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation:10,
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: -30},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation:14,
    // borderRadius: 5,

  },
  tourHeadline: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 0,
  },
  descriptiontext: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 4


  },
  smallText: {
    color: 'black',
    fontWeight: '100',
    fontSize: 16,
  },
  smallTextDuration: {
    color: 'black',
    fontWeight: '100',
    fontSize: 12,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 5,
    overflow : 'hidden'

  },
  tourPreviewImage: {
    flex: 2,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
        
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  rating:{
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
    color: 'black',
    fontWeight: '100',
    fontSize: 12
  },
  star: {
    height:'5%',
    marginTop: 10,
    marginBottom: 15,
  }

});
