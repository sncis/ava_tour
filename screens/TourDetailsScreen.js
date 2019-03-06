import React, { Component } from 'react';
import TourDetailsItem from '../components/tourDetailsItem';

export default class TourDetailsScreen extends Component{
  render(){
    return(
      <TourDetailsItem goToTourNavigation={()=>this.props.navigation.navigate('TourNavigation')}/>
    )
  }
}
