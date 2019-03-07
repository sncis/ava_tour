import React, { Component }from 'react';
import { StyleSheet , View, Button, Text, Image, ImageBackground } from 'react-native';

export default class WelcomeComponent extends Component {
  render(){
    return(
    <ImageBackground source={require("../assets/images/welcome_background.png")} 
     style={{width: '100%', height: '100%'}}>
      <View
        style= {{ flex:1, flexDirection: 'column', justifyContent: 'space-evenly'}}
        >
        <View >
          <Text style={styles.welcomeText}>
            Welcome to
          </Text>
        </View>
        <View>
          <Image source = {require("../assets/images/logo-400.png")}> 
          </Image>
        </View>
        <View>
          <Button title="let's Start" onPress={this.props.goToTourOptions} />
        </View>
    </View>
    </ImageBackground>
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
    width: '90%',
    color: "blue",
  },
  avaLogo:{
    resizeMode: 'stretch',
    width: '80%',
    
  },
  
});