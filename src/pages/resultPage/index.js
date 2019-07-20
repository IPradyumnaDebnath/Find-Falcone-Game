import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import './style.css';

const Result = (props) => {
    if(props.result.success){
        return(
            <div className="resultContainer">
                <p className="success">Success! Congratulation on finding Falcone. King Shan is mighty pleased </p>
                <br/>
                <p className="success">Time Taken : <span className="success bold">{props.result.timeTaken}</span></p>
                <br/>
                <p className="success">Planet found: <span className="success bold">{props.result.planetName}</span></p>
                <Link to='/' className="restart">Start Again</Link>
            </div>
        )
    }else{
        return(
            <div className="resultContainer">
                <p className="error">Error, No Result Found</p>
                <br/>
                <Link to="/" className="restart">Retry Again</Link>
            </div>
        )
    }
}

/** 
 *  Mapping the state to desired props for the component
 */
function mapStateToProps(state, ownProps) {
    return {
        result: state.result,
    };
}

export default connect(mapStateToProps,{})(Result);