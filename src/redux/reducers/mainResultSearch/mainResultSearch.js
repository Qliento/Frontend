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
    case "GET_LIST_RESEARCH_CATEGORY":
      return {
        ...state,
        researchList: [...action.payload],
      };
    case "ALL_LIST_RESEARCH":
      return {
        ...state,
        researchList: [...action.payload],
      };
    default:
      return state;
  }
}
