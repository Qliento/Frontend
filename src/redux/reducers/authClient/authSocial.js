const initialState = {
    name: '',
    surname: '',
    img: '',
    mail: ''
  }
  
  export function authSocialNetwork(state = initialState, action) {
    switch (action.type) {
      case "AUTH_SOCIAL_NETWORK":
        return {
          ...state,
          name: action.payload.name,
          surname: action.payload.surname,
          img: action.payload.img,
          mail: action.payload.mail
        };
  
      default:
        return state
    }
  }