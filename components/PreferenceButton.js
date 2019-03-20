import React, { Component } from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';


const mapStateToProps= (state) => {
  return{
    unselect: state.unselectAll,
  }
}


export class PreferenceBut extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false
    }
  }

  toogleSelectionChange = () => {
    const { handelPreferenceChange, preferenceName } = this.props;
    this.setState(({selected}) => ({
      selected: !selected
    }));
    return handelPreferenceChange(preferenceName);
  }

  render(){
    const image = `require("../assets/images/${this.props.preferenceName}_icon.png")`
    return(
      <TouchableOpacity 
        style={!this.state.selected || this.props.unselect ? styles.buttonUnselected : styles.buttonSelected}
        onPress={() => this.toogleSelectionChange()}>
        <View style={styles.iconWrapper}>
          {/* <Image source={{ image }} style={styles.icon}/> */}
          <Image source={require("../assets/images/History_icon.png")} style={styles.icon}/>

          <Text style={!this.state.selected || this.props.unselect ? styles.buttonTextUnselected : styles.buttonTextSelected}>{this.props.preferenceName}</Text>
        </View>
     </TouchableOpacity> 

    )
  }
};


const PreferenceButton = connect(mapStateToProps, null)(PreferenceBut)

export default PreferenceButton

const styles= StyleSheet.create({
  iconWrapper:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  buttonUnselected:{
    backgroundColor:'#C4C4C4',
    margin: '3%',
    // padding: '10%',
    width: '25%',
    aspectRatio: 2 / 2,
    borderRadius: 3,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 11,
    shadowRadius: 1,
    elevation:10,
  },
  buttonSelected: {
    backgroundColor:'#353B50',
    margin: '3%',
    // padding: '10%',
    width: '25%',
    aspectRatio: 2 /2,
    borderRadius: 3,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 11,
    shadowRadius: 1,
    elevation:10,
   
  },
  icon: {
    width: 45,
    height: 45,
    marginTop: '15%',
    marginBottom: '10%',
    resizeMode: 'contain'
  },
  buttonTextUselected: {
    textAlign: 'center',
    fontWeight: 'bold'
    // fontSize: 12,
  },
  buttonTextSelected: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
