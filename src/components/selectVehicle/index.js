import React from 'react';
import { connect } from 'react-redux';
import { updateVehicleSelection } from '../../redux/actions/vehicleAction';
import './style.css';

class VehicleSelection extends React.Component{
    
    updateVehicleSelection = (event) => {
        this.props.updateVehicleSelection(this.props.step, event.target.value);
    }

    render(){
        let { props } = this;
        return (
            <div className="planetContainer">
                <form>
                    {  props.show && props.vehicles.map(item => {
                        let count = props.vehicleSelectionList.filter((element, index) => element === item.name && index <= props.step).length
                        
                        let total_no  = item.total_no -  count;
                        let isEnabled =  total_no + (props.vehicleSelectionList[props.step] === item.name ? 1 : 0)  > 0 && item.max_distance >= props.distance
                        return(
                            <div>
                            <label key={item.name}>
                                <input 
                                    type="radio" 
                                    checked={item.name === props.vehicleSelectionList[props.step]}
                                    key={item.name}
                                    value={item.name}
                                    disabled={!isEnabled}
                                    onChange={this.updateVehicleSelection}
                                /> 
                                <span className={isEnabled ?  "labelEnabled" : "labelDisabled"}>
                                    {item.name} ({total_no})
                                </span>
                                <br/>
                               
                            </label>
                            </div>
                        )}
                    )}
                   
                </form>
            </div>
        )
    }
}


/*  Mapping the state to desired props for the component */
function mapStateToProps(state, ownProps) {
    return {
        vehicles: state.vehicleDetails.vehicleList,
        vehicleSelectionList: state.vehicleDetails.vehicleSelectionList
    };
}

/* Mapping the props for the desired dispatch actions */
const mapDispatchToProps = {updateVehicleSelection};


export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelection);