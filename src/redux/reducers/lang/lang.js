const initialState = {
    lang: 1
}

let localLang = localStorage.getItem('lang');

const secondState = {
  lang: localLang
}

export function langReducer (state = secondState || initialState, action){
    switch (action.type) {
        case "CHANGE_LANG":
          return {
            ...state,
            lang: action.payload,
          };
        default:
          return state;
}}