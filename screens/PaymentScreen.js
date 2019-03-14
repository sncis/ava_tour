import React, { Component } from 'react';
import {View } from 'react-native';
import AvatarComponent from '../components/AvatarComponent';
import MainButton from '../components/MainButton';
import dbInstance from '../database/Database';


export default class PaymentScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRoute : dbInstance.getCurrentRouteName()
    }
  }

  render() {
    return(
      <View>
        <AvatarComponent text='Perfect! Only the payment is left.'/>
        <MainButton pressFunction={() => this.props.navigation.navigate('Conirfmation')} text="Order Now" />
      </View>

    )
  }
}