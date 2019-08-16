import React from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import { getResult } from '../redux/actions/gameAction';
import 'bootstrap/dist/css/bootstrap.css';


const FindFalconeButton = (props) => {
    if (props.responseStatus.state === 'inprogress') {
        return <div className="d-flex justify-content-center spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    } else {
        return <div className="d-flex justify-content-center mt-3"> <button disabled={props.selectionCount < 4} onClick={() => { props.getResult(props.history) }}>Find Falcone</button></div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        responseStatus: state.responseStatus,
        selectionCount: state.vehicleDetails.VehicleSelectionList.length
    };
}

export default withRouter(connect(mapStateToProps, { getResult })(FindFalconeButton));