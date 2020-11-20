const initialState = {
    isModal: ''
  }
  
  export function changePassword(state = initialState, action) {
    switch (action.type) {
      case "POSTED_SUCCES_CHANGE_PASS":
        return {
          ...state,
          isModal: 1,
        };
        case 'POSTED__ERROR_CHANGE_PASS':
          return {
            ...state,
            isModal: 2,
          };
        case 'POSTED__AFTER_CHANGE_PASS':
          return {
            ...state,
            isModal: '',
          }
  
      default:
        return state
    }
  }