import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_HOSTING_SUCCESS = "FETCH_HOSTING_SUCCESS";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS"

export const getHostedEvents = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        dispatch(hostedSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteHostedEvent = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`/potlucks/${id}`)
      .then((res) => {
        dispatch(deleteSuccess(res.data.potluck_id))
      });
  };
};

export const addHostedEvent = (event) => {
    return (dispatch) => {
        axiosWithAuth()
        .post('/potlucks', event)
        .then(res => {
          console.log(res.data)
        })
    }
}

export const hostedSuccess = (events) => {
  return { type: FETCH_HOSTING_SUCCESS, payload: events };
};

export const deleteSuccess = (deleted_id) => {
    return { type: DELETE_EVENT_SUCCESS, payload: deleted_id }
}

export const addSuccess = (event) => {
    return { type: ADD_EVENT_SUCCESS, payload: event}
}
