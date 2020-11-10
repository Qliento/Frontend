import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/constants'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  user: '',
  loggedIn: false,
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    // case userConstants.LOGOUT:
    //   return {};
    default:
      return state
  }
}