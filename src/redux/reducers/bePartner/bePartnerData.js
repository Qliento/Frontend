import { BE_PARTNER_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function BePartnerData(state = initialState, action) {
    switch (action.type) {
      case BE_PARTNER_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }