const initialState = {
  ResearchList: [],
  detailData: {},
  ubdateResearch: false,
  dataStep2: {},
  dataStep1: {},
  isModal:"",
  static:{}
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
    case "UPLOAD_DATA_STEP_1":
      return {
        ...state,
        dataStep1: action.payload,
      };
      case "UPLOAD_RESEARCH_SPINER":
        return {
          ...state,
          isModal: action.isModal,
        };
        case "SECCESS_STATIC":
          return {
            ...state,
            static: action.data,
          };
    default:
      return state;
  }
}
