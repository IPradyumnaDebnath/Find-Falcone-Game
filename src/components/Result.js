import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

const Result = (props) => {

    return (
        (props.result.success) ? <div className="card">

            <p className="card-header alert alert-success d-flex justify-content-center">Success! Congratulation on finding Falcone. King Shan is mighty pleased !!! </p>
            <div className="card-body">
               
                <p className="alert alert-success d-flex justify-content-center">Time Taken: <span> {props.result.timeTaken}</span></p>
                <p className="alert alert-success d-flex justify-content-center">Planet found: <span >{props.result.planetName}</span></p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success"><Link to='/' className="text-light">Start Again</Link></button>
                
            </div>
        </div> : <div >
                <div className="alert alert-warning d-flex justify-content-center">Oh no! Falcone not found. King Shan would be very angry !!!</div>
                <div className="d-flex justify-content-center"> <button className="btn btn-success "><Link to="/" className="text-light">Retry Again</Link></button></div>
            </div >
    )
}


function mapStateToProps(state, ownProps) {
    return {
        result: state.result,
    };
}

export default connect(mapStateToProps, {})(Result);