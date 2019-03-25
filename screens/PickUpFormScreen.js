import React, { Component} from 'react';
import {View, StyleSheet, Dimensions, ScrollView } from 'react-native';
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
      <ScrollView style={styles.mainContainer}>
        <AvatarComponent text={`Great! You selected the ${this.props.tour} Tour.`}/>
        <PickUpForm navigation= {() => this.props.navigation.navigate('TourOptions')}/>
        <View style={styles.button}>
         <MainButton pressFunction={() => this.props.navigation.navigate('TourOptions')} text="Next" />
        </View>
      </ScrollView>

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
    marginTop: '5%',
    alignSelf: 'center',
    marginBottom: 100,
  }
})