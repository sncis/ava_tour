import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default class IntroScreens extends Component {
  render(){
    return(
      <View>
        <ScrollView horizontal={true} pagingEnabled >
          <Image source={require('../assets/images/munich.jpg') } style={styles.images} />
          <Image source={require('../assets/images/backgroundImage.jpeg') } style={styles.images} />
          
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('PreferenceSelection')} >
           <Image source={require('../assets/images/munich.jpg') } style={styles.images} />
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  images: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  }
})