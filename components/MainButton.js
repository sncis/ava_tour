import React, { Component} from 'react';
import {connect} from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const mapStateToProps = (state) => {
  return{
    active: state.activateShowToursButton,
    unselected: state.unselectAll,
  }
}

export class MainBut extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    this.props.unselectAll && console.log('unselect works')
    return(
      <TouchableOpacity style={!this.props.active || this.props.unselected ? styles.buttonInactive : styles.buttonActive} onPress={this.props.pressFunction} disabled={!this.props.active}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity> 

    )
  }
  
}


const MainButton = connect(mapStateToProps, null)(MainBut);
export default MainButton;

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#353B50',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
    width: 300,
    alignSelf: 'center',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInactive: {
    backgroundColor: '#C4C4C4',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
    width: 300,
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