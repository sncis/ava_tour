
import{hardcodedPoiDefs} from './PoiDef'

import {Poi,Tour,StateSource} from './Data';
import {CurrentGps,getPlaceDetails, logError,currentLatLonPromise, createResultPromise} from './GApi';
class Database{



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


initPois= ()=>{
    //console.log("\npois descriptions");
    //console.log(thizz.poiDefs);
    let poiPromises = [];
    //console.log("pds\n");
    //console.log(poiDefs);
    //console.log("\n=========================================");
    //console.log("\n=========================================");
    
    //console.log(this.hardcodedPoiDefs());
    
    //console.log("\n=========================================");
    const poiDefs = hardcodedPoiDefs();
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
         
        console.log('\n starting init of pois');
        
        Promise.all(this.initPois())
        .then(Promise.all(this.initToursPromises()))
        .then(()=>{
            console.log('\n done init of pois\nstarting init of touts');

            // Promise.all(this.initToursPromises())
            console.log("hardcoded tour init is skipped\n generated will come");
            return createResultPromise(true,true);
            
        })
        .then(()=>{
            console.log('\n done init of tours');
            this.stateSource.fireStateChange(this);
        })
        .catch((error)=>{
            console.log("############### Database Init error POIS/Tours");
            console.log(error);
            this.stateSource.fireStateChange(error);
        });
        // try location
        currentLatLonPromise()
        .then((latLon)=>{
            console.log("__________________________________\n");
            console.log("currentLocation = "+latLon);
            console.log("\n__________________________________\n");
            
            
        }, (rejectedValue)=>{
            console.log("__________________________________\n");
            console.log("currentLocation = error");
            console.log(rejectedValue);
            console.log("\n__________________________________\n");
            
        });
         
     }

     

     /**
      * DEPRECATED by now, Tours will be generated
      * deivers empty 
      * bound to instance
      * return all aviable tours: getTours()
      */
     getTours(){
         return this.tourMap.values();
     }
     /**
      * DEPRECATED by now, Tours will be generated
      * deivers empty 
      * bound to instance
      * return a single tour by tourName: getTour(tourName)
      */
     getTour(tourName){
         return this.tourMap.get(tourName);
     }
     /**
      * DEPRECATED by now, Tours will be generated
      * deivers empty 
      * bound to instance
      * return all aviable tour names : getTourNames()
      */
     getTourNames(){
        return this.tourMap.keys();
     }
     /**
      * return all aviable pois, keys are theirs placeIds
      */
     getPoiMap(){
         return this.poiMap();
     }



    currentRoute = null;
    currentPoiIndex = null;
    // set xurrent route name
    setCurrentRouteName(routeName){
        currentRoute = routeName;
        currentPoiIndex = null;
    }
    getCurrentRouteName(){
        return currentRoute;
    }
    
    setCurrentPoiIndex(poiIndex){
       // if(this.currentRoute == null){
       //     throw new Error("set current route before poi index");
       // }
        currentPoiIndex = poiIndex;
    }
    getCurrentRouteIndex(){
        return currentPoiIndex;
    }

     // needs citi name for future use
    // returns array of map entries with given keys
    // routeName,PoiName,poiLocation,poiBriefDescription,poiDescription,poiImageUrl
    getAllRoutesContent(){
        return this.hardcodedPois();
    }
}


const dbInstance = new Database();

export default dbInstance;
    

