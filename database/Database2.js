
import React, { Component } from 'react'
import autobind from 'class-autobind';

import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Poi,Tour,StateSource} from './Data';
import {CurrentGps,getPlaceDetails, logError} from './GApi';
class Database{

//// hardCodedStuff
hardcodedPoiDefs(){
    return [
       {
           stayTime        : 90*60, 
           poiName         : 'BMW World',
           poiLocation     : "48.177016,11.5565994",
           poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
           poiBriefly      : "BMW World is provided by famous German car manufacturer",
           poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
       {
           stayTime        : 45*60,
           poiName         : 'Schlossanlage Schleißheim',
           poiLocation     : "48.2477609,11.5662204",
           poiDescription  : "Schleißheim palace complex was founded by Duke Wilhelm V of Bavaria (1548-1626), who in 1597 purchased the isolated moorland farm of Schleißheim with its St Margaret's Chapel for a large sum of money from the Freising Cathedral chapter.",
           poiBriefly      : "Schleißheim palace complex founded by Duke Wilhelm V",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg/700px-Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg"
       },
       {
           stayTime        : 120*60,
           poiName         : 'Starnberg',
           poiLocation     : "48.0061613,11.2583466",
           poiDescription  : "Starnberg is a small city 25 km away from munich and the region around 'Starnberger See' is famous for the people living here: sportsmen, actress, writers, filmregiseur and what most people don´t know: Luitpold Prinz von Bayern , the great-grandson of the last king of bavaria (Ludwig III.), also is from Starnberg",
           poiBriefly      : "Starnberg is a small city 25 km away from munich",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Starnberg-2.jpg/600px-Starnberg-2.jpg"
       },
       {
           stayTime        : 75*60,
           poiName         : 'Kloster Andechs',
           poiLocation     : "47.97448,11.1806231",
           poiDescription  : "Seen from miles around atop Holy Mountain above the eastern bank of Ammer Lake, Andechs Monastery is the oldest pilgrimage church in Bavaria and since 1850, an asset of the Benedictine monastery, St. Boniface, in Munich.",
           poiBriefly      : "Seen from miles around atop Holy Mountain",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Deutschland%2C_Andechs%2C_Klosterkirche.JPG/440px-Deutschland%2C_Andechs%2C_Klosterkirche.JPG"
       },
       {
           stayTime        : 120*60,
           poiName         : 'KZ Dachau',
           poiLocation     : "48.2701275,11.4660784",
           poiDescription  : "On March 22, 1933, a few weeks after Adolf Hitler had been appointed Reich Chancellor, a concentration camp for political prisoners was set up in Dachau. This camp served as a model for all later concentration camps and as a 'school of violence' for the SS men under whose command it stood. In the twelve years of its existence over 200.000 persons from all over Europe were imprisoned here and in the numerous subsidary camps. 41.500 were murdered. On April 29 1945, American troops liberated the survivors.",
           poiBriefly      : "concentration camp Dachau in second World War",
           poiImageUrl     : "https://de.wikipedia.org/wiki/Datei:Dachau_watchtower_b_1945-04.jpg"
       },
       {
           stayTime        : 50*60,
           poiName         : 'Poschinger Weiher',
           poiLocation     : "48.200995,11.6411327",
           poiDescription  : "Poschinger Weiher is a lake, where you can also swim. Near the lake therer are two small hills, which are build of Schutt frojm the second wolrd war. On top of one of them you can have a view of munich.",
           poiBriefly      : "Lake surrounded by small schutt hills. Nice view of munich.",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Poschinger-Weiher-2006-07-18.jpg/600px-Poschinger-Weiher-2006-07-18.jpg"
       },
       {
           stayTime        : 83*60,
           poiName         : 'Bräustüberl Tegernsee',
           poiLocation     : "47.7076548,11.7539559",
           poiDescription  : "Herzogliches Bräustüberl Tegernsee ('Ducal Brewery of Tegernsee') is a brewery in Tegernsee, Bavaria, Germany.,The brewery traces its roots back to a brewery that was allegedly founded in the year 1050 on the Tegernsee, in connection with Tegernsee Abbey, a Benedictine abbey that was founded in 746. The current brewery can trace its history back to 1675, when abbot Bernd Wenzel relocated the monastery's brewing right from Holzkirchen to Tegernsee. The brewery has operated under a number of different names, including Tegernseer Klosterbrauerei ('Tegernsee Monastic Brewery'). After the brewery was secularized at the beginning of the 19th century, the brewery was purchased by Maximilian I Joseph of Bavaria from Karl Joseph von Drechsel and incorporated under the name Königlich braunes Brauhaus Tegernsee ('Royal Brown Brewhouse of Tegernsee'). The brewery later changed its name to Herzoglich bayerisches Brauhaus ('Ducal Bavarian Brewhouse'). Since then, the brewery has been in the ownership of the House of Wittelsbach. The brewery is currently run by Duchess Maria Anna in Bayern, daughter of Prince Max, Duke in Bavaria.",
           poiBriefly      : "'Ducal Brewery of Tegernsee' is a brewery in Tegernsee",
           poiImageUrl     : "https://bayern.infomaxnet.de/data/mediadb/cms_pictures/generated/dba657a28419a7dd8ff17ae510a16095.jpg"
       },
       {
           stayTime        : 80*60,
           poiName         : 'Museum Bad Tölz',
           poiLocation     : "47.7606962,11.5580924",
           poiDescription  : "The Stadtmuseum Bad Tölz presents a cross-section of the history of the Tölzer Land on three exhibition levels, with a history of more than 100 years.",
           poiBriefly      : "museum with three exhibition levels.",
           poiImageUrl     : "https://www.museen-in-bayern.de/uploads/tx_landesstelle/images/Bad_Toelz_Stadtmuseum_Bad_Toelz_Museumsphoto_Fassade.jpg"
       },
   ];
}


hardCodedTourDefinitions(){
    return [
        [
            0,1,2,3
        ],
        [
            4,5,1
        ],
        [
            0,6,7,2
        ]   
    ];
}
 hardCodedTourNames(){
    return [
        'nature, beergarden, seightseeing',
        'history and beergarden at lake',
        'car driving and bavarian lakes',        
    ];
 } 

/////////////////// END HARD-CODED ///////////


createPoiInitPromise(poiToInit){
    const onPoiDone = ((poiInstance,error)=>{
        if(error){
           // console.log("\n-----poiInitError "+poiInstance.poiName);
            //console.log(error);
            return;
        }
       // console.log("\\+++++poiDone  got this");
       // console.log(poiInstance);
        
        this.poiMap.set(poiInstance.getPlaceId(),poiInstance);
    });
    return poiToInit.createInitPromise(onPoiDone);
}

initPois(){
    //console.log("\npois descriptions");
    //console.log(thizz.poiDefs);
    let poiPromises = [];
    //console.log("pds\n");
    //console.log(poiDefs);
    //console.log("\n=========================================");
    //console.log("\n=========================================");
    
    //console.log(this.hardcodedPoiDefs());
    
    //console.log("\n=========================================");
    const poiDefs = this.hardcodedPoiDefs();
    var i;
    const once = false; // just for testing
    for( i in poiDefs){
        //console.log(this.hardcodedPoiDefs());
        let pd = poiDefs[i];
       //console.log("pd poiname\n");
       //console.log(pd);
        
        
        const poiToInit = new Poi(
            pd.poiName,
            pd.poiLocation,
            null,
            pd.poiBriefly,
            pd.poiDescription,
            pd.poiImageUrl,
            pd.stayTime
        );
       // console.log(poiToInit);
        
        this.poiList.push(poiToInit);
        //console.log(this.poiList);
        
        const poiPromise = poiToInit.createPoiInitPromise((filledPoi, error)=>{
            if(error){
                console.log("\n----------poi init error "+filledPoi.poiName);
                console.log(error);
                console.log("\n-------------------------------------------");
                return;
            }
            this.poiMap.set(filledPoi.getPlaceId(),filledPoi);
        });

        poiPromises.push(poiPromise);
        if(once){
            console.log("??????????????created promises ="+poiPromises.length);
            
            return poiPromises;
        }
    }
        
    // create all pois
    return poiPromises;
}

initToursPromises(){
    const tourDefs = this.hardCodedTourDefinitions();
    const tourNames = this.hardCodedTourDefinitions();
    let promises = [];
    for(let ti in tourDefs){
        const tourName = tourNames[ti];
        const td = tourDefs[ti];
        //console.log(td);
        
        let tourPois = [];
        for(let tpi in td){
          
            tourPois.push(this.poiList[tpi]);
        }

        const tour = new Tour(
            tourName,
            this.hourPrice,
            Math.random()*3+2,
            tourPois
        );
        this.tourMap.set(tourName,tour);
        promises.push(tour.calculateTour(true));
    }
    return promises;
}

     // components are rergistering here 
     stateSource = new StateSource();

     poiMap = new Map();
     tourMap = new Map();
     nameOfCity = 'munic';
     tourHourPrize = 150;
     instanceData = null;
     poiList = [];
     hourPrice = 60;
     
     constructor(){
        autobind(this);
        console.log('\n starting init of pois');
        
        Promise.all(this.initPois())
        .then(Promise.all(this.initToursPromises()))
        .then(()=>{
            console.log('\n done init of pois\nstarting init of touts');
            Promise.all(this.initToursPromises())
        })
        .then(()=>{
            console.log('\n done init of tours');
            this.stateSource.fireStateChange(this);
        })
        .catch((error)=>{
            console.log("############### Database Init error POIS/Tours");
            console.log(error);
            this.stateSource.fireStateChange(error);
            return;
        });
         
     }

     

     /**
      * bound to instance
      * return all aviable tours: getTours()
      */
     getTours(){
         return this.tourMap.values();
     }
     /**
      * bound to instance
      * return a single tour by tourName: getTour(tourName)
      */
     getTour(tourName){
         return this.tourMap.get(tourName);
     }
     /**
      * bound to instance
      * return all aviable tour names : getTourNames()
      */
     getTourNames(){
        return this.tourMap.keys();
     }
     getPoiMap(){
         return this.poiMap();
     }
}


const dbInstance = new Database();

export default dbInstance;
    

