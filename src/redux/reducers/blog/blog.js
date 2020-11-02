import { BLOG_DATA } from '../../actions/constants';

const initialState = {
    data: [],
  };
  export function blogData(state = initialState, action) {
    switch (action.type) {
      case BLOG_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }