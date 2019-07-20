/* Library Imports */
import { combineReducers } from 'redux';

/* Custom Reducer Imports */
import planetReducer from './planetReducer';
import vehicleReducer from './vehicleReducer';
import ajaxReducer from './ajaxReducer';
import gameResultReducer from './gameReducer';

export default combineReducers({
    planetDetails: planetReducer,
    vehicleDetails: vehicleReducer,
    ajaxStatus: ajaxReducer,
    result: gameResultReducer
});