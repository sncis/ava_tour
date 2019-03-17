import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';


export default class DetailsInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname : '',
      email: '',
      phone: '',
    }
  }

  setText = (text, type) => {
    if(type === 'firstname'){
      this.setState({
        firstname: text
      })
      console.log(this.state)

    }
    else if(type === 'lastname'){
      this.setState({
        firstname: text
      })
    }
    else if(type === 'email'){
      this.setState({
        firstname: text
      })
    }
    else if(type === 'phone'){
      this.setState({
        firstname: text
      })
    }
    console.log(this.state)
  }
  render() {
    return(
      <View style={styles.container}>
       <Input
            placeholder='First Name'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            // onChangeText={(text) => this.setText(text, 'firstname')}
            onSubmitEditing={(text) => this.setText(text, 'firstname')}
          />
          <Input
            placeholder='Last Name'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            // onChangeText={(text) => this.setText(text, 'firstname')}
            onSubmitEditing={(text) => this.setText(text, 'lastname')}
          />
          <Input
            placeholder='Email Address'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            // onChangeText={(text) => this.setText(text, 'firstname')}
            onSubmitEditing={(text) => this.setText(text, 'email')}
          />
          <Input
          placeholder='Phone Number'
          // errorMessage='sorry no name'
          // errorStyle={{color: 'red'}}
          inputStyle={styles.inputText}
          inputContainerStyle={styles.inputContainerStyle}
          // onChangeText={(text) => this.setText(text, 'firstname')}
          onSubmitEditing={(text) => this.setText(text, 'phonenumber')}
          />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  inputContainerStyle: {
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

  }
})