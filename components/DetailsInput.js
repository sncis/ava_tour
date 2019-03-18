import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import { setFirstName, setLastName, setPhone, setEmail } from '../store/actions/actions';



const mapDispatchToProps = (dispatch) => {
  return{
    // setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
    setFirstname: (name) => dispatch(setFirstName(name)),
    setLastname: (name) => dispatch(setLastName(name)),
    setPhone: (phone) => dispatch(setPhone(phone)),
    setMail: (mail) => dispatch(setEmail(mail)),
  }
}


export class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname : '',
      email: '',
      phone: '',
    }
  }

  // setFirstname = (firstname) => {
  //   this.setState({
  //     firstname: firstname
  //   })
  // }

  // setLastname = (lastname) => {
  //   this.setState({
  //     lastname: lastname
  //   })
  // }

  // setMail = (mail) => {
  //   console.log(mail)
  //   this.setState({
  //     email: mail
  //   })
  //   console.log(this.state)
  // }
  // setPhone = (phone) => {
  //   this.setState({
  //     phone: phone
  //   })
  // }


  render() {
    return(
      <View style={styles.container}>
       <Input
            placeholder='First Name'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(name) => this.props.setFirstname(name)}
            // onSubmitEditing={(text) => this.setText(text, 'firstname')}
          />
          <Input
            placeholder='Last Name'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(name) => this.props.setLastname(name)}
            // onSubmitEditing={(text) => this.setText(text, 'lastname')}
          />
          <Input
            placeholder='Email Address'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(mail) => this.props.setMail(mail)}
            // onSubmitEditing={(text) => this.setText(text, 'email')}
          />
          <Input
          placeholder='Phone Number'
          // errorMessage='sorry no name'
          // errorStyle={{color: 'red'}}
          inputStyle={styles.inputText}
          inputContainerStyle={styles.inputContainerStyle}
          onChangeText={(phone) => this.props.setPhone(phone)}
          // onSubmitEditing={(text) => this.setText(text, 'phonenumber')}
          />
    </View>
    )
  }
}

const DetailsInput = connect(null, mapDispatchToProps)(Details);

export default DetailsInput;

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