import {CurrentGps,resolveGPoiData, GRoutes, createResultPromise, currentLatLonPromise} from './GApi';

import axios from 'axios';

export class Poi{
    poiName="undefined";
    latLon;
    usersText;
    briefDesc;
    descr;
    poiImageUrl;
    meanStay=0;
    poiData;
    placeId;
    
    stateSource = new StateSource();



    
    /**
     * depending on input the poi content is  created
     * @param {Sring} poiName is the name of poi, may be null for custom locations
     * @param {String} latLon comma sepatated latitude,longitude
     * @param {String} usersText if not null text input pointing to a poi 
     * @param {String} briefDesc poi in biref description
     * @param {String} descr longer content description 
     * @param {String} poiImageUrl pointing to a description image
     * @param {String or integer} meanStayTimeInSecs is the mean stay duration for this poi
     * */
     constructor(poiName,latLon,usersText,briefDesc,descr,poiImageUrl,meanStayTimeInSecs){
       
       //autobind(this);
       //console.log("POI::param poiname="+poiName);
       
       //console.log("\Poi paramter\n");
       //console.log(poiName);console.log(latLon);
       //console.log("\nbefore init\n");
       //console.log(this);
       this.poiName = poiName;
       this.latLon =  latLon;
       this.usersText    = usersText;
       this.briefDesc    = briefDesc;
       this.descr        = descr;
       this.poiImageUrl  = poiImageUrl;
       this.meanStay     = meanStayTimeInSecs;
       //console.log("\nafter init\n");
       //console.log(this);
    }

   
    


    /**
     * makes a update of poi using given location
     * if it is null so current location is used
     * @param {string} latLon like '48.1234,-10.1234'
     */
    updateFromLocation =(latLon)=>{
        this.poiName=null;
        this.usersText=null;
        this.briefDesc=this.descr="";
        this.stayTime=0;
        this.latLon=latLon;
        this.poiData=null;
        return new Promise((resolve,reject)=>{
            if(latLon){
                resolve(poi)
                return;
            }
            currentLatLonPromise()
            .then((latLon)=>{
                poi.latLon= latLon;
                resolve(poi);
            })
        })
        .then(createPoiInitPromise((poi,error)=>{
            if(error){
                poi.poiName="unknown";
            }else{
                poi.poiName=poi.getVicinity();
                }
            poi.stateSource.fireStateChange(poi);
        }))
        .catch((error)=>{
            poi.poiName="unknown";
            poi.stateSource.fireStateChange(poi);
        });

    }
    /**
     * makes a update of poi using given user text
     * if it is unknown so error state is set
     * @param {string} userText like 'marienplatz, munic'
     */
    updateFromUserTextPromise= (userText )=>{
        this.poiName=null;
            this.usersText=userText;
            this.briefDesc=this.descr="";
            this.stayTime=0;
            this.latLon=null;
            this.poiData=null;
        return createPoiInitPromise((poi,error)=>{
            if(error){
                poi.poiName="unknown";
            }else{
                poi.poiName=poi.getVicinity();
                poi.latLon= poi.getResponedLatLon();
            }
            poi.stateSource.fireStateChange(poi);
        });

    }
    /**
     * returns promis for fetching poi data
     * @param {callback} onInitDone onInitDone(thisInstance, error) error in any 
     */
    createPoiInitPromise= (onInitDone)=>{

        return new Promise((resolve,reject)=>{
            resolveGPoiData(this)
            .then((poiInstance)=>{
                if(onInitDone){
                    onInitDone(poiInstance,null);
                }
                this.stateSource.fireStateChange(poiInstance);
                resolve(poiInstance);
            })
            .catch((error)=>{
                if(onInitDone){
                    onInitDone(this,error);
                }
                this.stateSource.fireStateChange(this);
                reject(error);
            });
        });
    }

    ///////////// unbound method names starts with _ underscore!
    //// bounded without

    // get the arrival time of this poi in seconds since 1.1.1970
    
    getStayTimeinSeconds= ()=>{
        return this.meanStay;
    }

