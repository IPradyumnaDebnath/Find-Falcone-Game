import { ACTION_TYPE } from '../actionTypes';

let initialState = {
    success: false,
    planetName: '',
    timeTaken:''
}
function gameResultReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.SUCCESS: 
            return {...state, success: true, planetName: action.data}
        
        case ACTION_TYPE.ERROR: 
            return {...state, success: false, planetName: ''}
        
        case ACTION_TYPE.TIME_TAKEN:
            return { ...state, timeTaken: action.data} 
            
        default:
            return state;
    }
}

export default gameResultReducer;