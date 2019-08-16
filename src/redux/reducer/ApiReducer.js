import { ACTION_TYPE } from '../actionTypes';

let initialState = {
    state: ''
}
function responseStatusReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.BEGIN_AJAX_CALL: 
            return { state: 'inprogress'}
        
        case ACTION_TYPE.END_API_CALL: 
            return {state: 'completed'}
        
        case ACTION_TYPE.AJAX_CALL_ERROR:
            return {state: 'error'}

        default:
            return state;
    }
}

export default responseStatusReducer;
