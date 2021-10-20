import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_START,
  LOGIN_START,
  SIGNUP_SUCCESS,
} from "./../actions";

const inititalState = {
  isLoggedIn: localStorage.getItem("token"),
  loginLoading: false,
  signupLoading: false,
  successMessage: '',
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginLoading: false,
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
      };
      case SIGNUP_SUCCESS: 
      return {
        ...state,
        signupLoading: false,
        successMessage: action.payload
      }
    default:
      return state;
  }
};
