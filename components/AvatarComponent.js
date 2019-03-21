import React from 'react';
import { View, Text, StyleSheet, Image}  from 'react-native';

const AvatarComponent = (props) => (
  <View style={styles.imageContainer}>
    <Image source={require('../assets/images/Bavarian-avatar.jpg')} style={styles.avatar}/>
    <Text style={styles.text}>{props.text} </Text>
 </View>
)

export default AvatarComponent;


const styles = StyleSheet.create({
  imageContainer: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%'
    
  },
  avatar: {
    alignSelf: 'center',
    height:120,
    width: '60%',
    resizeMode: 'contain',
  },
  text: {
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    fontWeight: '300',
    color: 'black',
    fontSize: 16,
    marginTop:'1%',
    marginBottom: '10%'
  }
})