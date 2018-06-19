import React from 'react';

import changeToDay from '../utils/changeToDay';

export default props => {
  const { temp, weather, dt, humidity } = props.forecast;

  return (
    <td>
      <div> {changeToDay(dt)}</div>
      <div>
        <img
          src={window.location.origin + `/img/${weather[0].icon}.png`}
          alt={weather[0].main}
        />
      </div>
      <div>{weather[0].main}</div>
      <div>Min: {Math.floor(temp.min)}&#176; F</div>
      <div>Max: {Math.floor(temp.max)}&#176; F</div>
    </td>
  );
};
