import React from 'react';
import uuidv1 from "uuid";
import { tours } from '../data';
import TourPreviewListItem from './tourPreviewListItem';

const TourPreviewList = () => (
      tours.map(item => (
      <TourPreviewListItem nextProp={this.props.testProp} headline={item.headline} duration={item.duration} price={item.price} rating={item.rating} key={uuidv1()} />    
  )) 
)

export default TourPreviewList;


