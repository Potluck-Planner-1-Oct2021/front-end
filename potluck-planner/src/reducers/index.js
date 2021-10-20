import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_START, LOGIN_START } from './../actions'

const inititalState = {
  isLoggedIn: localStorage.getItem("token"),
  loginLoading: false,
  signupLoading: false
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_START: 
      return {
        ...state,
        loginLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
      case SIGNUP_START:
        return {
          ...state,
          signupLoading: true,
        }
    default:
      return state;
  }
};
