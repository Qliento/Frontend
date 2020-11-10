import { BLOG_CARD_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function blogCardData(state = initialState, action) {
    switch (action.type) {
      case BLOG_CARD_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }