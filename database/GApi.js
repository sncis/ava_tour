import React, { Component } from 'react';
import { GOOGLE_API_KEY  } from '../constants/ApiKeys';
import axios from 'axios';



/**
 * Fuction returning a Promise to a latitude, longitude 
 * string like "48.1373932,11.5732545" -Marienplatz in Munic,
 * if the geolocation is not supported on device ( emulator)
 * so the latLon of marienplatz is returned
 */
export const currentLatLonPromise = ()=>{
    if ("geolocation" in navigator) {
    const geo_options = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
        };
    /* geolocation is available */
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            (pos)=>{
                // position.coords.latitude, position.coords.longitude
                resolve(pos.coords.latitude+","+pos.coords.longitude);
            },
            (er)=>{
                reject(er);
            },
            geo_options
            );
    });
    } else {
    /* geolocation IS NOT available */
    // marienplatz munic
    return createResultPromise("48.1373932,11.5732545",true); 
    }
}





//////////// START places

export const  logError= (customDescr,error)=>{
    console.log("\n###error::::"+customDescr+ "------------\n name: "+error.name+" message="+error.message);
    console.log(error.toString());
    console.log(error.stack);
    console.log("\n###error"+customDescr+"------------");
}

/**
 * returns promise.
 * is performing get for url, then onResonse is inspecting 
 * the response, when response.data.status is not "OK", reject is called
 * @param {string} url get url
 * @param {funcion} transformResponse is transforming response, returned value will be resolved
 */
export const apiGet = (url, transformResponse)=>{
    return new Promise(function(resolve,reject){
        axios.get(url)
        .then(function(response){;
            if(response.status && response.data && response.data.status == 'OK'){
                resolve(transformResponse ? transformResponse(response):response);
            }else{
                reject("apiGet: data status is not ok for url="+url);
            }
        })
        .catch(function(error){
            logError("apiGet",error);
            reject(error);
        });
    });
}
/**
 * in order to hve a promice chain this fuction is creating a promise
 * which is setting the result immediately
 * @param {object} resultValue parameter for resolve/reject in Primice function
 * @param {object} rejectValue parameter for reject in Promice function
 * @param {bool} doResolve if true resolve with given value, otherwise reject with given value
 */
export const createResultPromise=(resultValue, doResolve)=>{
    return new Promise(function(resolve,reject){
        if(doResolve){
            resolve(resultValue);
        }else{
            reject(resultValue);
        }
    });
}


