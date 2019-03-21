import React from 'react';
import TourPreviewListItem from './TourPreviewListItem';
import { connect } from 'react-redux';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { getRecommendedTours } from '../store/actions/actions';
import dbInstance  from '../database/Database';




const mapDispatchToProps = dispatch => {
  return{
    getToures: () => dispatch(getRecommendedTours()),
  }
}

const mapStateToProp = (state) => {
  return {
    tours: state.recommendedTourNames
  }
}

export class TourPreview extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount = () => {
   this.props.getToures();
  }

  generateRandomNumer = () => {
    const ratingNum = Math.floor(Math.random() * 5 + 1 );
    return ratingNum;
  }


  createRoutes = () => (
    this.props.tours.map(tour => {
    return(
      <TourPreviewListItem 
        navigateToTourDetails= {this.props.goToTourDetails} 
        headline={tour.routeName} 
        duration={tour.duration} 
        price={tour.price} 
        rating={tour.rating} 
        ratingNum={this.generateRandomNumer()} 
        key={tour.routeName} />)
    })
  )

  render() {
    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} style={styles.scroll} >
        {this.createRoutes()}

        </ScrollView>

      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 100,
    // paddingRight: 100

  },
  scroll: {
    // zIndex: 10,
  }

})


const TourPreviewList = connect(mapStateToProp,mapDispatchToProps)(TourPreview);

export default TourPreviewList;