import React, { Component }from 'react';
import { StyleSheet , View, Button, Text } from 'react-native';

const WelcomeComponent = () => (
  <View>
    <Text style={styles.welcomeText}>Welcome
    </Text>
    <Button 
      style={styles.startButton}
      onPress={() =>{}}
      title="lets start"
      />

  </View>
);

export default WelcomeComponent;

const styles = StyleSheet.create({
  welcomeText:{
    color: "black",
    fontWeight: "500",
    fontSize: 12,
  },
  startButton:{
    color: "blue",

  },
});