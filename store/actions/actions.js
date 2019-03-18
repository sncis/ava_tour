import { SET_PREFERENCES, CLEAR_PREFERENCES, SET_TOURS } from '../constants/actionTypes';
import store from '../store/store';
import dbInstance from '../../database/Database'

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


export const getRecommendedTours = () => {
  return(dispatch) => {
    const tourNames = dbInstance.getAllTours('munic');
    dispatch(setTours(tourNames));
  }
}



