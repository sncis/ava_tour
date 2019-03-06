import React, { Component } from 'react';
import WelcomeComponent from "../components/WelcomeComponent";

class HomeScreen extends Component {
  render() {
    return(
      <WelcomeComponent goToTourOptions={() => this.props.navigation.navigate('TourOptions')}/> 
    )
  }
}

export default HomeScreen;


