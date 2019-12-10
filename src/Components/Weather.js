import React, { Component } from 'react';
import request from 'superagent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTimeOfDay, getCountryFlag } from '../helpers/helpers';
import weatherData from '../data/weather-data'

const temperatureMessages = {
    hot: {
        30: "absolute scorcher",
        20: "lovely and hot",
    },
    cold: {
        15: "mild one",
        7: "little cold",
        4: "abit chilly",
        0: "freeeezing",
    }
}

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
    let city = "Reykjavík";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    request.get(url, (err, res) => {        
      console.log(res.body);       
      let { name, weather, icon, main, sys} = res.body;
      this.setState({
        location: name,
        weather: weather[0].description,
        temp: Math.round(main.temp_max),
        icon: weather[0].id,
        countryCode: sys.country,
      })                
    });
  }
  
  setHotOrColdTemperature = () => {
    return this.state.temp >= 18 ? 'hot-temp' : 'cold-temp';
  }

  getAllMessages = () => {    
    let { hot, cold } = temperatureMessages;
    let { temp } = this.state;
    
        if (temp >= 30) {  
            return hot[30];
        }      
        else if (temp >= 20) {
            return hot[20];            
        }             
        else if (temp >= 15) {
            return cold[15];            
        }             
        else if (temp >= 7) {
            return cold[7];
        }                         
        else if (temp >= 4) {
            return cold[4];            
        }             
        else if (temp <= 0) {
            return cold[0];            
        }                       
  }

  setTemperatureMessage = () => {  
    return this.getAllMessages();
  }    

  getWeatherIcon = () => {
    return weatherData.ids[this.state.icon];    
  }

  render() {
 
    return (      
      <div className="weather">  
        <h1 className="country-flag">{getCountryFlag(this.state.countryCode)}</h1>
        <h1 className="weather-location">
        The weather currently in {this.state.location}
        </h1>
        <hr/>
        <p className={`weather-temperature  ${this.setHotOrColdTemperature()}`}>
        {this.state.temp} <span className="metric">℃</span>
        </p>
        
        <hr/>
        <p className="weather-temperature">            
            It's gonna be a <span className={this.setHotOrColdTemperature()}>{this.setTemperatureMessage()}</span> {getTimeOfDay()}
        </p>
        <hr/>
        <p className='weather-description'>Looks like there is {this.state.weather} {getTimeOfDay()}</p>

        <div className="weather-logo">
          <FontAwesomeIcon icon={['fal', this.getWeatherIcon()]} size="3x" color="lightgrey" /> 
        </div>                        
      </div>            
    );
  }
}
