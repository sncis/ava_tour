import React, {Component} from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import POIPrevCard from './POIPrevCard';


const mapStateToProps = (state) => {
  return{
      tourContent: state.routeContent
  }

}
export class POIs extends Component {
  componentDidMount= () => {
    console.log(this.props.tourContent)
  }

  createPOIcards = () => {
    const map = this.props.tourContent.map(poi => {
      return( 
        <POIPrevCard
          poiName={poi.location}
          touchNavigation={() => this.props.navigationtoLocDetails()}
          // image={poi.image}
          key={poi.location}
        />
      )
    })
    return map;
  }

  render(){
    return(
      <View>
        <ScrollView horizontal={true}>
          {this.props.tourContent && this.createPOIcards()}
        </ScrollView>
      </View>
    )
  }
}

const POISlider = connect(mapStateToProps, null)(POIs)

export default POISlider;