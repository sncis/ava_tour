import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class PaymentGpay extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Text>G PAY </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',

  }
})