import React from 'react';
import uuidv1 from "uuid";
import { tours } from '../data';
import TourPreviewListItem from './TourPreviewListItem';
import {Database} from '../database/Database';

const ratingNum = Math.floor(Math.random() * 5 )

generateRandomNumer = () => {
  const ratingNum = Math.floor(Math.random() * 5 + 1 )
}

export default class RouteData extends React.Component {
  constructor(props){
    super(props)
  }

  onTourSelect(db, tourName){
    db.setCurrentRouteName(tourName);
    return props.goToTourDetails;
  }

  createRoutes(){
    var db = Database.getInstance();
    var routes = db.getAllTours('munic');
    return routes.map(tour=>{
      <TourPreviewListItem 
        navigateToTourDetails= {this.onTourSelect(db,tour.tourName)} 
        headline={tour.tourName} 
        duration={tour.duration} 
        price={tour.price} 
        rating={tour.rating} 
        ratingNum={this.generateRandomNumer()} 
        key={uuidv1()} />
    });
  }

  render() {
    return(
      this.createRoutes()
    )
  }
  
}