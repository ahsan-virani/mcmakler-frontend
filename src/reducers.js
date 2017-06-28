import {
  ADS_LOADED,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants';

let initialState = {
  advertisments: [],
  error: '',
  currentlySending: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADS_LOADED:
      return { ...state, advertisments: action.advertisments };
    case SENDING_REQUEST:
      return { ...state, currentlySending: action.sending };
    case REQUEST_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default reducer
