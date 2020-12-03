const initialState = {
  ResearchList: [],
  detailData: {},
  ubdateResearch: false,
  dataStep2:{}
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
      case "UPLOAD_DATA_STEP_2":
        return {
          ...state,
          dataStep2: action.payload,
        };
    default:
      return state;
  }
}
