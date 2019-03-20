import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Dimensions } from 'react-native';
import uuidv1 from "uuid";
import { connect} from 'react-redux';
import PreferenceButton from './PreferenceButton';
import AvatarComponent from './AvatarComponent';
import MainButton from './MainButton';
import { setPreferences, clearPreferences } from '../store/actions/actions';


const mapDispatchToProps = dispatch => {
  return{
    setPreferences: (preferences) => dispatch(setPreferences(preferences)),
    clearPreferences: () => dispatch(clearPreferences()),
  }
}

const mapStateToProps = (state) => {
  return {
    prefs: state.selectedPreferences,
  }
}


export class PreferenceSelectionForm extends Component {
  componentWillMount = () => {
    this.selectedPreferences = new Set()
  }

  componentWillUnmount = () => {
     console.log('component unmounted')
  }
  
  getPreferences = () => {
    const preferences = ['Museum', 'Music', 'History', 'Local Food', 'Street Art', 'Parks'];
    return preferences;
  }

  toogleSelectPreference = (label) => {
    if(this.selectedPreferences.has(label)){
      this.selectedPreferences.delete(label)
    }else{
      this.selectedPreferences.add(label);
    }
  }

  createPreferenceButton = (preference) => (
    <PreferenceButton preferenceName={preference} handelPreferenceChange={() => this.toogleSelectPreference(preference)} key={uuidv1()}
    />
  );

  handleSubmit = () => {
    this.props.clearPreferences();

    this.props.setPreferences(this.selectedPreferences);
    
    this.selectedPreferences = new Set();
    this.props.navigateToResults()
  }

  render(){
    return(
      <View>
       <AvatarComponent text='Hey, I am Anton, your personal guide. Select your interests and I will prepare some Tours for you' />

        <View style={styles.preferenceContainer}> 
          {this.getPreferences().map((preference) => this.createPreferenceButton(preference))}
        </View>
        <View style={styles.button}>
         <MainButton text='Show Tours' pressFunction={() => this.handleSubmit()} />

        </View>
       
      </View>

    )
  }
}


const PreferenceSelection = connect(mapStateToProps,
  mapDispatchToProps)(PreferenceSelectionForm)

export default PreferenceSelection;

const styles= StyleSheet.create({
  preferenceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textSection:{
    marginBottom: '10%',
  },
  button: {
    marginTop: '20%',
  }
})
