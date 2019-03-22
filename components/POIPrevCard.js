import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
  return{
    getPIODetails: (poiName) => dispatch(getPOIDetials(poiName))
  }
}

export class POICard extends Component {
  

  handelTouch = (poiName) => {
    console.log(poiName)
    this.props.touchNavigation()
    // this.props.getPOIDetails(poiName)
    // this.props.navigationToDetails;
  }
   

  render(){
    return (
      <TouchableOpacity title="" onPress={() => this.handelTouch(this.props.poiName)} style={styles.touchContainer}> 
          <View style={styles.contentContainer}>
          
          <View style={styles.imageGradientContainer}>
              <ImageBackground style={styles.backgroundImage} source={require("../assets/images/munich.jpg")} />
              <LinearGradient colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.8)','rgba(255,255,255,0.6)', 'transparent']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '0%',
                  height: "70%",
                }} 
                end={[0,0.5]}
                start={[0,1]}
              />
            </View>
  
            <View style={styles.textContainer}>
             <Text style={styles.text}>{this.props.poiName}</Text>
            </View>
  
        </View>
  
        </TouchableOpacity>
      );

  }
  
};

const POIPrevCard = connect(null, mapDispatchToProps)(POICard)

export default POIPrevCard;

const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 260,
    height: Dimensions.get('window').height / 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 40,
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 10,
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
    height: '70%'
    // flex: 1.5,
  },
  backgroundImage: {
    position: 'relative',
    borderRadius: 20,
    overflow : 'hidden',
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    resizeMode:'contain',
  },
  
  textContainer: {
    height: '30%',
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  text:{
    width: '90%',
    height: '100%',
  }


  
});

//     <View style={styles.cardContainer}>
//       <View styl={styles.imageContainer}>
//       <Image style={styles.poiImage} source={require('../assets/images/munich.jpg')} />
//       {/* <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)','rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)', 'transparent']}
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   height: "100%",
//                 }} 
//                 end={[0,0.5]}
//                 start={[0,1]}
//               /> */}
//       </View>

//       <View style={styles.textContainer}>
//         <Text> {props.poiName} </Text>
//       </View>

//     </View>
//   )
// }

// export default POIPrevCard;

// const styles = StyleSheet.create({
//   cardContainer: {
//     position: 'relative',
//     flexDirection: 'column',
//     // height: 200,
//     width: "30%",
//     aspectRatio: 1/2,
//     shadowColor: 'grey',
//     shadowOffset: { width: 1, height: 1 },
//     shadowOpacity: 11,
//     shadowRadius: 1,
//     elevation:10,
//     backgroundColor: 'yellow',
//     borderRadius: 20,
//     margin: 10,

//   },
//   imageContainer: {
//     position: 'relative',
//     borderRadius: 20,
//     height: 300,
//     width: 400,
//   },
//   poiImage: {
//     position: 'absolute',
//     top: 0,
//     left:0,
//     height: 100,
//     width: 200,
//     borderRadius: 20,
//     overflow: 'hidden',
//     resizeMode: 'cover',
//   }

// })

