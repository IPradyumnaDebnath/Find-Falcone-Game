import { ACTION_TYPE } from '../actionTypes';

let initialState = {
    planetList: [],
    planetMap: {},
    planetSelectionList: []
}

export default function planetReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.CLEAR_DATA: 
            return {  
                planetList: [],
                planetMap: {},
                planetSelectionList: []
            }

        case ACTION_TYPE.UPDATE_PLANET_LIST:
            let planetMap = {};
            action.data.map(item => {
                return planetMap[item.name] = item.distance
            })
            return { ...state, planetList: action.data, planetMap: planetMap}
        
        case ACTION_TYPE.UPDATE_SELECTED_PLANET:
            let planetSelectionList = state.planetSelectionList;
            planetSelectionList[action.id] = action.data;
            
            return { ...state, planetSelectionList: planetSelectionList.slice(0, action.id + 1)}
        
        default:
            return state;
    }
  }
  