const initialState = {
    name: '',
    surname: '',
    img: '',
    mail: ''
  }
  
  export function authentication(state = initialState, action) {
    switch (action.type) {
      case "POSTED_SUCCES_AUTH":
        return {
          ...state,
          isModal: 1,
        };
  
      default:
        return state
    }
  }