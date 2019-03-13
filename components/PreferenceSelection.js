import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Dimensions } from 'react-native';
import uuidv1 from "uuid";
import PreferenceButton from './PreferenceButton';



export default class PreferenceSelection extends Component {
  constructor(props){
    super(props);
    this.state = {
      preferences: new Set(),    
    }
  }
  

  getPreferences = () => {
    const preferences = ['Museum', 'Music', 'History', 'Local Food', 'Street Art', 'Parks'];
    return preferences;
  }

  toogleSelectPreference = (label) => {
    if(this.state.preferences.has(label)){
      this.state.preferences.delete(label)
    }else{
      this.state.preferences.add(label);
    }
  }

  createPreferenceButton = (preference) => (
    <PreferenceButton preferenceName={preference} handelPreferenceChange={() => this.toogleSelectPreference(preference)} key={uuidv1()}
    />
  );

  setPreferences = () => {
    console.log(this.state.preferences);
    return this.props.navigateToResults();
  }


  render(){
    return(
      <View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/logo-300.png')} style={styles.avatar}/>
        </View>
        <View style={styles.textSection}>
        <Text style={styles.text}>
          Please select your interests and I will prepare some Tours for you
        </Text>
        
        </View>

        <View style={styles.preferenceContainer}> 
          {this.getPreferences().map((preference) => this.createPreferenceButton(preference))}
        </View>
        <TouchableOpacity style={styles.seeResultButton} onPress={() => this.setPreferences()}>
          <Text style={styles.seeResultButtonText}>See Results</Text>
        </TouchableOpacity>
      </View>

    )
  }
}


const styles= StyleSheet.create({
  preferenceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageContainer: {
    backgroundColor: 'green',
    margin: 50,

  },
  avatar: {
    alignSelf: 'center',
    
  },
  textSection:{
    margin:50,
  },
  text:{
    textAlign: 'center',
    fontWeight: '300',
    color: 'black',
    fontSize: 24
  },
  seeResultButton: {
    backgroundColor: 'black',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation:10,
    padding:10,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    marginTop:50,    
  },
  seeResultButtonText: {
    textAlign: 'center',
    color:'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

})
