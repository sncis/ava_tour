import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
// import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '../constants/ApiKeys';

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
  render(){
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
              {/* <MapView.Polyline
            coordinates={[
              {latitude:48.137393, longitude:11.575448},
              {latitude:48.1772, longitude:11.5563}
            ]}
            strokeColor="red"
            strokeWeight={6}/ > */}
            {/* <MapViewDirections
              origin={{latitude:48.137393, longitude:11.575448}}
              destination={{latitude:48.1772, longitude:11.5563}}
              apiKey={GOOGLE_MAPS_API_KEY}
              strokeColor="red"
              strokeWeight={6}/ > */}

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
  }
})