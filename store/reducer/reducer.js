import {SET_PREFERENCES,
  CLEAR_PREFERENCES,
  SET_TOURS,
  SET_SELECTED_TOUR,
  SET_ROUTE_CONTENT,
  SET_PICKUP_DETAILS,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_EMAIL,
  SET_PHONE_NUM,
  SET_LOCATION,
  SET_PEOPLE,
  SET_EXITER,
  
} from '../constants/actionTypes';

// toLocaleTimeString('en-US')
const initialState = {
  selectedPreferences: [],
  recommendedTourNames: [],
  selectedTourName:'',
  routeContent: [],
  startTime: new Date().toLocaleTimeString('de-DE'),
  startDate: new Date().toDateString(),

  pickUpLocation:"Mies-van-Rohe-Str. 6",
  people: 1,
  exiter:'',
  firstName: '',
  lastName: '',
  email: '',
  phoneNum: '',
  paymentMethode: '',
  cardHolder: '',
  cardNumber: '',
  expMonth:'',
  exYear: '',
  securityCode: '',
};

const rootReducer = (state = initialState, action = '') => {
  switch(action.type){
    case SET_PREFERENCES:
      return{...state, selectedPreferences: action.payload}

    case CLEAR_PREFERENCES:
      return{ ...state, selectedPreferences: action.payload}

    case SET_TOURS: 
    return{...state, recommendedTourNames: action.payload}

    case SET_SELECTED_TOUR:
      return{ ...state, selectedTourName: action.payload}

    case SET_ROUTE_CONTENT:
      return{ ...state, routeContent: action.payload }

      
    case SET_LOCATION:
      return{...state, pickUpLocation: action.payload}

    case SET_PEOPLE:
      return{...state, people: action.payload}

    case SET_EXITER: 
    return{...state,exiter: action.payload}


    case SET_PICKUP_DETAILS:
      return{
        ...state,
        startTime: action.payload.time,
        startDate: action.payload.date,
        pickUpLocation: action.payload.location,
        people: action.payload.people,
        exiter: action.payload.exiter
      }

    case SET_FIRSTNAME:
    return{
      ...state, firstName: action.payload
    }

    case SET_LASTNAME:
    return {
      ...state, lastName: action.payload
    }

    case SET_EMAIL:
    return {
      ...state, email: action.payload
    }

    case SET_PHONE_NUM:
    return {
      ...state, phoneNum: action.payload
    }

    default:
      return state;
  }
}

export default rootReducer;