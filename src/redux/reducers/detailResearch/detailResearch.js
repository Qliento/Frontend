const initialState = {
    detailData: {},
  };
  export function detailDataResearch(state = initialState, action) {
    switch (action.type) {
      case "DETAIL_RESEARCH":
        return {
          ...state,
          detailData: {...action.payload},
        };
      default:
        return state;
    }
  }
  