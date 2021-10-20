export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT"
export const LOGIN_START = "LOGIN_START"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const SIGNUP_START = "SIGNUP_START"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAIL = "SIGNUP_FAIL"

export const loginSuccess = () => {
    return({type: LOGIN_SUCCESS});
}

export const logoutSuccess = () => {
    return({type: LOGOUT_SUCCESS})
}

export const loginStart = () => {
    return({type: LOGIN_START})
}

export const loginFail = (message) => {
    return({type: LOGIN_FAIL, payload: message})
}

export const signUpStart = () => {
    return({type: SIGNUP_START})
}

export const signUpSuccess = (message) => {
    return({type: SIGNUP_SUCCESS, payload: message})
}

export const signupFail = (message) => {
    return({type: SIGNUP_FAIL, payload: message})
}


