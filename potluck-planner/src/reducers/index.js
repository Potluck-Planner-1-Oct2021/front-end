import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_START, LOGIN_START } from './../actions'

const inititalState = {
  isLoggedIn: localStorage.getItem("token"),
  landingLoading: false,
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case (LOGIN_START || SIGNUP_START): 
      return {
        ...state,
        landingLoading: true
      }
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
    default:
      return state;
  }
};
