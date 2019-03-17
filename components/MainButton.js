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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
    padding:10,
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    borderRadius: 3,
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