import React, { Component } from 'react';
import TourDetail from '../components/TourDetail';

export default class TourDetailsScreen extends Component{
  render(){
    return(
      <TourDetail goToLocationDetails={() => this.props.navigation.navigate('LocationDetails')} 
        goToTourNavigation={()=>this.props.navigation.navigate('TourNavigation')}/>
    )
  }
}
