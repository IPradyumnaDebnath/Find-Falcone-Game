import React from 'react';
import { connect } from 'react-redux';
import { updateVehicleSelection } from '../redux/actions/vehicleAction';
import 'bootstrap/dist/css/bootstrap.css';


class VehicleSelection extends React.Component{
    
    updateVehicleSelection = (event) => {
        this.props.updateVehicleSelection(this.props.step, event.target.value);
    }

    render(){
        let { props } = this;
        return (
            
            <div className="d-flex justify-content-left">
                <form >
                    {  props.show && props.vehicles.map(item => {
                        let count = props.VehicleSelectionList.filter((element, index) => element === item.name && index <= props.step).length
                        
                        let total_no  = item.total_no -  count;
                        let isEnabled =  total_no + (props.VehicleSelectionList[props.step] === item.name ? 1 : 0)  > 0 && item.max_distance >= props.distance
                        return(
                            <div>
                            <label key={item.name}>
                                <input 
                                    type="radio" 
                                    checked={item.name === props.VehicleSelectionList[props.step]}
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


function mapStateToProps(state, ownProps) {
    return {
        vehicles: state.vehicleDetails.vehicleList,
        VehicleSelectionList: state.vehicleDetails.VehicleSelectionList
    };
}

const mapDispatchToProps = {updateVehicleSelection};


export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelection);