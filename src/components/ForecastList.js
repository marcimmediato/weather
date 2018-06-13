import React from 'react';
import ForecastListItem from './ForecastListItem';

const ForecastList = props => {
  const forecastList = props.forecast.list.map((day, index) => {
    return <ForecastListItem forecast={day} key={index} />;
  });

  return (
    <tr className="weather-row">
      <td className="name-of-city">{props.forecast.city.name}</td>
      {forecastList}
    </tr>
  );
};

export default ForecastList;