/**
 * creates a poi init Promise deprecated
 * @param {Poi} poi is Poi to init
 */
 export const resolveGPoiData = (poi)=>{
     /////////// definitions of helper methods
     // look for nearby search poiname in close to latLon
    const resolveWithPoiAndLatLon = (poi)=>{
        // for sure there is poiName and latLon
        // use nearbysearch
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${poi.latLon}&radius=1500&name=${poi.poiName}&key=${GOOGLE_API_KEY}`; 
        
        return new Promise((resolve,reject)=>{
            return axios.get(url)
            .then((response)=>{
                if(!response.data){
                    reject("unexpected answer from gApi");
                }
                const respStatus = response.data.status;
                if(respStatus == "OK"){
                    // we have placeId
                    poi.placeId = response.data.results[0].place_id;
                    console.log("+++poi-data from name/latLon name="+poi.poiName+" latlon="+poi.latLon+" placeID="+poi.placeId);
                    resolve(poi);
                }else if(respStatus == "ZERO_RESULTS"){
                    // poiname and latLon do not lead in a good poi description
                    // try poiName as user input
                    poi.userInput= poi.poiName;
                    //try poi name as user input
                    resolveWithUserInput(poi)
                    .then(resolveWithPlaceId)
                    .then(resolve);
                }else{
                    // unknown answer
                    reject("unexpected answer from gApi: status = "+respStatus);
                }
            });
        });  
    }
    // look if we get place id for users input
    const resolveWithUserInput = (poi) =>{
        // we have user input
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${poi.userInput}&inputtype=textquery&key=${GOOGLE_API_KEY}`;
        return apiGet(url,(response)=>{
            
            if(response.data.candidates && response.data.candidates[0]){
                poi.placeId = response.data.candidates[0].place_id;
                console.log("+++poi-data from userInput name="+poi.poiName+" input="+poi.userInput+" placeID="+poi.placeId);
            }else{
                throw "Poi: place for  "+poi.userInput+" is unknown";
            }
            return poi;
        });
    }
    // look if we get place id for larLon only
    const resolveWithLatLon = (poi) =>{
        
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latLon}&key=${GOOGLE_API_KEY}`;
        return apiGet(url, (response)=>{
            if(response.data && response.data.results){
                poi.placeId = response.data.results[0].place_id;
                console.log("+++poi-data from latLon name="+poi.poiName+" latLon="+poi.latLon+" placeID="+poi.placeId);
            }else{
                throw "Poi: poin for latLon="+poi.latLon+ " is unknown";
            }
            return poi;
        });
    }
    // here we need placeId
    const resolveWithPlaceId = (poi) =>{
        console.log("##########reslovePlaceId poiName = "+poi.poiName);
        
        if(!poi.placeId){
            return createResultPromise("Poi:resolveGPoiData: missing place id in poi",false);
        }
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${poi.placeId}&key=${GOOGLE_API_KEY}`;
        return apiGet(url, (response)=>{
            if(response.data){
                poi.poiData = response.data;
                return poi;
            }
            
            let e = new Error("resolveGPoiData failed:"+response.status);
            console.log(e);
            throw e;
        });
    }
    //////// end helper
    //console.log("\n\POI_---------------");
    //console.log(poi);
    
     // set the way how to resolve te Poi depending on
     //the parameters
     if(!poi.placeId){
         // place id is not there , some preperation is needed
        if(poi.poiName){
            // we have here a predefined value
            // predefined pois have all names
            if(!poi.latLon){
                // in this case userInput ( which can be a adress address ) 
                // is mandatory
                if(!(poi.usersText || poi.adress)){

                   // console.log("--------------Error poi is coming");
                    
                   // console.log(poi);
                   // console.log("--------------Error poi end");
                    
                    throw "Poi: at least missing a free text input - like a adress";
                }else{
                    if(!poi.usersText){
                        poi.usersText=poi.adress;
                    }
                }
                // start with user text
                return resolveWithUserInput(poi)
                .then(resolveWithPlaceId);
            }else{
                // poiName and latLon
                return resolveWithPoiAndLatLon(poi)
                .then(resolveWithPlaceId);
            }
        }else{
            // no poiname, custom poi
            /// do we have latLon or user text ?
            if(poi.latLon){
                // lonlat
                return resolveWithLatLon(poi)
                .then(resolveWithPlaceId)
            }else if(poi.userInput){
                // other case, we have custom user input
                return resolveWithUserInput(poi)
                .then(resolveWithPlaceId);
            }else{
                // something is wrong, custom needs one of psrams above
                throw "Poi:custom : missing a free text input( adress ) or latLon";
            }
        }
        
     }else{
         // we have  placeId
         return resolveWithPlaceId(poi);
     }
     throw "Poi: state exception, we should not be here";
    
}




///////////////// END





/**
 * Promise:
 * Is fetching the route, if respose status is ok,
 * response.data is returned
 * for docu see https://developers.google.com/maps/documentation/directions/intro
 * @param {string} startPlaceId
 * @param {string} endPlaceId
 * @param {integer} atSecondsUnixTimeStamp 
 * @param {boolean} isDepartureTime, if true, so depaprture time is used, avvival time otherwise
 * @param {fuction} resultCallback with parameter response.data, if null, so response is returned
 */
export const createRouteTwoPlaceIds= (startPlaceId, endPlaceId, atSecondsUnixTimeStamp, isDepartureTime)=>{
    const timeSwitch = isDepartureTime ? "departure_time": "arrival_time";
    const url = `https://maps.googleapis.com/maps/api/directions/json?${timeSwitch}=${atSecondsUnixTimeStamp}&origin=place_id:${startPlaceId}&destination=place_id:${endPlaceId}&key=${GOOGLE_API_KEY}`;
    return apiGet(url,(response)=>{
        return response.data;
    });
}


