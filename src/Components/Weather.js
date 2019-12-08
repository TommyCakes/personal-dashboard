import React, { Component } from 'react';
import request from 'superagent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temp: '',
      weather: '', 
      weatherType: '', 
      icon: ''     
    };
    this.getWeatherForLocation()
  }

  getWeatherForLocation() {
    let apiKey = "8955ed88a3c211ccce8222a9866954f3";
    let city = "Rio De Janeiro";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    request.get(url, (err, res) => {        
      console.log(res.body);       
      let { name, weather, icon, main} = res.body;
      this.setState({
        location: name,
        weather: weather[0].description,
        temp: main.temp_max,
        icon: weather[0].main,
      })                
    });
  }
  
  setHotOrColdTemperature = () => {
    return this.state.temp >= 18 ? 'hot-temp' : 'cold-temp';
  }

  render() {

    let icon = '';
    
    if (this.state.weatherType == "Drizzle" || this.state.weatherType == "Rain") {
    
    }

    return (
      <div className="weather">
        <h1 className="weather-location">
        The weather currently in {this.state.location}
        </h1>
        <hr/>
        <p className={`weather-temperature  ${this.setHotOrColdTemperature()}`}>
        {this.state.temp} <span className="metric">℃</span>
        </p>
        
        <hr/>
        <p className='weather-description'>Looks like there is {this.state.weather} today</p>

        <div className="weather-logo">
          <FontAwesomeIcon icon={faCloudMoonRain} size="4x" color="white" /> 
        </div>                        
      </div>            
    );
  }
}
