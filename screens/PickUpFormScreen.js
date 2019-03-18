import React, { Component} from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PickUpForm from '../components/PickUpForm';
import AvatarComponent from '../components/AvatarComponent';
import MainButton from '../components/MainButton';

const mapStateToProps = (state) => {
  return {
    tour: state.selectedTourName
  }
}

export class PickUpFormScreenElement extends Component {
  
  render(){
    return(
      <View style={styles.mainContainer}>
        <AvatarComponent text={`Great! You selected the ${this.props.tour} Tour.`}/>
        <PickUpForm navigation= {() => this.props.navigation.navigate('Payment')}/>
        <View style={styles.button}>
         <MainButton pressFunction={() => this.props.navigation.navigate('Payment')} text="Next" />
        </View>
      </View>

    )
  }

}

const PickUpFormScreen = connect(mapStateToProps, null)(PickUpFormScreenElement)

export default PickUpFormScreen;
  

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: -100, 
    alignSelf: 'center'
  }
})