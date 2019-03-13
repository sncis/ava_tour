import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';


export default class PreferenceButton extends Component {
  state = {
      selected: false
  }
  
  toogleSelectionChange= () => {
    const { handelPreferenceChange, preferenceName } = this.props;
    this.setState(({selected}) => ({
      selected: !selected
    }));
    return handelPreferenceChange(preferenceName);
  }

  render(){
    return(
      <TouchableOpacity 
        style={this.state.selected ? styles.buttonSelected : styles.buttonUnselected}
        onPress={() => this.toogleSelectionChange()}>
       <Text style={this.state.selected ? styles.buttonTextSelected : styles.buttonTextUnselected}>{this.props.preferenceName}</Text>
     </TouchableOpacity> 

    )
  }
};

const styles= StyleSheet.create({
  preferenceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonUnselected:{
    backgroundColor:'lightgrey',
    margin: 20,
    padding: 20,
    width: Dimensions.get('window').width /2 - 40,
    borderRadius: 3,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 11,
    shadowRadius: 1,
    elevation:10,
  },
  buttonSelected: {
    backgroundColor:'blue',
    margin: 20,
    padding: 20,
    width: Dimensions.get('window').width /2 - 40,
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 11,
    shadowRadius: 1,
    elevation:10,
   
  },
  buttonTextUselected: {
    textAlign: 'center'
  },
  buttonTextSelected: {
    color: "white"
  }
})
