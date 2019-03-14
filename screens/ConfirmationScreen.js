import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import dbInstance from '../database/Database';
import AvatarComponent from '../components/AvatarComponent';
import PreviewHeaderImageComponent from '../components/PreviewHeaderImageComponent';


export default class ConfirmationScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRoute : dbInstance.getCurrentRouteName(),
    }
  }

  render(){
    return(
      <View>
        <AvatarComponent text={`Perfect! You ordered the ${this.state.currentRoute} Tour.`}/>
        <View style={styles.container}>
          <PreviewHeaderImageComponent /> 
          <View>
            <Text style={styles.text}>
              Your driver will pick you up at the Innside Hotel with a BMW X2 car, plate DPS 006.
            </Text>
            <Text style={styles.text}>
              See you soon on board!
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  text: {
    width: '70%',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 50,
    alignSelf: 'center'
  },
 
})