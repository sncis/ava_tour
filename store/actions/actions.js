import { SET_PREFERENCES, 
  CLEAR_PREFERENCES, 
  SET_TOURS, 
  SET_SELECTED_TOUR, 
  SET_ROUTE_CONTENT, 
  SET_PICKUP_DETAILS,
  SET_LOCATION,
  SET_PEOPLE,
  SET_EXITER,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_EMAIL,
  SET_PHONE_NUM,

} from '../constants/actionTypes';
import store from '../store/store';
import dbInstance from '../../database/Database';
import { tour1 } from '../../data';
import {generatePreferencedTours} from '../../database/TourGenerator';

export const setPreferences = (preferences) => ({
  type: SET_PREFERENCES,
  payload: preferences
})

export const clearPreferences = () => ({
  type: CLEAR_PREFERENCES,
  payload: []
})

export const setTours = (tours) => ({
  type: SET_TOURS,
  payload: tours
})

export const setSelectedTourName = (tour) => ({
  type: SET_SELECTED_TOUR,
  payload: tour
})

export const setRouteContent = (content) => ({
  type: SET_ROUTE_CONTENT,
  payload: content

})
export const setUserDetails = (userDetails) => ({
  type: SET_USER_DEATILS,
  payload: userDetails
})

export const setPickUpDetails = (pickUpDetails) => ({
  type: SET_PICKUP_DETAILS,
  payload: pickUpDetails
})

export const getCurrentRouteContent = () => {
  return(dispatch) => {
    // const tourName = store.getState().selectedTourName;
    const routeContent = tour1;
    // const routeContent = dbInstance.getRouteContent(tourName);
   
    dispatch(setRouteContent(routeContent));
  }
}

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
})

export const setPeople = (people) => ({
  type: SET_PEOPLE,
  payload: people
})

export const setExiter = (exiter) => ({
  type: SET_EXITER,
  payload: exiter,
})


export const setFirstName = (name) => ({
  type: SET_FIRSTNAME,
  payload: name
})

export const setLastName = (name) => ({
  type: SET_LASTNAME,
  payload: name
})

export const setPhone = (phone) => ({
  type: SET_PHONE_NUM,
  payload: phone
})

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload:email
})

export const getRecommendedTours = () => {
  return(dispatch) => {
    const tourNames = dbInstance.getAllTours('munic');
    dispatch(setTours(tourNames));
  }
}

export const generateTours = () => {
  return(dispatch, getState) => {
    const preferences = store.getState().preferences
    return generatePreferencedTours(preferences);

  }
}



