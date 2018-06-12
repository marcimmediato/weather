import React from 'react';
import ForecastListItem from './ForecastListItem';

const ForecastList = props => {
  const forecastList = props.forecast.list.map((day, index) => {
    return <ForecastListItem forecast={day} key={index} />;
  });

  //let forecastList = props.forecast || <div>Loading Forecast</div>;

  return <div>{forecastList}</div>;
};

export default ForecastList;
