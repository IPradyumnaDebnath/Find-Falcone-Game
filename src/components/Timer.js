import React from 'react';
import { connect } from 'react-redux';
import { updateTimeTaken } from '../redux/actions/gameAction';


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
        props.VehicleSelectionList.map((item,index)=> {
            timeTaken += planetDistanceList[index]/props.vehicleMap[item]
            return item;
        })
        !isNaN(timeTaken) && timeTaken !== 0 && this.state.timeTaken !==  timeTaken && this.setState({timeTaken})
    }

    render(){
        return (
            <div className="Container ml-3">
                <div className="row justify-content-center "></div>
                <h2>Time Taken</h2>
                <div className="row justify-content-center border rounded-pill ">{this.state.timeTaken}</div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        planetMap:  state.planetDetails.planetMap,
        vehicleMap: state.vehicleDetails.vehicleMap,
        planetSelectionList: state.planetDetails.planetSelectionList,
        VehicleSelectionList: state.vehicleDetails.VehicleSelectionList
    };
}

export default connect(mapStateToProps, {updateTimeTaken})(Timer);