import React, { Component } from 'react';
import { StyleSheet, View, Keyboard, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';


export default class PaymentFormVisa extends Component {
  constructor(props){
    super(props);
    this.state = {
      paymentmode: '',
      cardNumber: '',
      exMonth: '',
      exYear: '',
      secCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      termsAccepted: false,
    }
  }

  setText = (text) => {
    this.setState({
      firstname: text
    })
  }

  validate=(text) => {
    const alpha = /^[a-zA-Z]/

    if(alpha.test(text)) {
      console.warn('text is okay')
    }
    else{
      console.warn('text is NOT valide')
    }

  }

  
render() {
  return(
    <View style={styles.cardPaymentContainer}>
       <Input
            placeholder='Card Holder'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => this.validate(text)}
            onSubmitEditing={(text) =>this.validate(text)}
          />
          <Input
            placeholder='Cardnumber'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => this.setText(text)}
            onSubmitEditing={(text) =>this.validate(text)}
          />
          <View style={styles.smallContainer}> 
            <Input
              placeholder='expiry Month'
              // errorMessage='sorry no name'
              // errorStyle={{color: 'red'}}
              inputStyle={styles.inputText}
              inputContainerStyle={styles.inputContainerStyleSmall}
              onChangeText={(text) => this.setText(text)}
              onSubmitEditing={(text) =>this.validate(text)}
            />
            <Input
              placeholder='expiry Year'
              // errorMessage='sorry no name'
              // errorStyle={{color: 'red'}}
              inputStyle={styles.inputText}
              inputContainerStyle={styles.inputContainerStyleSmall}
              onChangeText={(text) => this.setText(text)}
              onSubmitEditing={(text) =>this.validate(text)}
            />
          <Input
            placeholder='Security Code'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyleSmall}
            onChangeText={(text) => this.setText(text)}
            onSubmitEditing={(text) =>this.validate(text)}
          />

        </View>
          
    </View>
  )
  }
}

const styles = StyleSheet.create({
  cardPaymentContainer: {
    
  },
  inputContainerStyle: {
    height: 30,
    borderColor: '#bdc3c7',
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 5,
  },
  inputContainerStyleSmall: {
    width: 100,
    height: 30,
    borderColor: '#bdc3c7',
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 5,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '100',

  },
  smallContainer: {
    flexDirection: 'row',
    width: Dimensions.get("window").width,
    flexWrap: 'wrap',
   
  }

})