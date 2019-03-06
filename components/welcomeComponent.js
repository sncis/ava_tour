import React, { Component }from 'react';
import { StyleSheet , View, Button, Text, Image } from 'react-native';

const WelcomeComponent = () => (
  <View style = {styles.container}>
      <View style ={[styles.container,{flex:1}]}>
        <Text 
        style={styles.welcomeText}>
        Welcome to 
        </Text>
    </View>
  
    <View style = {
      {flex:2}
    }>
      <Image 
          style={styles.avaLogo}
          source={require("../assets/images/logo-400.png")}>
          </Image>
    </View>
      
    <View style = {
      {
        flex:1,
        paddingTop:30,
        paddingBottom:10,
      }
    }>
    
    <Button 
      style={styles.startButton}
      onPress={() =>{}}
      title="Let's start"
      />
    </View>
</View>
);

export default WelcomeComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
    marginBottom : 48,
  },
  welcomeText:{  
    color: "black",
    fontWeight: "500",
    fontSize: 36,
    textAlign: 'center',
  },
  startButton:{
    color: "blue",
  },
  avaLogo:{
    resizeMode: 'stretch'
    
  },
  
});