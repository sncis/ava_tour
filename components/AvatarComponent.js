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
    margin: 40,
  },
  avatar: {
    alignSelf: 'center',
    height:150,
    width: '60%',
  },
  text: {
    textAlign: 'center',
    fontWeight: '300',
    color: 'black',
    fontSize: 20,
    marginTop:30,
  }
})