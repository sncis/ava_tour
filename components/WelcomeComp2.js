import React, { Component }from 'react';
import { StyleSheet , View, Button, Text, Image, ImageBackground } from 'react-native';
import dbInstance from '../database/Database2';


export default class WelcomeComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
      }
    }
  

  componentDidMount = () => {
    dbInstance.stateSource.addListener(WelcomeComponent, (db) => {
      this.setState({
          active: true,
      })
    })
  }
  render(){
    return(
    <ImageBackground source={require("../assets/images/welcome_background.png")} 
     style={{width: '100%', height: '100%'}}>
      <View
        style= {{ flex:1, flexDirection: 'column', justifyContent: 'space-evenly'}}
        >
        <View>
          <Text style={styles.welcomeText}>
            Welcome to
          </Text>
        </View>
        <View>
          <View>
            <Image source = {require("../assets/images/logo-400.png")} style={styles.avaLogo}> 
            </Image>
          </View>
          <View>
            <Text style={styles.welcomeDescription}>Your personalized car tour in Munich</Text>
          </View>

          </View>
        {/* <View >
          <Image source = {require("../assets/images/logo-400.png")} style={styles.avaLogo}> 
          </Image>
        </View>
        <View>
          <Text style={styles.welcomeDescription}>Your personalized car tour in Munich</Text>
        </View> */}
        <View>
          <Button title="let's Start" onPress={this.props.goToPreferenceSelection} />
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
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '80%',
    marginBottom: 20,
  },
  welcomeDescription:{
    textAlign: 'center',
    width: '40%',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  }
  
});