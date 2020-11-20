const initialState ={
    isModal: ''
};


export function updateClient(state = initialState, action) {
    switch (action.type) {
      case "POSTED_SUCCES_UPDATE_CLIENT":
        return {
          ...state,
          isModal: 1,
        };
        case 'POSTED__ERROR_UPDATE_CLIENT':
          return {
            ...state,
            isModal: 2,
          };
        case 'POSTED__AFTER_UPDATE_CLIENT':
          return {
            ...state,
            isModal: '',
          }
  
      default:
        return state
    }
  }