import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Weather from './Component/whether.component';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

const API_key ="3d30f05d3fe87d3b5da3923a01471a24";


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celcius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    }
    this.getWeather();

    // this.weatherIcon={
    //   Thunderstorm
    // } 
  }

  calCelcius(temp){
    let cell = Math.floor(temp-273.15)
    return cell;
  }

  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
    city:response.name,
    country:response.sys.country,
    celcius:this.calCelcius(response.main.temp),
    temp_max:this.calCelcius(response.main.temp_max),
    temp_min:this.calCelcius(response.main.temp_min),
    description:response.weather[0].description,
    // icon:this.weatherIcon.Thunderstorm
    })
    
  }
  
  render() {
    return (
      <div className="App">
        <Weather 
        city={this.state.city} 
        country={this.state.country}
        temp_celcius={this.state.celcius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.weatherIcon}/>
      </div>
    )
  }
}


export default App;
