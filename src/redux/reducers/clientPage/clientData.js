import { CLIENT_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function clientData(state = initialState, action) {
    switch (action.type) {
      case CLIENT_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }