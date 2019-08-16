import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlanetSelection from './PlanetSelection';
import Timer from './Timer';
import { getPlanets } from '../redux/actions/planetAction';
import { getVechicles } from '../redux/actions/vehicleAction';
import FindFalconeButton from './FalconFinder';
import 'bootstrap/dist/css/bootstrap.css';

class PlanetFinder extends React.Component {

    componentDidMount() {
        this.props.getPlanets();
        this.props.getVechicles();
    }

    render() {
        return (
            <div className="Container">
                <div className=" d-flex justify-content-center mt-2 border-bottom" ><h2>Select Planets you want to search in:</h2></div>
                <div className="row d-flex justify-content-center mt-5">
                    <PlanetSelection step={0} />
                    <PlanetSelection step={1} />
                    <PlanetSelection step={2} />
                    <PlanetSelection step={3} />
                    <Timer />
                </div>
                <FindFalconeButton />
            </div>

        )
    }
}


const mapDispatchToProps = {
    getPlanets,
    getVechicles
};


export default withRouter(connect(null, mapDispatchToProps)(PlanetFinder));