import { CLIENT_PAGE } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function clientPage(state = initialState, action) {
    switch (action.type) {
      case CLIENT_PAGE:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }