import React from 'react';
import ForecastListItem from './ForecastListItem';

const ForecastList = props => {
  const googleLinkBaseURL = 'https://www.google.com/maps/place/';
  const { forecast } = props;
  const { lon, lat } = props.forecast.city.coord;
  const forecastList = forecast.list.map((day, index) => {
    return <ForecastListItem forecast={day} key={index} />;
  });

  return (
    <tr className="weather-row">
      <td className="name-of-city">
        <a href={`${googleLinkBaseURL}${lat},${lon}`} target="_blank">
          {forecast.city.name}
        </a>
      </td>
      {forecastList}
    </tr>
  );
};

export default ForecastList;
