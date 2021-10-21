import { FETCH_HOSTING_SUCCESS } from './../actions/eventActions'

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
        default:
          return state;
      }
    };

    export default reducer;