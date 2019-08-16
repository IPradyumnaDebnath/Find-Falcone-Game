import { ACTION_TYPE } from '../actionTypes';
import { fetchPost } from './apiAction';

export function clearData() {
    return { type: ACTION_TYPE.CLEAR_DATA }
}

export function successResult(data) {
    return { type: ACTION_TYPE.SUCCESS,  data}
}

export function errorResult() {
    return { type: ACTION_TYPE.ERROR }
}

export function updateTimeTaken(data) {
    return { type: ACTION_TYPE.TIME_TAKEN, data}
}

export function getResult(history) {
    return (dispatch, getState) => {
        dispatch({type: ACTION_TYPE.BEGIN_AJAX_CALL})
        return fetchPost('token').then(response => {
            if(response && response.token){
                let state = getState(); 
                let request = {
                    token: response.token,
                    planet_names: state.planetDetails.planetSelectionList,
                    vehicle_names: state.vehicleDetails.VehicleSelectionList
                }
                return fetchPost('find', request).then(resp => {
                    if(resp.hasOwnProperty('status') && resp.status){
                        dispatch(clearData());
                        dispatch(successResult(resp.planet_name));
                    }else{
                        dispatch(errorResult());
                    }
                    dispatch({type: ACTION_TYPE.END_API_CALL});
                    history.push('/result');
                });
            }
                      
        }).catch(error => {
            dispatch(errorResult());
            dispatch({type: ACTION_TYPE.AJAX_CALL_ERROR})
            history.push('/result');
        })
    } 
}