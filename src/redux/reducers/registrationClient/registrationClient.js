import { REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR, REGISTRATION_CLIENT_SUCCESS, REGISTRATION_CLIENT_EMAIL } from '../../actions/constants';

const initialState = {
    isModal: '',
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
    case REGISTRATION_CLIENT_SUCCESS:
            return {
              ...state,
              isModal: '',
            }
    case REGISTRATION_CLIENT_EMAIL:
            return {
              ...state,
              isModal: 3,
            }
      default:
        return state;
    }
  }