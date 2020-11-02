import { ORDER_RESEARCH_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function orderResearchData(state = initialState, action) {
    switch (action.type) {
      case ORDER_RESEARCH_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }