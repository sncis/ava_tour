import React from 'react';
import uuidv1 from "uuid";
import TourPreviewListItem from './TourPreviewListItem';
import { connect } from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import { getRecommendedTours } from '../store/actions/actions';


generateRandomNumer = () => {
  const ratingNum = Math.floor(Math.random() * 5 + 1 );
  return ratingNum;
}

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

  createRoutes = () => (
    this.props.tours.map(tour => {
    return(
      <TourPreviewListItem 
        navigateToTourDetails= {this.props.goToTourDetails} 
        headline={tour.routeName} 
        duration={tour.duration} 
        price={tour.price} 
        rating={tour.rating} 
        ratingNum={this.generateRandomNumer} 
        key={uuidv1()} />)
    })
  )

  render() {
    return(
      <View style={styles.container} >
        <ScrollView horizontal={true}
            pagingEnabled >
          {this.createRoutes()}

        </ScrollView>
      </View>
      
    )
  }
  
}

const styles= StyleSheet.create({

container: {
  paddingTop: '20%',
  paddingBottom: '10%',
  paddingRight: '20%',
  paddingLeft: "4%",

}
})


const TourPreviewList = connect(mapStateToProp,mapDispatchToProps)(TourPreview);

export default TourPreviewList;