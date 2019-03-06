import React, { Component }from 'react';
import { StyleSheet , View, Button, Text } from 'react-native';

export default class WelcomeComponent extends Component {
  render(){
    return(
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Button title="lets Start" onPress={this.props.goToTourOptions} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeText:{
    
    color: "black",
    fontWeight: "500",
    fontSize: 12,
  },
  startButton:{
    marginTop: 100,
    color: "blue",

  },
});