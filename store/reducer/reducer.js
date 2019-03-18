import {SET_PREFERENCES,
  CLEAR_PREFERENCES,
  SET_TOURS

} from '../constants/actionTypes';

const initialState = {
  selectedPreferences: [],
  recommendedTourNames: [],
  selectedTourName:'',
  startTime: '',
  startDate: '',
  pickUpLocation:'',
  people: 0,
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
    
    default:
      return state;
  }
}

export default rootReducer;