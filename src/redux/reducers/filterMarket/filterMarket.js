
const initialState = {
    listData: {},
  };
  export function FilterMarket(state = initialState, action) {
    switch (action.type) {
      case "DATA_FILTER":
        return {
          ...state,
          listData: action.payload,
        };
      default:
        return state;
    }
  }
  