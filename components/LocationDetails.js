import React from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import PreviewHeaderImageComponent from './PreviewHeaderImageComponent';


const LocationDetails = () => (
  <ScrollView style={styles.container}>
    <View>
      <View> 
        <PreviewHeaderImageComponent  />
      </View>
        
      <View style={styles.iconSection}>
        <Icon name='schedule'/>
        <Icon name='link' />

      </View>
     
      <View style={styles.ratingSection}>
        <Text style={styles.ratingText}>People rated this tour with</Text>
        <Text style={styles.ratingNum}>4.1</Text>
        <Rating 
          style={styles.star}
          imageSize={10}
          readonly
          startingValue={4}
          />
      </View>

      <View style={styles.description}>
        <Text style={styles.discriptionText}>BMW AG originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916 Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.</Text>
      </View>
      <View>
        <View style={styles.whatBorder}>
          <Text style={styles.whatToDo}>What to do</Text>
        </View>
        <Text style={styles.whatToDoText}>Here you can rent a BMW-car for your trip and BMW world can be easily reached via public transport (U3 Olympiazentrum) 
        </Text>
      </View>

    </View>
  </ScrollView>
  
);

export default LocationDetails;


const styles=StyleSheet.create({
  container: {
    padding: 15,
  },
  iconSection:{
    flexDirection: 'row',
    marginTop:15,
    marginBottom: 15,

  },
  ratingSection: {
    flexDirection: 'row',
    marginTop:20,
    marginBottom:20,

  },
  ratingText: {
    marginRight:50,
  },
  ratingNum: {
    marginRight:10,

  },
  description: {

  },
  descriptionText: {
    // lineHeight:1.5,
  },
  start: {
    height:10,
  },
  whatToDo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
  },
  whatBorder:{
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    borderStyle: 'solid',

  },
  whatToDoText: {
    marginTop: 10,    
    marginBottom:100,

  }
})