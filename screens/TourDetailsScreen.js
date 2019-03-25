import React, { Component } from 'react';
import TourDetail from '../components/TourDetail';
import PreviewComponent from '../components/PreviewComponent'

export default class TourDetailsScreen extends Component{
  render(){
    return(
      <PreviewComponent />
      // <TourDetail 
      //   goToLocationDetails={() => this.props.navigation.navigate('LocationDetails')} 
      //   goToTourNavigation={()=>this.props.navigation.navigate('TourNavigation')} 
      //   goToPickUpForm={()=> this.props.navigation.navigate('PickUpForm')}
      // />
    )
  }
}
