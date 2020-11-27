const initialState = {
  ResearchList: [],
  detailData: {},
  ubdateResearch: false,
};

export function ResearchList(state = initialState, action) {
  switch (action.type) {
    case "SECCESS_RESEARCH_LIST":
      return {
        ...state,
        ResearchList: [...action.payload],
      };
    case "SECCESS_DATA_DETAIL":
      return {
        ...state,
        detailData: action.payload,
      };
    case "SECCESS_UBDATE_RESEARCH":
      return {
        ...state,
        ubdateResearch: true,
      };
    case "ERR_UBDATE_RESEARCH":
      return {
        ...state,
        ubdateResearch: false,
      };
    default:
      return state;
  }
}
