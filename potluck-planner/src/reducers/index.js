import { combineReducers } from 'redux';

import eventReducer from './eventReducer';
import landingReducer from './landingReducer';

const rootReducer = combineReducers({
    eventState: eventReducer,
    landingState: landingReducer,
})

export default rootReducer;