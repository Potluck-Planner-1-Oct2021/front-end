import { DELETE_EVENT_SUCCESS, FETCH_HOSTING_SUCCESS } from './../actions/eventActions'

const initialState = {
    potlucks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOSTING_SUCCESS: 
        return {
            ...state, 
            potlucks: action.payload
        }
        case DELETE_EVENT_SUCCESS:
          return {
            ...state,
            potlucks: state.potlucks.filter(pl => pl.potluck_id !== action.payload)  
          }
        default:
          return state;
      }
      
    };

    export default reducer;