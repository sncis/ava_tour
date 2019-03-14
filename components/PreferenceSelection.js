import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Dimensions } from 'react-native';
import uuidv1 from "uuid";
import PreferenceButton from './PreferenceButton';
import AvatarComponent from './AvatarComponent';
import MainButton from './MainButton';


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
    console.log(`state from toogle ${this.state.preferences.size}`)
  }

  createPreferenceButton = (preference) => (
    <PreferenceButton preferenceName={preference} handelPreferenceChange={() => this.toogleSelectPreference(preference)} key={uuidv1()}
    />
  );

  setPreferences = () => {
    console.log(`state from setPreferences ${this.state.preferences.size}`);
    this.state.preferences.clear();
    console.log(this.state.preferences.size)
    return this.props.navigateToResults();
  }


  render(){
    return(
      <View>
       <AvatarComponent text='Hey, I am Anton, your personal guide. Select your interests and I will prepare some Tours for you' />

        <View style={styles.preferenceContainer}> 
          {this.getPreferences().map((preference) => this.createPreferenceButton(preference))}
        </View>
        <MainButton text='See Results' pressFunction={() => this.setPreferences()}/>
       
      </View>

    )
  }
}


const styles= StyleSheet.create({
  preferenceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textSection:{
    marginBottom:40,
  },
})
