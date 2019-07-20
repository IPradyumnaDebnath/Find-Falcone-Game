import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { getResult } from '../../redux/actions/gameAction';
import './style.css';

const FindFalconeButton = (props) => {
    if(props.ajaxStatus.state === 'inprogress'){
        return <div className="loader"></div>
    }else{
        return <button disabled={props.vehicleSelectionCount < 4} onClick={() => {props.getResult(props.history)}}>Find Falcone</button>
    }
}

/*Mapping the state to desired props for the component */
function mapStateToProps(state, ownProps) {
    return {
        ajaxStatus: state.ajaxStatus,
        vehicleSelectionCount: state.vehicleDetails.vehicleSelectionList.length
    };
}

export default withRouter(connect(mapStateToProps, {getResult})(FindFalconeButton));