import React, { Component } from 'react';
import {View,Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AvatarComponent from '../components/AvatarComponent';
import MainButton from '../components/MainButton';
import dbInstance from '../database/Database';
import PaymentFormVisa from '../components/PaymentFormVisa';
import PaymentGpay from '../components/PaymentGpay';
import DetailsInput from '../components/DetailsInput';
import store from '../store/store/store';



const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return{
    currentTourName: state.selectedTourName
  }
}
export class PaymentScreenElement extends Component {
  constructor(props){
    super(props);
    this.state = {
      paymentMethode: ''
    }
  }

  render() {
    console.log(store.getState())
    return(
      <ScrollView style={styles.paymentContainer}>
        <AvatarComponent text='Perfect! Only the payment is left.'/>


        <View style={styles.detailContainer}>
          <Text style={styles.headlineText}>Your Details</Text>
          <DetailsInput />
        </View>
        
        <Text style={styles.headlineText}>Pay with</Text>

        <View style={styles.imageContainer}>
          <TouchableOpacity  onPress={() => {this.setState({paymentMethode: 'payPal'})}}>
            <Image style={styles.payImage} source={require('../assets/images/payPal.png')}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {this.setState({paymentMethode: 'visa'})}}>
            <Image style={styles.payImage} source={require('../assets/images/visa.jpeg')}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {this.setState({paymentMethode: 'gpay'})}}>
            <Image style={styles.payImage} source={require('../assets/images/gpay.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentInputContainer}>
          {this.state.paymentMethode === "visa" && <PaymentFormVisa />}
          {this.state.paymentMethode === 'gpay'  && <PaymentGpay />}
        </View>
        <View style={styles.button}>
          <MainButton pressFunction={() => this.props.navigation.navigate('Conirfmation')} text="Order Now" style={styles.button}/>
        </View>

      </ScrollView>

    )
  }
}

const PaymentScreen = connect(mapStateToProps, mapDispatchToProps)(PaymentScreenElement)
export default PaymentScreen;


const styles = StyleSheet.create({
  paymentContainer: {
    position: 'relative',
    padding: 15,
  },
  
  imageContainer:{
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headlineText: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '300',
    color: 'black'
  },
  payImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
    margin: 10,
  },
  button :{
    marginBottom: 100,
  },

})