import { ACTION_TYPE } from '../actionTypes';

let initialState = {
    vehicleList: [],
    vehicleMap:{},
    VehicleSelectionList: []
}

export default function vehicleReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.CLEAR_DATA: 
            return {
                vehicleList: [],
                vehicleMap:{},
                VehicleSelectionList: []
            }
        case ACTION_TYPE.UPDATE_VEHICLE_LIST:
            let vehicleMap = {};
            action.data.map(item => {
                return vehicleMap[item.name] = item.speed
            })
            return { ...state, vehicleList: action.data, vehicleMap }
        
        case ACTION_TYPE.UPDATE_SELECTED_VEHICLE:
            let VehicleSelectionList = state.VehicleSelectionList
            VehicleSelectionList[action.id] = action.data
            return { ...state, VehicleSelectionList: VehicleSelectionList.slice(0, action.id + 1)}
            
        default:
            return state;
    }
  }
  