import { CLIENT_PURCHES } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function clientData(state = initialState, action) {
    switch (action.type) {
      case CLIENT_PURCHES:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }