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
    backgroundColor: 'transparent',
    marginTop: '5%',
    marginBottom: '1%',
    marginLeft: '10%',
    marginRight: '10%'
    
  },
  avatar: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  text: {
    alignSelf: 'center',
    width: '90%',
    lineHeight: 20,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: '400',
    color: 'black',
    fontSize: 16,
    marginTop: '5%',
  }
})