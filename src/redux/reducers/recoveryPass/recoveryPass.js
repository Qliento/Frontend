const initialState = {
    isModal: '',
  };
  
  
  export function recoveryPass(state = initialState, action) {
    switch (action.type) {
      case "POSTED_SUCCES_RECOVERY":
        return {
          ...state,
          isModal: 1,
        };
        
    case 'POSTED__ERROR_RECOVERY':
            return {
              ...state,
              isModal: 2,
            };
    case 'POSTED__AFTER_RECOVERY':
            return {
              ...state,
              isModal: '',
            }
      default:
        return state;
    }
  }