const initialState = {
    isMOdal:false,
  };
  export function RegistrOrg(state = initialState, action) {
    switch (action.type) {
      case "REGISTRATION_ORGANIZATION":
        return {
          ...state,
          isMOdal: true,
        };
        
    case "REGISTRATION_ORGANIZATION_ERROR":
            return {
              ...state,
              isMOdal: false,
            };
            
      default:
        return state;
    }
  }