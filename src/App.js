import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import ForecastList from './components/ForecastList';

import forecastData from './forecastData';

class App extends Component {
  state = {
    forecast: null
  };

  fetchWeather(city) {
    console.log(`Called fetch with: ${city}`);
    // Add API call here down the road.
    this.setState({ forecast: forecastData });
  }

  render() {
    let forecast = <div>Loading...</div>;

    if (this.state.forecast) {
      forecast = <ForecastList forecast={this.state.forecast} />;
    }
    return (
      <div className="App">
        <SearchBar fetch={this.fetchWeather.bind(this)} />
        {forecast}
      </div>
    );
  }
}

export default App;
