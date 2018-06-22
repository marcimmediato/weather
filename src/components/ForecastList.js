import React from 'react';
import ForecastListItem from './ForecastListItem';

const ForecastList = props => {
  const googleLinkBaseURL = 'https://www.google.com/maps/place/';
  const { forecast } = props;
  const { lon, lat } = props.forecast.city.coord;
  const forecastList = forecast.list.map((day, index) => {
    return <ForecastListItem forecast={day} key={index} dayNum={index + 1} />;
  });

  return (
    <div className="grid-row">
      <div className="name-of-city">
        <a href={`${googleLinkBaseURL}${lat},${lon}`} target="_blank">
          {forecast.city.name}
        </a>
      </div>
      {forecastList}
    </div>
  );
};

export default ForecastList;
