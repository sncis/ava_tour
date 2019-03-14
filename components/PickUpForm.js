import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Input } from 'react-native-elements';



export default class PickUpForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      date: new Date(),
      time: new Date(),
      text: ''
    }
  }

  onDateChange = (date) =>{
    console.log(date)
    this.setState({
      date: date
    })
  }
  onTimeChange = (time) =>{
    this.setState({
      time: time
    })
  }
  setText = (text) =>{
    this.setState({
      text: text
    })
    console.log(`state ${this.state.text}`)
  }


  render(){
    return(
      <View style={styles.formSection}>
        <Text style={styles.text}>When do you want to start the tour?</Text>

        <View style={styles.datePickerSection}>
          <DatePicker
            style={{...styles.datePicker, borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
            date={ this.state.date}
            format='DD.MM.YYYY'
            onDateChange={(date) => this.onDateChange(date)}
            mode='date'
            confirmBtnText='Done'
            cancelBtnText="Cancle"
            showIcon={false}
          />
          <DatePicker
            style={{...styles.datePicker, borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
            date={this.state.time}
            mode='time'
            format='HH:mm'
            onDateChange={(time) => this.onTimeChange(time)}
            time={this.state.time}
            showIcon={false}
            confirmBtnText='Done'
            cancelBtnText='Cancle'
            placeholder='select time'
          />
        </View>
       
        <View>
          <Text style={styles.text}>Where shall I pick you up?</Text>
          <Input
            placeholder='Mies-van-der-Rohe-Strasse'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => this.setText(text)}
            onSubmitEditing={(text) =>this.setText(text)}
          />
          <Text style={styles.text}>For how any people?</Text>
          <Input
            placeholder='1 - 4'
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => this.setText(text)}
            onSubmitEditing={(text) =>this.setText(text)}
          />
          <Text style={styles.text}>How could we excite you?</Text>
          <Input
            placeholder=''
            // errorMessage='sorry no name'
            // errorStyle={{color: 'red'}}
            inputStyle={styles.inputText}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => this.setText(text)}
            onSubmitEditing={(text) =>this.setText(text)}
          />
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  formSection: {
    padding: 15,
  },
  datePickerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingLeft:10,
    paddingRight: 10
  },
  datePicker: {
    height: 30,
    width: Dimensions.get('window').width / 2 - 30,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  text: {
    marginBottom: 5,
    marginLeft: 12,
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