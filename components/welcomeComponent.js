import React, { Component }from 'react';
import { StyleSheet , View, Button, Text, Image } from 'react-native';

export default class WelcomeComponent extends Component {
  render(){
    return(
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text> test changes</Text>
        <Button title="lets Start" onPress={this.props.goToTourOptions} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeText:{
    
    color: "black",
    fontWeight: "500",
    fontSize: 36,
    textAlign: 'center',
  },
  startButton:{
    marginTop: 100,
    color: "blue",
  },
  avaLogo:{
    resizeMode: 'stretch'
    
  },
  
});