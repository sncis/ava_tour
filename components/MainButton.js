import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const MainButton =(props) => (
  <TouchableOpacity style={styles.button} onPress={props.pressFunction}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity> 
)

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },

})