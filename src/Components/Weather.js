import React, { Component } from 'react';
import request from 'superagent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

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
    let city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    request.get(url, (err, res) => {
      console.log(res.body);       
      this.setState({
        location: res.body.name,
        weather: res.body.weather[0].description || res.body.weather[1].description ,
        temp: res.body.main.temp_max,
        icon: res.body.weather[0].main || res.body.weather[1].main
      })                
    });
  }
 
  render() {

    let icon = '';
    
    if (this.state.weatherType == "Drizzle" || this.state.weatherType == "Rain") {
    
    }

    return (
      <div className="weather">
        <p className="weather-location">
        The weather in {this.state.location}
        </p>
        <hr/>
        <p className='weather-temperature'>
        {this.state.temp} <span className="metric">℃</span>
        </p>
        

        <p className='weather-description'>{this.state.weather}</p>

        <div className="weather-logo">
          <FontAwesomeIcon icon={faCloudRain} size="4x" color="white" /> 
        </div>                        
      </div>            
    );
  }
}
