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
      <div>Min: {temp.min}</div>
      <div>Max: {temp.max}</div>
      <div>Humidity: {humidity}</div>
    </td>
  );
};
