const initialState = {
    arrayQuestion: [],
  };
  export function ListQuestion(state = initialState, action) {
    switch (action.type) {
      case "LIST_QUESTION":
        return {
          ...state,
          arrayQuestion: [...action.payload],
        };
      default:
        return state;
    }
  }