    getPhoneNumber=()=>{
        return this.poiData.formatted_address;
    }
    getPlaceId= ()=>{
        //console.log(this);
        return this.placeId;
    }
    getGoogleRating=()=>{
        return this.poiData.rating;
    }
    getGoogleRatingsTotal=()=>{
        return this.poiData.user_ratings_total;
    }
    getWebsite=()=>{
        return this.poiData.website;
    }
    // return array with photos - urls, if any empty array otherwise
    getPhotos=()=>{
        var result = [];
        this.poiData.photos.forEach(photoDescription => {
            result.push(
                'https://maps.googleapis.com/maps/api/place/photo?photoreference='+photoDescription.photo_reference+'&maxwidth='+photoDescription.width+'&key='+GOOGLE_API_KEY     
            );
        });
        return result;    
    }
    getVicinity=()=>{
        return this.poiData.vicinity;
    }

    getResponedLatLon=()=>{
        var lon = this.poiData.geometry.location.lon;
        var lat = this.poiData.geometry.location.lat;
        return lat+','+lon;
    }
    
}
 



/**
 * tourHop is belonging to a Tour instance
 * 
 */
export class TourHop {
    stateSource = new StateSource();
    /**
     * start Poi - location of this hop
     */
    startPoi = null; 
    /**
     * Next Tour Hop
     */
    nextTourHop = null;
    /**
     * arrvival time at start poi
     */
    arrivalTime = null;
    /**
     * time for stay at this poi
     */
    stayTime = 0;
    /**
     * distance to next hop
     */
    distanceToNextMeters = 0;
    /**
     * travel time to next hop
     */
    travelTime = 0;

    arrivalTimeT =  "";
    stayTimeT ="";
    departureTimeT =""; 
    travelTimeT  ="";
    distanceToNextT ="";

    constructor(poiMap, routePlaceIds){
       // autobind(this);
        this.startPoi = poiMap.get(routePlaceIds.shift());
        this.stayTime = this.startPoi.getStartTime();
        if(routePlaceIds.length>0){
            nextTourHop = new TourHop(poiMap,routePlaceIds);
        }
    }

    createUpdatePromises=(promiseList, startUnixSeconds)=>{
        this.arrivalTime = startUnixSeconds;
        _createUpdatePromises(promiseList);
    }
    _createUpdatePromises=(promiseList)=>{
        this.departureTime = this.arrivalTime+this.stayTime;
        promiseList.push(new Promise((resolve,reject)=>{
            this.gRoutes.createBetweenTwoPlaceIdsA(
                this.startPoi.getPlaceId(),
                this.nextTourHop.startPoi.getPlaceId(),
                this.arrivalTime
            )
            .then((groutes)=>{
                _finishUpdate(groutes);
                if(this.nextTourHop){
                    this.nextTourHop.arrivalTime= this.departureTime+ this.travelTime;
                }
                this.stateSource.fireStateChange(this);
                resolve(this);
            })
        }));
        // add promises recursively
        if(this.nextTourHop){
            _createUpdatePromises(promiseList);
        }
    }
    _finishUpdate=(gRoutes)=>{
        this.distanceToNext = gRoutes.getRouteDistance();
        this.travelTime = gRoutes.getRouteTravelDuration();
        this.arrivalTimeT= new Date(arrivalTime*1000).toTimeString();
        this.stayTimeT   = new Date(stayTime*1000).toLocaleTimeString()
        this.departureTimeT= new Date(departureTime*1000).toLocaleTimeString();
        this.travelTimeT   = new Date(travelTime*1000).toLocaleTimeString();
        this.distanceToNextT= (Math.round(distanceToNext/100)/10)+" km" ;
        };
    /**
     * recursive update of this and following tourhops
     * @param {like unix timestamp, bus only seconds} startUnixSeconds 
     * @param {function} onDoneCallback call onDoneCallback(this)
     */
    update=(startUnixSeconds,onDoneCallback)=>{
        this.arrivalTime = startUnixSeconds;
        this.departureTime = arrivalTime+stayTime;
        const gRoutes = new GRoutes();
        if(!nextTourSection){

            finishUpdate(onDoneCallback);
            return;
        }
        
        const updateThis = (thizz)=>{
            
        };

    }

    
}

