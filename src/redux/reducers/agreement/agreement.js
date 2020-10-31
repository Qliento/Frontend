import { AGREEMENT_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function Agreement(state = initialState, action) {
    switch (action.type) {
      case AGREEMENT_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }