import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const SelectionOverlay = (props) => {
  return(
    
      <View style={styles.overlayBackground}>
      <View style={styles.overlay}>
        <Text style={styles.headline}>Shall I offer you a car?</Text>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.forNo}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>    

  )
};


const styles = StyleSheet.create({
  overlayBackground:{
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  
  },
  overlay:{
    zIndex: 10,
    backgroundColor:'lightgrey',
    marginTop: 150,
    marginLeft:30,
    marginRight:30,
    alignItems: 'center',
    width: Dimensions.get('window').width - 60,
  },
  headline: {
    fontSize: 20,
    fontWeight: '500',
    width: '40%',
    textAlign: 'center',
    marginTop:50,
    marginBottom: 30,
  },
  buttonSection: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  button: {
    width: '30%',
    backgroundColor: 'black',
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'500',
    textAlign: 'center',
  }
})

export default SelectionOverlay;
