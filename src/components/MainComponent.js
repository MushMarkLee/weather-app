import React, { Component } from 'react';


import CITIES from "../shared/city.json";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";

import TextField from "@material-ui/core/TextField";


const OPTIONS_LIMIT = 10;
const defaultFilterOptions = createFilterOptions();

const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            long: '',
            weathers: [],
        };

        this.cities = []
        this.cities_dict = {}

        CITIES.map((cit) => {
            this.cities.push(cit.name)
            this.cities_dict[cit.name.toLowerCase()] = cit
        })
        // console.log(this.cities_dict)
        this.handleRenderWeather = this.handleRenderWeather.bind(this)
        this.selectCity = this.selectCity.bind(this)
        // console.log(props.cities)
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude});
                this.handleRenderWeather();
                // console.log(this.cities_dict)

            })

    }

    handleRenderWeather()  {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=db603f7fcb51a2c7cee805e8e6c5488e`
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({weathers: result})
                // console.log(result)
                let temp = result.main.temp
                let city = result.name
                this.setState({weathers: [temp, city]})
                // console.log(this.state.weathers)
            })
    }

    selectCity(event)  {
        let city_name = event.target.value.toLowerCase()

        if (city_name in this.cities_dict) {
            let found_city = this.cities_dict[city_name]
            // console.log(found_city)
            let lat = found_city.coord.lat
            let lon = found_city.coord.lon
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db603f7fcb51a2c7cee805e8e6c5488e`

            fetch(url)
                .then(response => response.json())
                .then(result => {
                    this.setState({weathers: result})
                    // console.log(result)
                    let temp = result.main.temp
                    let city = result.name
                    this.setState({weathers: [temp, city]})
                    // console.log(this.state.weathers)
                })
        }
    }



    render() {

        return(
            <div>
                <h2>Weather</h2>
                <p>{this.state.weathers[1]}</p>
                <p>{Number((this.state.weathers[0]-273).toFixed(1))} °C </p>


                <Autocomplete
                    style={{ width: 500 }}
                    filterOptions={filterOptions}
                    options={this.cities}
                    renderInput={(params) => (
                        <TextField {...params}
                                   variant="outlined"
                                   label="Type your city"
                                   onSelect={(e) => this.selectCity(e)}

                        />
                    )}
                />

            </div>
        )
    }
}
export default Main