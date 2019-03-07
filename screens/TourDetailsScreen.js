import React, { Component } from 'react';
import TourDetail from '../components/TourDetail';

export default class TourDetailsScreen extends Component{
  render(){
    return(
      <TourDetail  goToTourNavigation={()=>this.props.navigation.navigate('TourNavigation')}/>
    )
  }
}
