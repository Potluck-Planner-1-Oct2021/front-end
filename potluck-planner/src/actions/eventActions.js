import axiosWithAuth from "../utils/axiosWithAuth"

export const FETCH_HOSTING_SUCCESS = "FETCH_HOSTING_SUCCESS"

export const getHostedEvents = () => {
    return (dispatch) => {
        axiosWithAuth()
    .get('/potlucks')
    .then(res => {
        dispatch(hostedSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
    })
    }
}

export const hostedSuccess = (events) => {
    return({type: FETCH_HOSTING_SUCCESS, payload: events})
}