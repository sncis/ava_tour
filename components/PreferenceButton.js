import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

export default class PreferenceButton extends Component {
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
    // const image = `../assets/images/${this.props.preferenceName}_icon.png`

    // let image;
    // console.log(image)
    return(
      <TouchableOpacity 
        style={this.state.selected ? styles.buttonSelected : styles.buttonUnselected}
        onPress={() => this.toogleSelectionChange()}>
        <View style={styles.iconWrapper}>
          {/* <Image source={{ image }} style={styles.icon}/> */}
          <Image source={{ uri: "../assets/images/History_icon.png"}} style={styles.icon}/>

          <Text style={this.state.selected ? styles.buttonTextSelected : styles.buttonTextUnselected}>{this.props.preferenceName}</Text>
        </View>
     </TouchableOpacity> 

    )
  }
};

const styles= StyleSheet.create({
  iconWrapper:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  buttonUnselected:{
    backgroundColor:'lightgrey',
    margin: 20,
    padding: 10,
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
    padding: 10,
    width: Dimensions.get('window').width /2 - 40,
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 11,
    shadowRadius: 1,
    elevation:10,
   
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  buttonTextUselected: {
    textAlign: 'center'
  },
  buttonTextSelected: {
    color: "white"
  }
})
