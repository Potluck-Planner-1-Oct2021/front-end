import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './../actions'

const inititalState = {
  isLoggedIn: localStorage.getItem("token"),
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
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
