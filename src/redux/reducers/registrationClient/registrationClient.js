import { REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR } from '../../actions/constants';

const initialState = {
    isModal: 1,
  };

  export function RegistrationClient(state = initialState, action) {
    switch (action.type) {
      case REGISTRATION_CLIENT:
        return {
          ...state,
          isModal: 1,
        };
        
    case REGISTRATION_CLIENT_ERROR:
            return {
              ...state,
              isModal: 2,
            };
            
      default:
        return state;
    }
  }