import { NETWORK_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function networkData(state = initialState, action) {
    switch (action.type) {
      case NETWORK_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }