import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import TourPreviewText from './TourPreviewText';
import POISlider from './POISlider';


const mapStateToProps = (state) => {
  return {
    tourContent : state.routeContent,
    currentTourName: state.selectedTourName
  }
}
export class PreviewHeader extends Component {
  render(){
    return(
      <View style={styles.pageContainer}>
        
        <View style={styles.headerContainer}>
          <View style={styles.imageHeaderContainer}>
            <ImageBackground source={require('../assets/images/backgroundImage.jpeg')} style={styles.headerImage}/>
            <LinearGradient colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.8)','rgba(255,255,255,0.6)', 'transparent']}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '0%',
                    height: "90%",
                  }} 
                  end={[0,0.5]}
                  start={[0,1]}
                />
          </View>
          <View style={styles.headerTextContainer}>
            <TourPreviewText fontColor='black'/>
          </View> 
        </View>


          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeadline}>In a nutshell</Text>
            <Text style={styles.desctiptionText}>A beer garden (a loan translation from the German Biergarten) is an outdoor area in which beer and local food are served, typically . . . </Text>
          </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderHeadline}>YOU WILL SEE</Text>
          <POISlider  navigationtoLocDetails={() => this.props.navigateToLocationDetails()} /> 
       
         </View>
         
         <TouchableOpacity style={styles.arrowDownContainer}> 
           <Text>See Timeline</Text>
           <Image source={require('../assets/images/arrowDown.png')} style={styles.arrow} />
         </TouchableOpacity>
      </View>
    )
  }

}

const  TourPreviewHeader = connect(mapStateToProps, null)(PreviewHeader)
export default TourPreviewHeader;


const styles = StyleSheet.create({
  pageContainer: {
    position: 'relative',
    // height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'column',
    // position:'relative',
    height:Dimensions.get('window').height / 3,
    width: '100%',
    // backgroundColor: 'yellow',
    marginBottom: '8%',
  },
  imageHeaderContainer: {
    // flex: 2,
    position: 'relative',
    top: 0,
    left: 0,
    height: '80%',
    width: '100%',
    // backgroundColor: 'green',

  },
  headerImage: {
    position:'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  headerTextContainer: {
    height: '20%',
    // marginBottom: 100
  },
  descriptionContainer:{
    height: Dimensions.get('window').height / 6,
    padding:20,
    backgroundColor: 'lightgrey',
    marginBottom: '3%'

  },
  descriptionHeadline :{
    fontSize: 14,
    fontWeight: '400',
    marginBottom: '1%'

  },
  desctiptionText: {
    width: '90%',
    fontSize: 14,
    fontWeight: '400',
  },
  sliderContainer: {
    // height: 200,
    // backgroundColor: 'green'
  },
  sliderHeadline: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  arrowDownContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  arrow: {
    marginTop: 10,
  }



  

})