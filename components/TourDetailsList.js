import React, {Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuidv1 from "uuid";
import { connect } from 'react-redux';
import { getCurrentRouteContent } from '../store/actions/actions'
import TourDetailsListItem from './TourDetailsListItem';


// const mapDispatchToProps = (dispatch) => {
//   return {
//     getTourContent: () => dispatch(getCurrentRouteContent())
//   }
// }
const mapStateToProps = (state) => {
  return{ 
    tour : state.routeContent
  }
}

export class TourDetailsComponent extends Component {
  componentWillMount = () =>{
    this.props.getTourContent();
  }
 
  render(){
    return(
      this.props.tour.map(item => (
        <TourDetailsListItem  style={styles.tourDetailListItem}
        goLocationDetails= {this.props.goToLocation}
        location={item.location} 
        time={item.time}
        recommendedTime={item.recommendedTime} 
        description={item.description}
        nextDestination={item.nextDestination}
        travelTimeToNextDestination={item.travelTimeToNextDestination} 
        key={uuidv1()}/>
    ))
  )
  }

}

  //     <View>
  //       {/* <Text>{this.props.tourName}</Text>
  //       <Text>{this.state.currentPOIs}</Text> */}

  //     </View>
     
  //   )
  // }


const TourDetailsList = connect(mapStateToProps, null)(TourDetailsComponent)

export default TourDetailsList
 


const styles = StyleSheet.create({
  tourDetailListItem: {
    marginTop: 50,
  }
})