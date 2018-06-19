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
    forecasts: []
  };

  fetchWeather(city) {
    axios
      .get(`${BASE_URL}${city},us&APPID=${APP_ID}`)
      .then(res => {
        let newForecasts = this.state.forecasts;
        newForecasts.unshift(res.data);
        this.setState({ forecasts: newForecasts.slice(0, 5) });
      })
      .catch(err => console.log(err));
  }

  render() {
    let forecasts = (
      <tr>
        <td>
          <p>Loading...</p>
        </td>
      </tr>
    );

    if (this.state.forecasts.length > 0) {
      forecasts = this.state.forecasts.map((forecast, i) => {
        return (
          <ForecastList
            forecast={this.state.forecasts[i]}
            key={`forecast-${i}`}
          />
        );
      });
    }
    return (
      <div className="App">
        <SearchBar fetch={this.fetchWeather.bind(this)} />
        <table>
          <tbody>{forecasts}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
