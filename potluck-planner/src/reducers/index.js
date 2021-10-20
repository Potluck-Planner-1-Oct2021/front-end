import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_START,
  LOGIN_START,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
} from "./../actions";

const inititalState = {
  isLoggedIn: localStorage.getItem("token"),
  loginLoading: false,
  loginErrorMessage: "",
  signupLoading: false,
  signUpErrorMessage: "",
  successMessage: "",
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginLoading: true,
        loginErrorMessage: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginLoading: false,
        loginErrorMessage: ''
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginLoading: false,
        loginErrorMessage: action.payload,
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
        successMessage: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signupLoading: false,
        signUpErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
