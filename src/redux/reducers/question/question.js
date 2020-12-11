const initialState = {
  arrayQuestion: [],
  triger: "",
};
export function ListQuestion(state = initialState, action) {
  switch (action.type) {
    case "LIST_QUESTION":
      return {
        ...state,
        arrayQuestion: [...action.payload],
      };
    case "SECCESS_POST_QUESTION":
      return {
        ...state,
        triger: 1,
      };
    case "TRIGER_FALSE":
      return {
        ...state,
        triger: 2,
      };
    case "UPDATE_STATE_QUESTION":
      return {
        ...state,
        triger: "",
      };
    default:
      return state;
  }
}
