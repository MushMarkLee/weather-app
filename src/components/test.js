import React, { Component } from 'react';
import { fetchCities } from '../redux/ActionCreators';

import {connect} from "react-redux";
import { Switch, Route } from "react-router-dom";
import Main from "./MainComponent";

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCities: () => {dispatch(fetchCities())}
});



class Test extends Component{


    componentDidMount() {
        this.props.fetchCities();

    }


    render() {



        //
        // console.log(this.props.cities.cities)
        console.log(this.props.cities.cities)
        console.log(this.props.cities)
        // console.log(this.props.cities.cities)
        // let show =  this.props.cities.cities.slice(0, 5).map((city) =><p>{city}</p>)

        return (
            <div>

                <Main
                    // cities={this.props.cities.cities}
                />

            </div>

            )

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Test)