export class Tour{
    groutes = new GRoutes();
    stateSource = new StateSource();
    poiMap = new Map();
    tourPois = new Map();
    tourName = "Custom Tour";
    rating = 0.0;
    hourPrice = 0;
    startPoi = new Poi(null,null,null,"","",null,0);
    endPoi = new Poi(null,null,null,"","",null,0);
    routeStartSeconds = null;
    tourPoiPlaceIds = null; 
    // tour hops
    firstHop = null;
    /**
     * 
     * @param {string} tourName name of the tour
     * @param {float} hourPrice price of a tour per hour
     * @param {float} rating is 0 to 5
     * @param {iterable} pois iterable over pois belonging to this route 
     */
    constructor(tourName,hourPrice,rating, pois){
        this.tourName = tourName;
        this.hourPrice = parseFloat(""+hourPrice);
        this.rating = rating;
        let i;
        //sole.log("TourConstuctor: pois=");
        //console.log(pois);
        
        for(i in pois){
            const poi = pois[i];
            //console.log(poi);
            this.poiMap.set(poi.getPlaceId(),poi);
        }
    }
    
    

    /**
     * return a Promise to update this tour
     * @param {bool} optimize 
     * @param {callback called at the end, one parameter tour} onDoneCallback 
     */
    calculateTour=(optimize)=>{
        if(!this.tourPoiPlaceIds){
            // create some 
            this.tourPoiPlaceIds = [];
            //console.log(this.tourPois.values());
            const pois = this.tourPois.values();
            for(let i in pois){
                this.tourPoiPlaceIds.push(posi[i].getPlaceId());
            }
        }
        if(optimize){
            this.firstHop = null; // trigger recreate
        }
        
        // update start and end pois
        return this.startPoi.createPoiInitPromise()
        .then((something)=>{
            return this.endPoi.createPoiInitPromise()
        })
        // create end point
        .then((startPoi)=>{
            return new Promise((resolve,reject)=>{
                if(!this.endPoi){
                    createCurrentLocationPoiPromise()
                    .then((endPoi)=>{
                        resolve(endPoi);
                    });
                }else{
                    resolve(this.endPoi);
                }
            });
        })
        // do we optimize waypoint, if so, create the right order
        .then((endPoi)=>{
            this.endPoi = endPoi;
            // create waypoints if needed
            if(!optimize){
                return createResultPromise(this.tourPoiPlaceIds,true);
            }            
            //startTime,startPoint, endPoint,waypoints,optimized,callback
            return this.groutes.create(
                this.routeStartSeconds,
                this.startPoi.getPlaceId(),
                this.tourPoiPlaceIds,
                optimize,
                null
            )
            .then((response)=>{
                this.tourPoiPlaceIds = this.groutes.getRoutePlaceIdOrder();
                return createResultPromise(this.tourPoiPlaceIds,true);
            })
            // build hops if needed and create update "all Promises"
            .then((routePlaceIds)=>{
                if(!this.firstHop){
                    this.firstHop = new TourHop(this.poiMap,routePlaceIds.slice(0));
                }
                let promises = [];
                this.firstHop.createUpdatePromises(promises)
                // we have all promises, they have to executed
                // in a sequence
                if(promises.length == 0){
                    return createResultPromise(this,true);
                }else{
                    return promises.shift()()
                    .then((tourHop)=>{
                        if(promises.length == 0){
                            return createResultPromise(this,true);
                        }else{
                            return promises.shift()();
                        }
                    })
                }
            })
            
        });

    }

}

/**
 * class producing state changes.
 * react components may regiter here to
 * get notified on state changes.
 * if a registered compoment disapears, so it will be removed
 * from listeners
 */
export class StateSource{
    listener = new Map();
    stateToPropagate = null;

    
    
    /**
     *  call this, when instancee has changed the state,
     *  all registered listeners will be notified.
     * (they have to be alive and visible)
     * @param {Object} sourceState is this changed State 
     */
    fireStateChange=(sourceState)=>{
        this.stateToPropagate = sourceState;
        let toRemove =[];
        for( ref in this.listener.keys){
            if(ref.current){
                try {
                    // execute callback
                    let callback = this.listener.get({compRef});
                    //console.log("\n##StateSource#propagate "+sourceState+" to "+ref.current);
                    callback(sourceState);
                } catch (error) {
                    // fall through
                }
            }else{
                toRemove.push(ref);
            }
        }
        // remove dead references
        for(ref in toRemove){
            this.listener.delete({ref});
        }
    }

    /**
     * 
     * @param {React.Component} component 
     * @param {function } stateChangeCallback with one parameter, that is describing the state
     * @see fireStateChange 
     */
    addListener(component,stateChangeCallback){
        const compRef = React.createRef(component);
        listener.set(compRef,stateChangeCallback);
        if(this.stateToPropagate){
            stateChangeCallback(this.stateToPropagate);
        }
    }

    
    
}//*/
