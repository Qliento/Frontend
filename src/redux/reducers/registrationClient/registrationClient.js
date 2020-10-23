import { REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR } from '../../actions/constants';

const initialState = {
    isMOdal:false,
  };

  export function RegistrationClient(state = initialState, action) {
    switch (action.type) {
      case REGISTRATION_CLIENT:
        return {
          ...state,
          isMOdal: true,
        };
        
    case REGISTRATION_CLIENT_ERROR:
            return {
              ...state,
              isMOdal: false,
            };
            
      default:
        return state;
    }
  }