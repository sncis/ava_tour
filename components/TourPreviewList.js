import React from 'react';
import uuidv1 from "uuid";
import TourPreviewListItem from './TourPreviewListItem';
import dbInstance  from '../database/Database';


generateRandomNumer = () => {
  const ratingNum = Math.floor(Math.random() * 5 + 1 );
  return ratingNum;
}

export default class TourPreviewList extends React.Component {
  constructor(props){
    super(props)
  }

  createRoutes(){
    let routes = dbInstance.getAllTours('munic');
    let result= [];
    routes.forEach(tour => {
      result.push(
        <TourPreviewListItem 
        navigateToTourDetails= {this.props.goToTourDetails} 
        headline={tour.routeName} 
        duration={tour.duration} 
        price={tour.price} 
        rating={tour.rating} 
        ratingNum={this.generateRandomNumer} 
        key={uuidv1()} />

      )
    });
    return result;
    
  }

  render() {
    return(
      this.createRoutes()
    )
  }
  
}