const initialState = {
    lang: 1
}

export function langReducer (state = initialState, action){
    switch (action.type) {
        case "CHANGE_LANG":
          return {
            ...state,
            lang: action.payload,
          };
        default:
          return state;
}}