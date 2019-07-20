import React from 'react';
import { connect } from 'react-redux';
import { updatePlanetSelection } from '../../redux/actions/planetAction';
import VehicleSelection from '../selectVehicle';
import './style.css';


class PlanetSelection extends React.Component{
    

    updatePlanetSelection = (event) => {
        this.props.updatePlanetSelection(this.props.step, event.target.value);
    }

    render(){
      
        let { props } = this;
        let {step} = props;
        return (
            <div className="planetContainer">
                <label className="labelHeader">Destination {props.step+1}</label>
                
                <select 
                    value={props.planetSelectionList[step] || ""}
                    onChange={this.updatePlanetSelection} 
                    disabled={
                        (step===0 && props.planets.length === 0) 
                        ||(step !== 0 && props.vehicleSelectionList[step-1] === undefined)}
                >
                    <option disabled value="">--- select a option ---</option> 
                    { props.planets.map( item => {
                        //{  console.log({item})}
                        let index = props.planetSelectionList.indexOf(item.name) 
                        return (index === -1 ||  index >= step)  && 
                        <option key={item.name} value={item.name}>{item.name}</option>            
                    })}
                    
                    
                </select>
                <VehicleSelection show={props.planetSelectionList[step]} distance={props.planetMap[props.planetSelectionList[step]]} step={step}/>
            </div>
        )
    }
}


/*Mapping the state to desired props for the component*/
function mapStateToProps(state, ownProps) {
    return {
        planetMap: state.planetDetails.planetMap,
        planets: state.planetDetails.planetList,
        planetSelectionList: state.planetDetails.planetSelectionList,
        vehicleSelectionList: state.vehicleDetails.vehicleSelectionList
    };
}

/* Mapping the props for the desired dispatch actions*/
const mapDispatchToProps = {updatePlanetSelection};


export default connect(mapStateToProps, mapDispatchToProps)(PlanetSelection);