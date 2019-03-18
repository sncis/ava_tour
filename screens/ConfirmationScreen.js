import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import AvatarComponent from '../components/AvatarComponent';
import store from '../store/store/store'

const mapStateToProps = (state) => {
  return{
    currentRoute: state.selectedTourName,
    location: state.pickUpLocation,
    time: state.startTime,
    date: state.startDate,

  }
}

export class Confirmation extends Component {
  
  render(){
    console.log(store.getState())
    return(
      <ScrollView>
        <AvatarComponent text={`Perfect! You ordered the ${this.props.currentRoute} Tour.`}/>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/confirmationPhone.png')} style={styles.confiPhone} />
        </View>
          <Text style={styles.text}>I will pick you up as requested and call you 5 min before I arrive</Text>
          <View style={styles.pickUpPrevContainer}>
            <View style={styles.pickUpPrevIcon}>
              <Image source={require('../assets/images/location_icon.png')} style={styles.icon} />
              <Text style={styles.pickUpPrevText}>{this.props.location}</Text>
            </View>
            <View style={styles.pickUpPrevIcon}>
              <Image source={require('../assets/images/hour_icon.png')} style={styles.icon} />
              <Text style={styles.pickUpPrevText}>{this.props.time}</Text>
            </View>
            <View style={styles.pickUpPrevIcon}>
              <Image source={require('../assets/images/car_icon.png')} style={styles.icon} />
              <Text style={styles.pickUpPrevText}>with a BMW X2 plate: 'M-AT 2019'</Text>
            </View>
          </View>
          <Text style={styles.text}>
              See you soon on board!
            </Text>
        </View>
      </ScrollView>
    )
  }
}

const ConfirmationScreen = connect(mapStateToProps, null)(Confirmation)

export default ConfirmationScreen;

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
  imageContainer: {
    alignSelf: 'center',
  },
  confiPhone: {
    height: 150,
    width: 200,
    resizeMode: 'contain'
  },
  pickUpPrevContainer: {
    alignSelf: 'center',
    marginTop:20,
  },
  pickUpPrevIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 20,
    resizeMode: 'contain'
  },
  pickUpPrevText: {
    fontWeight: 'bold'
  }
 
})