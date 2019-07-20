import React from 'react';
import { connect } from 'react-redux';
import { updateTimeTaken } from '../../redux/actions/gameAction';
import './style.css';

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            timeTaken: 0
        }
    }
    
    componentWillUnmount(){
        this.props.updateTimeTaken(this.state.timeTaken);
    }
    
    componentDidUpdate(){
        let timeTaken = 0;
        let { props } = this; 
        let planetDistanceList = [];
        props.planetSelectionList.map((item)=> {
            planetDistanceList.push(props.planetMap[item]); 
            return item;
        });
        props.vehicleSelectionList.map((item,index)=> {
            timeTaken += planetDistanceList[index]/props.vehicleMap[item]
            return item;
        })
        !isNaN(timeTaken) && timeTaken !== 0 && this.state.timeTaken !==  timeTaken && this.setState({timeTaken})
    }

    render(){
        return (
            <div className="timerContainer">
                Time Taken: {this.state.timeTaken}
            </div>
        )
    }
}

/** 
 *  Mapping the state to desired props for the component
 */
function mapStateToProps(state, ownProps) {
    return {
        planetMap:  state.planetDetails.planetMap,
        vehicleMap: state.vehicleDetails.vehicleMap,
        planetSelectionList: state.planetDetails.planetSelectionList,
        vehicleSelectionList: state.vehicleDetails.vehicleSelectionList
    };
}

export default connect(mapStateToProps, {updateTimeTaken})(Timer);