import React, { Component } from 'react';
import TourDetailsList from '../components/TourDetailsList';
import TourDetail from '../components/TourDetail';

export default class TourDetailsScreen extends Component{
  render(){
    return(
      <TourDetail  goToTourNavigation={()=>this.props.navigation.navigate('TourNavigation')}/>
    )
  }
}
