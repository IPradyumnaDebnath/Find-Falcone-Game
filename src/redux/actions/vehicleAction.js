import { ACTION_TYPE } from '../actionTypes';
import { fetchGet } from './serverAction';

export function updateVehicleSelection(id,data) {
    return { type: ACTION_TYPE.UPDATE_SELECTED_VEHICLE, id, data}
}

export function updateVehicleList(data) {
    return { type: ACTION_TYPE.UPDATE_VEHICLE_LIST, data}
}

export function getVechicles(){
    return dispatch => {
        return fetchGet('vehicles').then(response => {
            dispatch(updateVehicleList(response));
        })
    } 
}