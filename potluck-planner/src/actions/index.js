export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT"

export const loginSuccess = () => {
    return({type: LOGIN_SUCCESS});
}

export const logoutSuccess = () => {
    return({type: LOGOUT_SUCCESS})
}