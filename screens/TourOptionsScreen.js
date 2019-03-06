import React, { Component }from 'react';
import { View, Button } from 'react-native';
import TourPreviewList from '../components/tourPreviewList';

export default class TourOptionsScreen extends Component {
  render() {
    return(
      <View>
        {/* <TourPreviewList tours={() => this.props.navigation.navigate("TourDetails")}/> */}
        <TourPreviewList testProp={() => this.props.navigation.navigate("TourDetails")}/>
        {/* <Button title="tourOptions" onPress={() => this.props.navigation.navigate("TourDetails")} /> */}
      </View>
      
    )
  }

}