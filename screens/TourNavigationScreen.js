import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { MapView } from 'expo';
import Polyline from '@mapbox/polyline';
import { GOOGLE_API_KEY  } from '../constants/ApiKeys';


const region ={
  latitude: 48.161620,
  longitude: 11.568640,
  latitudeDelta: 0.0920,
  longitudeDelta: 0.0420,
};

const markers =[{
  latitude: 48.08840,
  longitude: 11.341859,
  title: 'Foo Place',
  subtitle: '1234 Foo Drive'
  }
]

export default class TourNavigationScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      googleData: []
    }
  }

  componentDidMount(){
    this.getDirection("48.137393,11.575448","48.1772,11.5563")
  }

  getDirection = async (startPoint, endPoint) => {
    let responds =  await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&key=${GOOGLE_API_KEY}`)
    let points = Polyline.decode(responds.data.routes[0].overview_polyline.points)
    let coords = points.map((point) => {
      return { 
        latitude: point[0],
        longitude: point[1]
      }
    })
    this.setState({googleData: coords})
    return points
   };


  render() {
    return(
      <View>
        <Text>Tour Navigation screen</Text>
        
        <View>
          <MapView
            style={styles.map}
            initialRegion={region}
            annotations={markers}>
              <MapView.Marker coordinate={{latitude:48.137393, longitude:11.575448}}
              title="Marienplatz"
              pinColor="red"/>
              <MapView.Marker coordinate={{latitude:48.1772, longitude:11.5563}}
              title="BMW World"
              pinColor="red"/>

              <MapView.Polyline
                coordinates={this.state.googleData}
                strokeColor="red"
                strokeWeight={6}/ >
          </MapView> 
            
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  map:{
    height: 500,
    width: 500,
  },
});



// Polyline.decode(this.state.googleData.data.routes[0].overview_polyline.points)