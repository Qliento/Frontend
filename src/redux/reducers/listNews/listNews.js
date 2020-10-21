

const initialState = {
    arrayNews: [],
  };
  export function ListNews(state = initialState, action) {
    switch (action.type) {
      case "LIST_NEWS":
        return {
          ...state,
          arrayNews: [...action.payload],
        };
      default:
        return state;
    }
  }