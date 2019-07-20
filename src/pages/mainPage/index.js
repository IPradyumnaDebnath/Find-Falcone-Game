import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlanetSelection from '../../components/selectPlanet';
import Timer from '../../components/timer';
import { getPlanets } from '../../redux/actions/planetAction';
import { getVechicles } from '../../redux/actions/vehicleAction';
import './style.css';
import FindFalconeButton from '../../components/findFalcone';


class PlanetFinder extends React.Component{
    
    componentDidMount(){
        this.props.getPlanets();
        this.props.getVechicles();
    }

    render(){
        return (
            <div className="finderContainer">
                <div className="title">Select Planets you want to search in:</div>
                <div className="planetSelectContainer">
                    <PlanetSelection step={0} />
                    <PlanetSelection step={1} />
                    <PlanetSelection step={2} />
                    <PlanetSelection step={3} />
                    <Timer/>
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