/**
 * Promise:
 * is fetching route data between start and endpoints, waypoints, if any, are in between.
 * if param optimized ist true, so 
 * @param {integer} atSecondsUnixTimeStamp seconds since 1.1.1970, like unix timestamp
 * @param {boolean} isDepartureTime, if true, so departure time, avvival time otherwise
 * @param {string} startPlaceId, google place_id of start point
 * @param {string} endPlaceId, google place_id of end point
 * @param {array} waypointPlaceIds array of place ids: points between start and end point, may be null
 * @param {bool} optimized if true waypoints are oprimized by google in default way
 */
export const createRoute = (atSecondsUnixTimeStamp, isDepartureTime,startPlaceId, endPlaceId,waypointPlaceIds,optimized)=>{
    let wp = '';
    if(!atSecondsUnixTimeStamp){
        atSecondsUnixTimeStamp = 'now';
        isDepartureTime = true;
    }
    const timeSwitch = isDepartureTime ? "departure_time": "arrival_time";
    if(waypointPlaceIds){
        wp = '&waypoints=';
        var first = true;
        waypoints.forEach(element => {
            wp = first ? '&waypoints=via:'+element: wp + '|via:'+element ;
            first = false;
        });
        wp = wp + '&optimizeWaypoints=' +(optimized ? 'true':'false');
    }
    const url = `https://maps.googleapis.com/maps/api/directions/json?${timeSwitch}=${atSecondsUnixTimeStamp}&origin=${startPlaceId}&destination=${endPlaceId}${wp}`;
    return apiGet(url, (response)=>{
        this.data = response.data;
        return this;
    });
}

/**
 * GRoutes is hiding google api
 * and provides to get a (default = car) route
 * between two or more points. there is
 * also the possibility to optimize the route
 * Asynchronous function names are anding with
 * capitol A
 */
export class GRoutes{

   
    data = null;
    // create asynchronious a route between start and andpoint and  
    // with waypoints in between, if any
    // if optimized is true, the waypoints are optimized ( rearanged)
    // by drive duration
    // starttime is seconds since midnight, January 1, 1970 UTC
    // (way)points are latLon like '48.2344,10.3345'
    create2=(startTime,startPoint, endPoint,waypoints,optimized)=>{
        var wp = '';
        if(startTime ===null){
            startTime = 'now'
        }
        if(waypoints!=null){
            wp = '&waypoints=';
            var first = true;
            waypoints.forEach(element => {
                wp = first ? '&waypoints=via:'+element: wp + '|via:'+element ;
                first = false;
            });
            wp = wp + '&optimizeWaypoints=' +(optimized ? 'true':'false');
        }
        // https://maps.googleapis.com/maps/api/directions/json?origin=48.1373932,11.5732545&destination=48.0061613,11.2583466&key=${GOOGLE_API_KEY}
        const url = `https://maps.googleapis.com/maps/api/directions/json?departure_time=${startTime}&origin=${startPoint}&destination=${endPoint}${wp}&key=${GOOGLE_API_KEY}`;
        
        return apiGet(url, (response)=>{
            this.data = response.data;
            return this;
        });
    };
    // creates a route between two locations defined by their placeIds
    createBetweenTwoPlaceIds2=(startPlaceId, endPlaceId, atSecondsUnixTimeStamp,callback)=>{
        const url = `https://maps.googleapis.com/maps/api/directions/json?departure_time=${atSecondsUnixTimeStamp}&origin=place_id:${startPlaceId}&destination=place_id:${endPlaceId}&key=${GOOGLE_API_KEY}`;
        return apiGet(url,(response)=>{
            this.data = response.data;
            return this;
        })
    };

    // return the overall duration as text integer in seconds
    getRouteTravelDuration=()=>{
        return this.data.routes[0].legs[0].duration.value;
    }
    // return the overall distance as text integer in meters
    getRouteDistance=()=>{
        return this.data.routes[0].legs[0].distance.value;
    }
    // return arrays with reordered waypoints, contains startPoint
    // at beginning and endPoint at the end
    // in the middle the route may be reordered
    getRoutePlaceIdOrder=()=>{
        var result = [];
        this.serverResponds.data.geocoded_waypoints.forEach(place => {
            result.push(place.place_id);
        });
        return result;
    }
    // return coordinates for the route without waypoins
    getSingleRoutePoints=()=>{
        let points = Polyline.decode(this.serverResponds.data.routes[0].overview_polyline.points)
        let coords = points.map((point) => {
        return { 
            latitude: point[0],
            longitude: point[1]
        }
        });
        return coords;
    }
}



