import { ACTION_TYPE } from '../actionTypes';
import { fetchGet } from './serverAction';

export function updatePlanetSelection(id,data) {
    return { type: ACTION_TYPE.UPDATE_SELECTED_PLANET, id, data}
}

export function updatePlanetList(data) {
    return { type: ACTION_TYPE.UPDATE_PLANET_LIST, data}
}

export function getPlanets(){
    return dispatch => {
        return fetchGet('planets').then(response => {
            dispatch(updatePlanetList(response));
        })
    } 
}