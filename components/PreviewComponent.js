import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet, Text, Image, ImageBackground, Dimensions} from 'react-native';
import { Rating } from 'react-native-elements';
import { getCurrentRouteContent } from '../store/actions/actions';
import store from '../store/store/store';



const mapDispatchToProps = (dispatch) => {
  return {
    getTourContent: () => dispatch(getCurrentRouteContent())
  }
}
const mapStateToProps = (state) => {
  return{ 
    tourContent : state.routeContent
  }
}


export class PreviewFullScreen extends Component {

  componentWillMount = () => {
    this.props.getTourContent();
  }

  render(){
    
    return(
      <ScrollView pagingEnabled >
        <View> 
        {this.props.tourContent && <Text style={styles.test}>hi</Text> && console.log("hav it")}

          {/* <ImageBackground source={require("../assets/images/prev.jpeg")} style={styles.backgroundImage}>
            

          
          </ImageBackground> */}
        </View>
      </ScrollView>

    )
  }
}

const PreviewComponent = connect(mapStateToProps, mapDispatchToProps)(PreviewFullScreen);

export default PreviewComponent;

const styles = StyleSheet.create({
 backgroundImage: {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
 },
 test:{
   color: 'black',
   fontSize: 65,
   alignSelf: 'center'
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

})


/* <View style={styles.tourHeader}>
  
  <View style={styles.hourContainer}>
      <Image source={require('../assets/images/Vector.png')} style={styles.hourIcon} />
      <Text style={styles.smallTextDuration}>{this.props.currentTourNduration}</Text>
    </View>

    <Text style={styles.tourHeadline}>{this.props.headline}</Text>
    
    {/* <Text style={styles.descriptiontext}>small description of text</Text> */

  //   <View style={styles.priceContainer}>
  //     <Text style={styles.price}>{this.props.price}€</Text>
  //     <Text style={styles.perTour}>per tour</Text>
  //   </View>


  //   <View style={styles.ratingContainer}>
  //     <Rating style={styles.star}
  //       imageSize={12}
  //       readonly
  //       startingValue={this.props.ratingNum}
  //       />
  //     <Text style={styles.rating}>{this.props.rating}</Text>

  //   </View>
  // </View>}
