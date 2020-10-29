

const initialState = {
    researchList: [],
  };
  export function mainResultSearch(state = initialState, action) {
    switch (action.type) {
      case "RESULT_SEARCH":
        return {
          ...state,
          researchList: [...action.payload],
        };
      default:
        return state;
    }
  }