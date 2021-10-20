export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT"
export const LOGIN_START = "LOGIN_START"
export const SIGNUP_START = "SIGNUP_START"

export const loginSuccess = () => {
    return({type: LOGIN_SUCCESS});
}

export const logoutSuccess = () => {
    return({type: LOGOUT_SUCCESS})
}

export const loginStart = ()