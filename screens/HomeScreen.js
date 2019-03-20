import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import WelcomeComponent from "../components/WelcomeComponent";

class HomeScreen extends Component {
  render() {
    return(
      // <WelcomeComponent goToTourOptions={() => this.props.navigation.navigate('TourOptions')}/> 
      <View style={styles.container}>
        <WelcomeComponent goToPreferenceSelection={() => this.props.navigation.navigate('PreferenceSelection')}/> 
      </View>

    )
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }

})