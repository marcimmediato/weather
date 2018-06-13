import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import SearchBar from './components/SearchBar';
import ForecastList from './components/ForecastList';

const BASE_URL =
  'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&units=imperial&q=';
const APP_ID = '81e5d6b0b332d48eefcc4cd4ebd44be3';

class App extends Component {
  state = {
    forecast: null
  };

  fetchWeather(city) {
    console.log(`Called fetch with: ${city}`);

    axios
      .get(`${BASE_URL}${city},us&APPID=${APP_ID}`)
      .then(res => {
        this.setState({ forecast: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let forecast = <div>Loading...</div>;

    if (this.state.forecast) {
      forecast = <ForecastList forecast={this.state.forecast} />;
    }
    return (
      <div className="App">
        <SearchBar fetch={this.fetchWeather.bind(this)} />
        <table>
          <tbody>{forecast}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
