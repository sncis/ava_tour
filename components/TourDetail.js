import React, { Component } from 'react';
import {ScrollView, View, Button, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import TourDetailsList from './TourDetailsList';
import PreviewHeaderImageComponent from './PreviewHeaderImageComponent';
import dbInstance from '../database/Database';
import MainButton from './MainButton';
import PreviewComponent from './PreviewComponent';

import store from '../store/store/store'


const mapStateToProps = (state) => {
  return {
    currentTourName: state.selectedTourName
  }
}

export class TourDetailComponent extends Component {
  componentWillMount = () => (
    console.log(this.props.currentTourName)
  )

  render() {
    return(
      <PreviewComponent />
    )
  }
}


const TourDetail = connect(mapStateToProps, null)(TourDetailComponent)

export default TourDetail;


const styles= StyleSheet.create({
  page: {
    position: 'relative',
  },
  scrollContainer: {
    padding:15,
    marginBottom: 100,
    backgroundColor: 'white',

  },
  container:{
    marginBottom: 100
  },
 
  timeLocationContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop:20,
  },
  time: {
    flex: 1,
  },
  loaction: {
    flex: 2,
  },
  button: {
    position: 'absolute',
    bottom: 50, 
    width: Dimensions.get('window').width,
    height: 50,
  },
  
  tourDetailsList: {
    // marginBottom: 200,
  }

})