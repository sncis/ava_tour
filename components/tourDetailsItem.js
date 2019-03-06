import React from 'react';
import { View, Text, Button } from 'react-native';


export default class TourDetailsItem extends React.Component {

  render(){
    return(
      <View>
        <Text>"tour Details should be here"</Text>
        <Button title='go to tour Navigation' onPress={this.props.goToTourNavigation} />
      </View>
    )
  }
}