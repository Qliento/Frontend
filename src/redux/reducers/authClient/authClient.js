
const initialState = {
  isModal: ''
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "POSTED_SUCCES_AUTH":
      return {
        ...state,
        isModal: 1,
      };
      case 'POSTED__ERROR_AUTH':
        return {
          ...state,
          isModal: 2,
        };
      case 'POSTED__AFTER_AUTH':
        return {
          ...state,
          isModal: '',
        }

    default:
      return state
  }
}