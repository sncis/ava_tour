import React from 'react';
import uuidv1 from "uuid";
import { tours } from '../data';
import TourPreviewListItem from './TourPreviewListItem';

const TourPreviewList = (props) => (
      tours.map(item => (
      <TourPreviewListItem navigateToTourDetails={props.goToTourDetails} headline={item.headline} duration={item.duration} price={item.price} rating={item.rating} key={uuidv1()} />    
  )) 
)

export default TourPreviewList;


