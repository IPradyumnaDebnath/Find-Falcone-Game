import { combineReducers } from 'redux';
import planetReducer from './planetReducer';
import vehicleReducer from './vehicleReducer';
import ajaxReducer from './ApiReducer';
import gameResultReducer from './ResultReducer';

export default combineReducers({
    planetDetails: planetReducer,
    vehicleDetails: vehicleReducer,
    responseStatus: ajaxReducer,
    result: gameResultReducer
});