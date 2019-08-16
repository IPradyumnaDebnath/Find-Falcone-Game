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
                <div className="card">
                <div className="card-header mr-3 mt-2 border-bottom" >
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger mr-2 btn-xs">  <a className="text-light" href="/">Reset</a></button>
                        <button className="btn  btn-primary btn-xs"><a className="text-light" href={"https://www.linkedin.com/in/pradyumna-debnath-750239b7/"} rel="noopener noreferrer" target="_blank">Pradyumna</a></button>
                    </div>
                    <div className="d-flex justify-content-center"><h1>Finding Falcone !</h1></div>
                    <div className="d-flex justify-content-center"> <h2>Select Planets you want to search in:</h2></div>
                </div>
                <div className="card-body d-flex justify-content-center mt-5">
                    <PlanetSelection step={0} />
                    <PlanetSelection step={1} />
                    <PlanetSelection step={2} />
                    <PlanetSelection step={3} />
                    <Timer />
                </div>
                </div>
                <FindFalconeButton />
                <div className="d-flex justify-content-center">
                  <a className="text-light" href="/">Reset</a>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = {
    getPlanets,
    getVechicles
};


export default withRouter(connect(null, mapDispatchToProps)(PlanetFinder));